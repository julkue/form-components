import FormComponent from '../../form-component';

export class Radio extends FormComponent {
  constructor(context, options) {
    super(
      context,
      context.querySelector('.radio__input'),
      options
    );
    super.init();
    console.debug('Radio initialized');
  }
}

export const selector = '[class^="radio--"]';
