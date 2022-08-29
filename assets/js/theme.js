//#region Import 
import { colorPalette, theme } from './app.js';
import { themeModal } from './app.js';
import { fontSizes } from './app.js';


//#endregion


//#region Function 

/** Funzione per aprire modale temi
 * 
 */
export const openThemeModal = () => {
    themeModal.style.display = 'grid' // Al click compare la modale
}

/** Funzione per chiudere la modale
 * 
 * @param {string} e Il mio target
 */
export const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none'
    }
}

/** Funzione per rimuovere classe attiva dagli span della modale (dimensione testo)
 * 
 */
export const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}

/** Funzione  per rimuovere classe attiva dagli span della modale (colore attivo)
 * 
 */
export const removeActiveColorSelector = () => {
    colorPalette.forEach(color => {
        color.classList.remove('active')
    })
}


//#endregion