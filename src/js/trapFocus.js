
let firstFocusableEl;
let lastFocusableEl;
const KEYCODE_TAB = 9;

export const trapFocus = (element, firstElementFocusIndex = 0) => {

    // Fetch all elements to focus
    const focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="number"]:not([disabled]), input[type="submit"], input[type="checkbox"]:not([disabled]), select:not([disabled])');
    firstFocusableEl = focusableEls[0];  
    lastFocusableEl = focusableEls[focusableEls.length - 1];

    focusableEls[firstElementFocusIndex].focus();

    element.addEventListener('keydown', handleTab);
}

const handleTab = (e) => {
    const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
  
    if (!isTabPressed) { 
        return; 
    }

    if (e.shiftKey) /* shift + tab */ {

        if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus();
            e.preventDefault();
        }

    } else /* tab */ {

        if (document.activeElement === lastFocusableEl) {
            firstFocusableEl.focus();
            e.preventDefault();
        }
        
    }

}