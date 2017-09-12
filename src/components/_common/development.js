import 'normalize.css/normalize.css';
import './development.scss';
const components = require.context('../', true, /^(.*\.(js$))[^.]*$/igm);

class Bootstrap {
  constructor() {
    this.initEvents();
  }

  initEvents() {
    // Detect if the document is already ready
    if (document.readyState === 'complete') {
      console.debug('Already ready');
      this.initOnce();
    } else {
      console.debug('Listening for ready event');
      document.addEventListener('DOMContentLoaded', () => this.initOnce());
    }

    // Add class to only add transitions if the page is loaded
    window.addEventListener('load', () => {
      document.body.classList.add('transition-ready');
    });
  }

  initOnce() {
    console.debug('DOM ready');
    this.initComponents(document);
  }

  initComponents(context) {
    console.debug('Initializing components in context: ', context);

    // Initialize all components (one class instance per component
    // occurrence). Don't initialize the same occurrence multiple times
    components.keys().forEach(key => {
      // Exclude the current file
      if (key.includes('development.js')) {
        return;
      }
      const component = components(key);
      // Catch cases where it's a class only for extending purposes, therefore
      // no selector is available
      if (!component.selector) {
        return;
      }
      // Iterate over all contexts, in case an array was provided
      [].concat(context).forEach(context => {
        // if the context itself matches the component selector
        let matches = [...context.querySelectorAll(component.selector)];
        if (context !== document && context.matches(component.selector)) {
          matches.push(context);
        }
        matches.forEach(context => {
          // NOTE: Only change this attribute if you've made sure that
          // components don't rely on it
          if (!context.hasAttribute('data-is-initialized')) {
            context.setAttribute('data-is-initialized', 'true');

            // continue initializing other components if one component fails
            try {
              new component['default'](context);
            } catch (e) {
              console.error(e.message, e.stack);
            }
          }
        });
      });
    });
  }
}

new Bootstrap();
