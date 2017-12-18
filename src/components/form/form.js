import MoveTo from 'moveto';

export class Form {
  constructor(form, options) {
    if (form) {
      this.form = form;
      this.message = this.form.querySelector('.message--error');
      this.options = Object.assign({}, {
        message: true
      }, options);
      this.initEvents();
    }
  }

  initEvents() {
    this.form.setAttribute('novalidate', '');
    this.form.addEventListener('submit', event => {
      let valid = true;
      this.formElements.forEach(field => {
        // validate with browser's rules
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
        this.focusFirstError();
        return false;
      } else {
        this.hideMessage();
        return true;
      }
    });
  }

  get formElements() {
    return [...this.form.querySelectorAll([
      '[class^="text-field--"] .text-field__input',
      '[class^="text-area--"] .text-area__input',
      '[class^="select--"] .select__select',
      '[class^="radio--"] .radio__input',
      '[class^="checkbox--"] .checkbox__input'
    ].join(','))];
  }

  setInvalid(field) {
    const target = field.parentElement.parentElement;
    if (target) {
      target.classList.add('is-invalid');
      target.setAttribute('aria-invalid', 'true');
    }
  }

  setValid(field) {
    const target = field.parentElement.parentElement;
    if (target) {
      target.classList.remove('is-invalid');
      target.removeAttribute('aria-invalid');
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

  getExistingError(field) {
    const type = this.getType(field);
    let element;
    if (type !== 'radio') {
      element = field;
    } else {
      element = this.getLastRadio(field.name);
    }
    return element.parentElement.parentElement.querySelector(`.${type}__error`);
  }

  getLastRadio(name) {
    let ret = null;
    [...this.form.querySelectorAll(
      `input[type="radio"][name="${name}"]`
    )].forEach((field, idx, items) => {
      if (idx === (items.length - 1)) {
        ret = field;
      }
    });
    return ret;
  }

  createError(field) {
    const type = this.getType(field);
    let error = this.getExistingError(field);
    if (!error) {
      error = document.createElement('div');
      error.classList.add(`${type}__error`);
      let target = null,
        insertBefore = null;
      if (type !== 'radio') {
        let next = field.parentElement.nextSibling,
          dropdown = field.parentElement.nextElementSibling;
        if (dropdown && dropdown.classList.contains('select__dropdown')) {
          next = dropdown.nextSibling; // insert after dropdown
        }
        target = field.parentElement.parentElement;
        insertBefore = next;
      } else {
        const radio = this.getLastRadio(field.name);
        target = radio.parentElement.parentElement;
        insertBefore = radio.parentElement.nextSibling;
      }
      target.insertBefore(error, insertBefore);
    }
    this.setErrorDescribedBy(field, error);
    error.innerText = field.validationMessage || 'Please fill out this field';
  }

  setErrorDescribedBy(field, error) {
    let id;
    if (field.hasAttribute('id')) {
      id = `error-${field.getAttribute('id')}`;
    } else if (field.hasAttribute('name')) {
      id = `error-${field.getAttribute('name')}`;
    }
    if (id) {
      error.setAttribute('id', id);
      field.setAttribute('aria-describedby', id);
    }
  }

  removeErrorDescribedBy(field) {
    field.removeAttribute('aria-describedby');
  }

  getErrors() {
    let errors = [];
    this.formElements.forEach(element => {
      const err = this.getExistingError(element);
      if (err) {
        errors.push(err);
      }
    });
    errors = errors.sort((a, b) => {
      // https://stackoverflow.com/a/22613028/3894981
      if (a === b) {
        return 0;
      }
      if (!a.compareDocumentPosition) {
        return a.sourceIndex - b.sourceIndex;
      }
      if (a.compareDocumentPosition(b) & 2) {
        return 1;
      }
      return -1;
    });
    if (Array.isArray(errors) && errors.length > 0) {
      return errors;
    } else {
      return [];
    }
  }

  removeError(field) {
    const type = this.getType(field),
      target = field.parentElement.parentElement,
      error = target.querySelector(`.${type}__error`);
    if (error) {
      target.removeChild(error);
      this.removeErrorDescribedBy(field);
    }
  }

  focusFirstError() {
    const errors = this.getErrors();
    if (errors.length >= 1) {
      errors[0].focus();
    }
  }

  showMessage() {
    const messageClose = this.message.querySelector('.message__close-button');
    if (this.message && this.options.message) {
      this.message.classList.remove('is-hidden');
      if (messageClose) {
        messageClose.setAttribute('tabindex', '0');
      }
      new MoveTo({
        duration: 400,
        tolerance: 10
      }).move(this.message);
    }
  }

  hideMessage() {
    const messageClose = this.message.querySelector('.message__close-button');
    if (this.message && this.options.message) {
      this.message.classList.add('is-hidden');
      if (messageClose) {
        messageClose.setAttribute('tabindex', '-1');
      }
    }
  }
}