import FormComponent from '../../form-component';

export class Checkbox extends FormComponent {
  constructor(context, options) {
    super(
      context,
      context.querySelector('.checkbox__input'),
      context.querySelector('.checkbox__error'),
      'Checkbox',
      options
    );
    super.init();
    this.wrapper = context.querySelector('.checkbox__wrapper');
    this.minAnimationDuration = 500;
    this.animationPassed = false;
    this.initEvents();
  }

  initEvents() {
    // Apply events to the wrapper and not context to ignore error messages
    // that are located outside the wrapper
    this.wrapper.addEventListener('mousedown', () => {
      if (this.field.checked || this.field.disabled) {
        return;
      }
      this.animationPassed = false;
      setTimeout(() => {
        this.animationPassed = true;
      }, this.minAnimationDuration);
      this.context.classList.add('is-pressed');
    });
    this.wrapper.addEventListener('mouseup', () => {
      if (this.field.checked || this.field.disabled) {
        return;
      }
      if (!this.animationPassed) {
        const itvl = setInterval(() => {
          if (this.animationPassed) {
            clearInterval(itvl);
            this.context.classList.remove('is-pressed');
          }
        }, 50);
      } else {
        this.context.classList.remove('is-pressed');
      }
    });
  }
}

export const selector = '[class^="checkbox--"]';
