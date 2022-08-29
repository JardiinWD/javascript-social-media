//#region Variabili
export const menuItems = querySelectorAll('.menu-item')
//#endregion 


//#region Import
import { querySelectorAll } from './function.js'; // Funzione per il querySelector, valida per tutte
import { changeActiveItem } from './function.js'; // Rimuove classe Active su Tutte

//#endregion

//#region Cicli
menuItems.forEach(element => {
    element.addEventListener('click', () => {
        changeActiveItem() // Invoco la mia funzione per rimuovere la classe active su tutti
        element.classList.add('active') // Aggiungo la classe active solo sul richiesto
    })
})



//#endregion

