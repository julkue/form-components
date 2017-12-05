export class Form {
  constructor(form) {
    this.form = form;
    this.init();
  }

  init() {
    this.form.setAttribute('novalidate', '');
    this.form.addEventListener('submit', event => {
      const fields = this.formElements;
      let valid = true;
      fields.forEach(field => {
        if (!field.checkValidity()) {
          valid = false;
          this.createError(field);
          this.setInvalid(field);
        } else {
          this.removeError(field);
          this.setValid(field);
        }
      });
      if (!valid) {
        event.preventDefault();
        this.showMessage();
        return false;
      } else {
        this.hideMessage();
        return true;
      }
    });
  }

  get formElements() {
    return [...this.form.querySelectorAll([
      '.text-field__input',
      '.text-area__input',
      '.select__select',
      '.radio__input',
      '.checkbox__input'
    ].join(','))];
  }

  setInvalid(field) {
    const target = field.parentElement.parentElement;
    if (target) {
      target.classList.add('is-invalid');
    }
  }

  setValid(field) {
    const target = field.parentElement.parentElement;
    if (target) {
      target.classList.remove('is-invalid');
    }
  }

  getType(element) {
    if (element.tagName === 'SELECT') {
      return 'select';
    } else if (element.tagName === 'TEXTAREA') {
      return 'text-area';
    }
    switch (element.getAttribute('type')) {
      case 'checkbox':
        return 'checkbox';
      case 'radio':
        return 'radio';
      default:
        return 'text-field';
    }
  }

  createError(field) {
    const type = this.getType(field),
      target = field.parentElement; // wrapper
    let error = target.parentElement.querySelector(`.${type}__error`);
    if (error === null) {
      error = document.createElement('div');
      error.classList.add(`${type}__error`);
      let next = error.nextSibling,
        dropdown = error.nextElementSibling;
      if (dropdown && dropdown.tagName === 'DIV') {
        if (dropdown.classList.contains('select__dropdown')) {
          next = next.nextSibling; // insert after dropdown
        }
      }
      target.parentElement.insertBefore(error, next);
    }
    error.innerText = field.validationMessage || 'Please fill out this field';
  }

  removeError(field) {
    const type = this.getType(field),
      target = field.parentElement.parentElement,
      error = target.querySelector(`.${type}__error`);
    if (error) {
      target.removeChild(error);
    }
  }

  showMessage() {
    const message = this.form.querySelector('.message--error');
    if (message) {
      message.classList.remove('is-hidden');
    }
  }

  hideMessage() {
    const message = this.form.querySelector('.message--error');
    if (message) {
      message.classList.add('is-hidden');
    }
  }
}