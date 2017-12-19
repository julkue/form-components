export class Message {
  constructor(context, options) {
    this.options = Object.assign({}, {
      focusOnStart: true
    }, options);
    this.message = context;
    this.messages = [...document.querySelectorAll(selector)];
    this.closeButton = context.querySelector('.message__close-button');
    this.init();
    console.debug('Message initialized');
  }

  init() {
    // check if the parent element of the message (or the parents parent in case
    // one div is wrapped our) is matching the <main> tag. Otherwise we can
    // assume it's an inline message
    const parent = this.message.parentElement;
    if (parent) {
      if (parent.nodeName !== 'MAIN' && parent.nodeName !== 'BODY') {
        const parentParent = parent.parentElement;
        if (parentParent && parentParent.nodeName !== 'MAIN') {
          if (parentParent.nodeName !== 'BODY') {
            this.message.classList.add('is-inline');
          }
        }
      }
    }

    if (this.closeButton) {
      // set role button if not available already
      if (!this.closeButton.hasAttribute('role')) {
        this.closeButton.setAttribute('role', 'button');
      }
      this.closeButton.addEventListener('click', () => this.hide());
      this.closeButton.addEventListener('keydown', event => {
        if (event.keyCode === 13) {
          this.hide();
        }
      });
      if (this.message.classList.contains('is-hidden')) {
        this.hide(); // make sure tabindex is correctly
      }
    }

    if (this.messages[0] === this.message && this.options.focusOnStart) {
      if (!this.message.classList.contains('is-hidden')) {
        // the browser focuses the document on init by default. Wait for it
        // with setTimeout and focus the message instead. Also, remove and add
        // the class otherwise the browser won't focus the message since it's
        // not focusable by default (has no tabindex)
        this.message.classList.add('is-hidden');
        setTimeout(() => {
          this.message.classList.remove('is-hidden');
          this.message.focus();
        }, 100);
      }
    }
  }

  hide() {
    this.message.classList.add('is-hidden');
    this.closeButton.setAttribute('tabindex', '-1');
  }
}

export const selector = '[class^="message--"]';
