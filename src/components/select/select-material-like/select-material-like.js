import FormComponent from '../../form-component';
import Bowser from 'bowser';

export class Select extends FormComponent {
  constructor(context, options) {
    super(
      context,
      context.querySelector('.select__select'),
      options
    );
    super.init();

    this.wrapper = context.querySelector('.select__wrapper');
    this.error = context.querySelector('.select__error');
    this.dropdown = null;
    this.dropdownOptions = [];

    this.createDropdown();
    if (!this.field.hasAttribute('disabled')) {
      this.initEvents();
    }
    console.debug('Select initialized');
  }

  createDropdown() {
    this.dropdown = document.createElement('ul');
    this.dropdown.classList.add('select__dropdown');
    this.dropdownOptions = [...this.field.options].map(dropdownOption => {
      const option = document.createElement('li');
      option.classList.add('select__dropdown-option');
      option.textContent = dropdownOption.textContent;
      if (dropdownOption.getAttribute('disabled') !== null) {
        option.classList.add('is-disabled');
      }
      this.dropdown.appendChild(option);
      return option;
    });
    if (!this.error) {
      this.context.appendChild(this.dropdown);
    } else {
      this.context.insertBefore(this.dropdown, this.error);
    }
  }

  initEvents() {
    this.context.addEventListener('keydown', event => this.onKeydown(event));
    // for native changes (e.g. iOS):
    this.field.addEventListener('change', () => {
      this.setActive(this.field.selectedIndex);
    });
    if ((!Bowser.mobile && !Bowser.tablet)) {
      // It's important to use mousedown instead of click for Desktop, otherwise
      // it's too late to prevent the default select dropdown
      // Also listen for pointerdown, in case its a touch Desktop device
      // (Edge doesn't listen to touchstart if it's a touch Desktop device,
      // only for pointerdown)
      ['mousedown', 'pointerdown'].forEach(listener => {
        this.field.addEventListener(listener, e => {
          e.preventDefault();
          // prevent other above named listeners from handling the same action:
          e.stopPropagation();
          this.toggle();
        });
      });
    }
    this.dropdownOptions.forEach((option, index) => {
      if (option.classList.contains('is-disabled')) {
        return;
      }
      option.addEventListener('click', () => {
        this.setActive(index);
        this.close();
      });
    });
    this.setActive(this.field.selectedIndex);
    document.body.addEventListener('click', event => {
      if (event.target === this.context || this.context.contains(event.target)) {
        return;
      }
      this.close();
    });
  }

  onEnter() {
    this.toggle();
  }

  onSpace() {
    this.close();
  }

  onEsc() {
    this.close();
  }

  onArrowKey(keyCode) {
    // NOTE: event.preventDefault() doesn't work in FF, therefore exceptions
    // must be implemented here for this case, to also work in FF. Also only
    // prevent the default action if it's a known keyCode. Otherwise don't
    // do anything, e.g. to not prevent tab navigation
    // Due to the fact that Firefox on Windows will only open the native
    // dropdown by using space, all other browser are toggling it, we can
    // only close the custom dropdown to make it work with FF on Win.
    if (!Bowser.firefox) {
      // Firefox doesn't allow keydown default behavior prevention,
      // therefore it'll update the value itself and call the change
      // listener which will update the custom dropdown option. Without
      // the prevention of the default select keydown action, macOS shows
      // the native dropdown in this case, meaning it's visible in Firefox
      // on macOS as soon as you're navigating by keyboard. Bug:
      // https://bugzilla.mozilla.org/show_bug.cgi?id=1019630
      const expectedIdx = this.getSiblingDropdownOption(
        [39, 40].includes(keyCode)
      );
      this.setActive(expectedIdx);
      if (!this.isOpen) {
        this.open();
      }
    }
  }

  onKeydown(event) {
    const keyCode = event.keyCode;
    switch (keyCode) {
    case 13: // enter
      event.preventDefault();
      this.onEnter();
      break;
    case 32: // space
      event.preventDefault();
      this.onSpace();
      break;
    case 37: // left
    case 38: // up
    case 39: // right
    case 40: // down
      event.preventDefault();
      this.onArrowKey(keyCode);
      break;
    case 27: // esc
      event.preventDefault();
      this.onEsc();
      break;
    default:
      return;
    }
  }

  get isOpen() {
    return this.context.classList.contains('is-open');
  }

  toggle() {
    if (!this.isOpen) {
      return this.open();
    } else {
      return this.close();
    }
  }

  open() {
    this.context.classList.add('is-open');
    this.field.focus();
    this.scrollActiveDropdownOptionIntoView();
  }

  close() {
    this.context.classList.remove('is-open');
    this.setIsFilledIn();
  }

  setActive(index) {
    // Check if an element with that index exists
    if (this.field.options[index]) {
      this.setActiveDropdownOption(index);
      this.setActiveNativeOption(index);
    }
  }

  setActiveDropdownOption(index) {
    // Check if an element with that index exists
    if (!this.dropdownOptions[index]) {
      return;
    }
    this.dropdownOptions.forEach((option, dropdownIndex) => {
      if (index === dropdownIndex) {
        option.classList.add('is-selected');
      } else {
        option.classList.remove('is-selected');
      }
    });
    this.scrollActiveDropdownOptionIntoView();
  }

  setActiveNativeOption(index) {
    // Check if an element with that index exists
    if (!this.field.options[index]) {
      return;
    }
    const hasChanged = this.field.selectedIndex !== index;
    this.field.selectedIndex = index;
    [...this.field.options].forEach((option, optionIndex) => {
      if (optionIndex === index) {
        option.selected = true;
        option.setAttribute('selected', 'selected');
      } else {
        option.selected = false;
        if (option.hasAttribute('selected')) {
          option.removeAttribute('selected');
        }
      }
    });
    if (hasChanged) {
      // Trigger native onchange event
      if (document.createEvent) {
        const evt = document.createEvent('HTMLEvents');
        evt.initEvent('change', true, false);
        this.field.dispatchEvent(evt);
      } else if (document.createEventObject) {
        this.field.fireEvent('change');
      } else if (typeof this.field.onchange === 'function') {
        this.field.onchange();
      }
    }
  }

  scrollActiveDropdownOptionIntoView() {
    const target = this.dropdownOptions[this.field.selectedIndex];
    target.parentNode.scrollTop = target.offsetTop;
  }

  getSiblingDropdownOption(next) {
    const base = this.field.selectedIndex;
    let newIdx = base;
    if (next) {
      for (let i = base + 1; i < this.dropdownOptions.length; i++) {
        if (!this.dropdownOptions[i].classList.contains('is-disabled')) {
          newIdx = i;
          break;
        }
      }
    } else {
      for (let i = base - 1; i >= 0; i--) {
        if (!this.dropdownOptions[i].classList.contains('is-disabled')) {
          newIdx = i;
          break;
        }
      }
    }
    return newIdx;
  }
}

export const selector = '[class^="select--"]';
