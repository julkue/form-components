export class Message {
  constructor(context) {
    this.message = context;
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
      this.closeButton.addEventListener('click', () => {
        if (this.message.parentElement) {
          this.message.parentElement.removeChild(this.message);
        }
      });
    }
  }
}

export const selector = '[class^="message--"]';
