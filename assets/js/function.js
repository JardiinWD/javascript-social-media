//#region Imports
import { menuItems } from './app.js';
import { messageSearch } from './app.js';
import { message } from './app.js';


//#endregion

/** Funzione per rimuovere stato attivo non necessario
 * 
 */
export function changeActiveItem() {
    menuItems.forEach(element => {
        element.classList.remove('active')
    })
}

/** Funzione per leggere tutti i querySelector
 * 
 * @param {string} element Classe/id da inserire nel query Selector
 */
export function querySelectorAll(element) {
    return document.querySelectorAll(element)
}

/** Funzione per leggere querySelector specifici
 * 
 * @param {string} element Classe/id da inserire nel query Selector
 * @returns 
 */
export function querySelector(element) {
    return document.querySelector(element)
}

/** Funzione per filtrare messaggi
 * 
 */
export const searchMessage = () => {
    const val = messageSearch.value.toLowerCase() // Salvo l'input dell'utente
    console.log(val); // Verifico in console
    // Eseguo un loop su tutti i messaggi della chat
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase() // Selezioni i miei nomi
        if (name.indexOf(val) != -1) {
            chat.style.display = 'flex'
        } else {
            chat.style.display = 'none'
        }
    })
}