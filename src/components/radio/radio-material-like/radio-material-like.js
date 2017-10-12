import FormComponent from '../../form-component';

export class Radio extends FormComponent {
  constructor(context, options) {
    super(
      context,
      context.querySelector('.radio__input'),
      options
    );
    super.init();
    this.relocateOuterError();
    console.debug('Radio initialized');
  }

  relocateOuterError() {
    // Some CMS are handling multiple radios as one element, as you can
    // only choose one option. In this case the error message is generated
    // after all radios. Make sure to relocate such error elements into
    // the actual radio.
    const error = this.context.parentElement.querySelector('.radio__error');
    if (error) {
      this.context.appendChild(error);
    }
  }
}

export const selector = '[class^="radio--"]';
