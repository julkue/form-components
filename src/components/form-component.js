export default class FormComponent {
  constructor(context, field) {
    this.context = context;
    this.field = field;
    console.debug('Form component initialized');
  }

  init() {
    if (this.field.hasAttribute('disabled')) {
      this.context.classList.add('is-disabled');
    }
    this.setIsFilledIn();
    this.initFocus();
  }

  initFocus() {
    document.addEventListener('focus', event => {
      const ctx = this.context;
      if (event.target === ctx || ctx.contains(event.target)) {
        this.context.classList.add('is-focused');
      }
    }, true);
    document.addEventListener('focusout', event => {
      const ctx = this.context;
      if (event.target === ctx || ctx.contains(event.target)) {
        this.context.classList.remove('is-focused');
      }
    }, true);
  }

  setIsFilledIn(isFilledIn = !!this.field.value) {
    this.context.classList[isFilledIn ? 'add' : 'remove']('is-filled-in');
  }
}
