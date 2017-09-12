export default class FormComponent {
  constructor(context, field) {
    this.context = context;
    this.field = field;
    console.debug('Form component initialized');
  }

  init() {
    if (this.field.hasAttribute('disabled')) {
      this.setStateClass('is-disabled', true);
    }
    this.setIsFilledIn();
  }

  setIsFilledIn(isFilledIn = !!this.field.value) {
    this.setStateClass('is-filled-in', isFilledIn);
  }

  setStateClass(className, add) {
    this.context.classList[add ? 'add' : 'remove'](className);
  }
}
