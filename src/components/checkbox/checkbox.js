import './checkbox.scss';
import FormComponent from '../form-component';

export default class Checkbox extends FormComponent {
  constructor(context) {
    super(
      context,
      context.querySelector('.checkbox__input')
    );
    super.init();
    console.debug('Checkbox initialized');
  }
}

export const selector = '[class^="checkbox--"]';
