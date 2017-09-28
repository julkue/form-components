export default class FormComponent {
  constructor(context, field, options) {
    this.context = context;
    this.field = field;
    this.options = Object.assign({}, {
      tabbed: true
    }, options);
    this.label = this.context.querySelector('label');
  }

  init() {
    if (this.field.hasAttribute('disabled')) {
      this.context.classList.add('is-disabled');
    }
    if (!this.label) {
      this.context.classList.add('has-no-label');
    }
    this.setIsFilledIn();
    this.initFocus();
    this.context.classList.add('is-initialized');
  }

  initFocus() {
    if (this.options.tabbed) {
      document.addEventListener('keyup', event => {
        if (event.keyCode === 9) {
          const chk = document.activeElement;
          if (chk === this.context || this.context.contains(chk)) {
            this.context.classList.add('is-tabbed');
            const listener = event => {
              const chk = event.target;
              if (chk === this.context || this.context.contains(chk)) {
                this.context.classList.remove('is-tabbed');
                document.removeEventListener('focusout', listener);
              }
            };
            document.addEventListener('focusout', listener);
          } else {
            if (this.context.classList.contains('is-tabbed')) {
              this.context.classList.remove('is-tabbed');
            }
          }
        }
      });
    }
    this.field.addEventListener('focus', () => {
      this.context.classList.add('is-focused');
    });
    this.field.addEventListener('focusout', () => {
      this.context.classList.remove('is-focused');
    });
  }

  setIsFilledIn(isFilledIn = !!this.field.value) {
    this.context.classList[isFilledIn ? 'add' : 'remove']('is-filled-in');
  }
}
