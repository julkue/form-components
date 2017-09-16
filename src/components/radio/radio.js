import './radio.scss';
import FormComponent from '../form-component';

export default class Radio extends FormComponent {
  constructor(context) {
    super(
      context,
      context.querySelector('.radio__input')
    );
    super.init();
    console.debug('Radio initialized');
  }
}

export const selector = '[class^="radio--"]';
