import "@babel/polyfill";
import './styles/main.scss';

import { Popup } from './Popup'

const popup = new Popup(document.getElementById('popup'));

/**
 * Opens popup window.
 */
function openPopup() {
    popup.open();
}

/**
 * Closes popup and executes <code>fncallback</code> function after close.
 * @param e event that occurred
 * @param fncallback function that will be executed when popup closed
 */
function closePopup(e, fncallback) {
    e.stopPropagation();

    if (e.target !== e.currentTarget)
        return;

    popup.close().then(() => {
        if (fncallback !== undefined) {
            fncallback();
        }
    })
}

// Adds closePopup and openPopup function to window scope.
window.closePopup = closePopup;
window.openPopup = openPopup;

