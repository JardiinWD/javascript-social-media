//#region Variabili

//Sidebar 
export const menuItems = querySelectorAll('.menu-item')
//Messaggi
export const messagesNotification = querySelector('#messages-notifications')
export const messages = querySelector('.messages')
export let message = messages.querySelectorAll('.message')
export const messageSearch = document.querySelector('#message-search')
//Tema
export const theme = querySelector('#theme') // Link della sideBar
export const themeModal = querySelector('.customize-theme')
//Font
export const fontSizes = querySelectorAll('.choose-size span')
export var root = document.querySelector(':root'); // Seleziono l'elemento radice
// Colore
export const colorPalette = document.querySelectorAll('.choose-color span')
// Colore di Background
export const colorBackground = document.querySelectorAll('.background .choose-bg div')
// Categorie zona DX
export const categoriesZone = querySelectorAll('.categories h6')

//#endregion 

//#region Import
import { querySelectorAll } from './function.js'; // Funzione per il querySelectorAll
import { querySelector } from './function.js'; // Funzione per il querySelector
import { changeActiveItem } from './function.js'; // Rimuove classe Active su Tutte
import { searchMessage } from './function.js'; // Funzione per filtrare i messaggi
import { openThemeModal } from './theme.js'; // Funzione per Aprire la modale della modifica tema
import { closeThemeModal } from './theme.js'; // Funzione per Chiudere la modale della modifica tema
import { removeSizeSelector } from './theme.js'; // Funzione per Rimuovere classe attiva sul selettore della dimensione testo
import { removeActiveColorSelector } from './theme.js'; // Funzione per Rimuovere classe attiva sul selettore del cambio colore
import { removeActiveBackgroundSelector } from './theme.js'; // Funzione per Rimuovere classe attiva sul selettore del cambio colore tema
import { changeBackground } from './theme.js'; // Funzione per cambio colore tema

/////////////////////////////
// Import delle mie function/variabili per manipolazione dom
import { feedsDomManipulation } from './function.js'; // Import della funzione per manipolazione Feeds
import { storiesDomManipulation } from './function.js'; // Import della funzione per manipolazione stories
import { removeCategoriesSelector } from './function.js';


//#endregion

//#region Invoke Functions
feedsDomManipulation() // Manipolazione feeds
storiesDomManipulation() // Manipolazione Stories
//#endregion 


//#region SideBar laterale
menuItems.forEach(element => {
    element.addEventListener('click', () => {
        changeActiveItem() // Invoco la mia funzione per rimuovere la classe active su tutti
        element.classList.add('active') // Aggiungo la classe active solo sul richiesto
        if (element.id != 'notificationsPopup') {
            querySelector('.notifications-popup').style.display = 'none' // Il mio menu a popup rimane nascosto
        } else {
            querySelector('.notifications-popup').style.display = 'block' // Faccio comparire il menu a popup
            querySelector('#notificationsPopup .notification-count').style.display = 'none' // Faccio scomparire il numero di notifiche
        }
    })
})

//#endregion

//#region Messages

// Highlight presente dietro il box al click
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 0.5rem hsl(252, 75%, 60%)' // Aggiungo il colore a tutto il box dei messaggi
    messagesNotification.querySelector('.notification-count').style.display = 'none'
    // Faccio scomparire dopo 2 secondi il mio box shadow
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000)
})
// Ricerca Chat
messageSearch.addEventListener('keyup', searchMessage)

//#endregion

//#region Cambio Tema/Font

// Apertura della modale
theme.addEventListener('click', openThemeModal)
// Chiusura della modale
themeModal.addEventListener('click', closeThemeModal)

// Dimensione font
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector() // Funzione per rimuovere la classe active
        let fontSize;
        size.classList.toggle('active') // Riattivazione della classe active

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px'
            root.style.setProperty('----sticky-top-left', '5.4rem')
            root.style.setProperty('----sticky-top-right', '5.4rem')
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px'
            root.style.setProperty('----sticky-top-left', '5.4rem')
            root.style.setProperty('----sticky-top-right', '-7rem')
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px'
            root.style.setProperty('----sticky-top-left', '-2rem')
            root.style.setProperty('----sticky-top-right', '-17rem')
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px'
            root.style.setProperty('----sticky-top-left', '-5rem')
            root.style.setProperty('----sticky-top-right', '-25rem')
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px'
            root.style.setProperty('----sticky-top-left', '-12rem')
            root.style.setProperty('----sticky-top-right', '-35rem')
        }
        // Cambio del font
        document.querySelector('html').style.fontSize = fontSize;
    })
})

// Cambio colore primario
colorPalette.forEach(color => {
    // PS => Color è il singolo span
    color.addEventListener('click', () => {
        removeActiveColorSelector() // Invoco la mia funzione per la classe attiva
        color.classList.toggle('active') // La riattivo al click
        let primary;
        let primaryHue; // Dichiaro la mia variabile inizialmente vuota
        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        }
        else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        }
        else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        }
        else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        }
        else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color.classList.add('active')
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

// Cambio colore background
colorBackground.forEach(color => {
    color.addEventListener('click', () => {
        removeActiveBackgroundSelector() // Invoco la mia funzione per la classe attiva
        color.classList.toggle('active') // La riattivo al click
        if (color.classList.contains('bg-1')) {
            window.location.reload()
        } else if (color.classList.contains('bg-2')) {
            changeBackground('95%', '20%', '15%')
        } else if (color.classList.contains('bg-3')) {
            changeBackground('95%', '10%', '0%')
        }
        color.classList.add('active')
    })
})

//#endregion

categoriesZone.forEach(category => {
    // Seleziono la mia classe general e la disattivo da subito
    const generalBox = document.querySelector('.generalBox')
    generalBox.style.display = 'none' // La disattivo da subito
    // Seleziono la mia classe richieste e la disattivo da subito
    const requestBox = document.querySelector('.requestBox')
    requestBox.style.display = 'none' // La disattivo da subito

    category.addEventListener('click', () => {
        removeCategoriesSelector() // Funzione per disattivare classe attiva
        category.classList.toggle('active') // La riattivo al click


        if (category.classList.contains('primary')) {
            // Tramite for of attivo la proprietà flex a tutti
            for (const single of message) single.style.display = 'flex'
            generalBox.style.display = 'none'
            requestBox.style.display = 'none'
        }
        else if (category.classList.contains('general')) {
            // Tramite for of attivo la proprietà none a tutti
            for (const single of message) single.style.display = 'none'
            generalBox.style.display = 'flex'
            requestBox.style.display = 'none'
        }
        else if (category.classList.contains('message-requests')) {
            for (const single of message) single.style.display = 'none'
            generalBox.style.display = 'none'
            requestBox.style.display = 'flex'
        }
        category.classList.add('active')

    })
})




//
