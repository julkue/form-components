export default class Message {
  constructor(context) {
    this.message = context;
    this.init();
    console.debug('Message initialized');
  }

  init() {
    // check if the parent element of the message (or the parents parent in case
    // one div is wrapped our) is matching the <main> tag. Otherwise we can
    // assume it's an inline message
    if (this.message.parentElement) {
      if (this.message.parentElement.nodeName !== 'MAIN') {
        if (this.message.parentElement.parentElement) {
          if (this.message.parentElement.parentElement.nodeName !== 'MAIN') {
            this.message.classList.add('is-inline');
          }
        }
      }
    }
  }
}

export const selector = '[class^="message--"]';
