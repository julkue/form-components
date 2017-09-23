import 'normalize.css/normalize.css';
import './development.scss';
import 'babel-polyfill';
// all non bundle JS files in subdirectories excluding the current file
const components = require.context(
  '../',
  true,
  /^\.\/[a-z-]+\/(?!development\.js$)[a-z-]+\/(?!.*-bundle\.js)[a-z-]+\.js/gm
);

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

    // Add class to only add transitions if the page is loaded (for development
    // purposes only)
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
    // Initialize all components (one class instance per component occurrence).
    // Don't initialize the same occurrence multiple times
    components.keys().forEach(key => {
      const component = components(key);
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
              new component[Object.keys(component)[0]](context);
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
