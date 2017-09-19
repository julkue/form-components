import './message-material-like.scss';

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
  }
}

export const selector = '[class^="message--"]';
