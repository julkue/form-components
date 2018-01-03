import FormComponent from '../../form-component';

export class Radio extends FormComponent {
  constructor(context, options) {
    super(
      context,
      context.querySelector('.radio__input'),
      context.querySelector('.radio__error'),
      'Radio',
      options
    );
    this.relocateOuterError();
    super.init();
  }

  relocateOuterError() {
    // Some CMS (D8) are handling multiple radios as one element, as you can
    // only choose one option. In this case the error message is generated
    // after the radios (not inside a radio div). Make sure to relocate such
    // error elements into the actual radio.
    const error = this.context.nextElementSibling;
    if (error && error.classList.contains('radio__error')) {
      // move the outside generated error message into the component
      this.context.appendChild(error);
      this.errorField = error;
    }
  }
}

export const selector = '[class^="radio--"]';
