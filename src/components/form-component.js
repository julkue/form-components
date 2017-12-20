export default class FormComponent {
  constructor(context, field, errorField, options) {
    this.context = context;
    this.field = field;
    this.errorField = errorField;
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
    if (this.errorField) {
      this.setInvalid();
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

  setInvalid() {
    if (this.field.matches('input[type="radio"]')) {
      // Also mark other fields of the same radio group as invalid.
      // This is necessary as an error message can be located after all
      // grouped radios and in this case the error element will only be
      // relocated to the last radio of this group. But invalid applies to all
      // of the radios (see also radio component).
      // Make sure to apply invalid only to radios of the same form
      const name = this.field.getAttribute('name'),
        form = this.getParentByTagName(this.field, 'form');
      if (name && form) {
        const elements = [...form.querySelectorAll(
          `input[type="radio"][name="${name}"]`
        )];
        elements.forEach(element => {
          // the wrapper is always two levels above the field
          const context = element.parentElement.parentElement;
          if (context) {
            context.classList.add('is-invalid');
          }
        });
      }
    } else {
      this.context.classList.add('is-invalid');
    }
  }

  setIsFilledIn(isFilledIn = !!this.field.value) {
    this.context.classList[isFilledIn ? 'add' : 'remove']('is-filled-in');
  }

  getParentByTagName(node, tagName) {
    let parent;
    if (node === null || tagName === '') {
      return parent;
    }
    parent = node.parentNode;
    tagName = tagName.toUpperCase();
    while (parent.tagName !== 'HTML') {
      if (parent.tagName === tagName) {
        return parent;
      }
      parent = parent.parentNode;
    }
    return parent;
  }
}