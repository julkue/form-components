export default class FormComponent {
  constructor(context, field) {
    this.context = context;
    this.field = field;
  }

  init() {
    if (this.field.hasAttribute('disabled')) {
      this.context.classList.add('is-disabled');
    }
    this.setIsFilledIn();
    this.initFocus();
  }

  initFocus() {
    document.addEventListener('keyup', event => {
      if (event.keyCode === 9) {
        const chk = document.activeElement;
        if (chk === this.context || this.context.contains(chk)) {
          this.context.classList.add('is-focused');
          const listener = event => {
            const chk = event.target;
            if (chk === this.context || this.context.contains(chk)) {
              this.context.classList.remove('is-focused');
              document.removeEventListener('focusout', listener);
            }
          };
          document.addEventListener('focusout', listener);
        } else {
          if (this.context.classList.contains('is-focused')) {
            this.context.classList.remove('is-focused');
          }
        }
      }
    });
  }

  setIsFilledIn(isFilledIn = !!this.field.value) {
    this.context.classList[isFilledIn ? 'add' : 'remove']('is-filled-in');
  }
}
