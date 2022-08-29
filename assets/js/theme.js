//#region Import 
import { theme } from './app.js';
import { themeModal } from './app.js';
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
//#endregion