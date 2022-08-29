//#region Imports
import { menuItems } from './app.js'; // Variabile in App.js

//#endregion

/**
 * Funzione per rimuovere stato attivo non necessario
 */
export function changeActiveItem() {
    menuItems.forEach(element => {
        element.classList.remove('active')
    })
}

/**
 * 
 * @param {string} element Classe da inserire nel query Selector
 */
export function querySelectorAll(element) {
    return document.querySelectorAll(element)
}