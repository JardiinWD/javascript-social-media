//#region Import 
import { colorBackground } from './app.js';
import { colorPalette } from './app.js';
import { themeModal } from './app.js';
import { fontSizes } from './app.js';
import { root } from './app.js';
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

/** Funzione per rimuovere classe Attiva dagli span della modale (background attivo)
 * 
 */
export const removeActiveBackgroundSelector = () => {
    colorBackground.forEach(color => {
        color.classList.remove('active')
    })
}

/** Funzione per sistemare il colore di background
 * 
 * @param {string} firstColor 
 * @param {string} secondColor 
 * @param {string} thirdColor 
 */
export function changeBackground(firstColor, secondColor, thirdColor) {
    // Variabili del colori background (solo inizializzate)
    let lightColorLightness;
    let darkColorLightness;
    let whiteColorLightness;
    // Assegno alle variabili i miei parametri
    whiteColorLightness = secondColor
    darkColorLightness = firstColor
    lightColorLightness = thirdColor
    // Ora al
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
}

//#endregion