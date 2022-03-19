

export const trapFocus = (element, firstElementFocusIndex) => {
    
    const focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="number"]:not([disabled]), input[type="submit"], input[type="checkbox"]:not([disabled]), select:not([disabled])');
    let firstFocusableEl = focusableEls[0];  
    let lastFocusableEl = focusableEls[focusableEls.length - 1];
    const KEYCODE_TAB = 9;

    if (firstElementFocusIndex) {
        focusableEls[firstElementFocusIndex].focus();
    } else {
        focusableEls[0].focus();
    }

    console.log(focusableEls)

    element.addEventListener('keydown', (e) => {
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
    });
}