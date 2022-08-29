//#region Variabili
//Sidebar 
export const menuItems = querySelectorAll('.menu-item')
//Messaggi
export const messagesNotification = querySelector('#messages-notifications')
export const messages = querySelector('.messages')
export const message = messages.querySelectorAll('.message')
export const messageSearch = document.querySelector('#message-search')
//Tema
export const theme = querySelector('#theme') // Link della sideBar
export const themeModal = querySelector('.customize-theme')
//Font
export const fontSize = querySelectorAll('.choose-size span')
export var root = document.querySelector(':root'); // Seleziono l'elemento radice
//#endregion 


//#region Import
import { querySelectorAll } from './function.js'; // Funzione per il querySelectorAll
import { querySelector } from './function.js'; // Funzione per il querySelector
import { changeActiveItem } from './function.js'; // Rimuove classe Active su Tutte
import { searchMessage } from './function.js'; // Funzione per filtrare i messaggi
import { openThemeModal } from './theme.js'; // Funzione per Aprire la modale della modifica tema
import { closeThemeModal } from './theme.js'; // Funzione per Aprire la modale della modifica tema


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

theme.addEventListener('click', openThemeModal)
themeModal.addEventListener('click', closeThemeModal)
fontSize.forEach(size => {
    let fontSize;

    size.addEventListener('click', () => {
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
        document.querySelector('html').style.fontSize = fontSize
    })



})


//#endregion