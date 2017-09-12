import './select.scss';
import FormComponent from '../form-component';
import Bowser from 'bowser';

export default class Select extends FormComponent {
  constructor(context) {
    super(
      context,
      context.querySelector('.select__select')
    );
    super.init();

    this.wrapper = context.querySelector('.select__wrapper');
    this.selectLabel = this.wrapper.querySelector('.select__label');
    this.selectDropdown = null;
    this.dropdownOptions = [];
    this.opened = false;

    this.init();
    console.debug('Select initialized');
  }

  init() {
    this.createDropdown();
    if (!this.selectLabel) {
      this.context.classList.add('has-no-label');
    }
    if (!this.field.hasAttribute('disabled')) {
      this.initEvents();
    }
  }

  createDropdown() {
    this.selectDropdown = document.createElement('ul');
    this.selectDropdown.classList.add('select__dropdown');
    this.dropdownOptions = [...this.field.options].map(dropdownOption => {
      const option = document.createElement('li');
      option.classList.add('select__dropdown-option');
      option.textContent = dropdownOption.textContent;
      option.setAttribute('aria-hidden', 'true');
      if (dropdownOption.getAttribute('disabled') !== null) {
        option.classList.add('is-disabled');
      }
      this.selectDropdown.appendChild(option);
      return option;
    });
    this.context.appendChild(this.selectDropdown);
  }

  initEvents() {
    this.context.addEventListener('keydown', event => this.onKeydown(event));
    this.field.addEventListener('change', () => { // native changes (e.g. iOS)
      this.setActive(this.field.selectedIndex);
    });
    if (!Bowser.mobile && !Bowser.tablet) {
      // it's important to use mousedown instead of click here, otherwise
      // it won't work
      this.field.addEventListener('mousedown', e => {
        e.preventDefault();
        this.toggleDropdown();
      });
    }
    this.dropdownOptions.forEach((option, index) => {
      if (option.classList.contains('is-disabled')) {
        return;
      }
      option.addEventListener('click', () => {
        this.setActive(index);
        this.closeDropdown();
      });
    });
    this.setActive(this.field.selectedIndex);
    document.body.addEventListener('click', event => {
      if (event.target === this.context || this.context.contains(event.target)) {
        return;
      }
      this.closeDropdown();
    });
  }

  toggleDropdown() {
    if (!this.opened) {
      return this.openDropdown();
    } else {
      return this.closeDropdown();
    }
  }

  openDropdown() {
    this.opened = true;
    this.setStateClass('is-open', this.opened);
    this.field.focus();
    this.scrollActiveDropdownOptionIntoView();
  }

  closeDropdown() {
    this.opened = false;
    this.setStateClass('is-open', this.opened);
    this.setIsFilledIn();
  }

  setActive(index) {
    // check if an element with that index exists
    if (this.field.options[index]) {
      this.setActiveDropdownOption(index);
      this.setActiveNativeOption(index);
    }
  }

  setActiveDropdownOption(index) {
    // check if an element with that index exists
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
    this.scrollActiveDropdownOptionIntoView(index);
  }

  setActiveNativeOption(index) {
    // check if an element with that index exists
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
        this.field.fireEvent('input');
      } else if (typeof this.field.onchange === 'function') {
        this.field.onchange();
      }
    }
  }

  scrollActiveDropdownOptionIntoView(index = this.field.selectedIndex) {
    const target = this.dropdownOptions[index];
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

  onKeydown(event) {
    // NOTE: event.preventDefault() doesn't work in FF, therefore exceptions
    // must be implemented here for this case, to also work in FF. Also only
    // prevent the default action if it's a known keyCode. Otherwise don't
    // do anything, e.g. to not prevent tab navigation
    const keyCode = event.keyCode;
    switch (keyCode) {
    case 13: // enter
      event.preventDefault();
      this.toggleDropdown();
      break;
    case 32: // space
      // Due to the fact that Firefox on Windows will only open the native
      // dropdown by using space, all other browser are toggling it, we can
      // only close the custom dropdown to make it work with FF on Win.
      event.preventDefault();
      this.closeDropdown();
      break;
    case 37: // left
    case 38: // up
    case 39: // right
    case 40: // down
      event.preventDefault();
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
        if (!this.opened) {
          this.openDropdown();
        }
      }
      break;
    case 27: // esc
      event.preventDefault();
      this.closeDropdown();
      break;
    default:
      return;
    }
  }
}

export const selector = '[class^="select--"]';
