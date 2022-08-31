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
// Richieste Zona DX
const requestBox = querySelectorAll('.requestBox .request')
// Recupero il mio button per il submit del nuovo post
const postButton = document.getElementById('postButton') // Mio button per creazione Post

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

//#region Categorie (messaggi, Richieste)
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
        // Condizione per i messaggi
        if (category.classList.contains('primary')) {
            // Tramite for of attivo la proprietà flex a tutti
            setTimeout(() => {
                for (const single of message) single.style.display = 'flex'
                generalBox.style.display = 'none'
                requestBox.style.display = 'none'
            }, 100)
        }
        // Condizione per il general
        else if (category.classList.contains('general')) {
            // Messo tutto dentro un intervallo di 200ms
            setTimeout(() => {
                // Tramite for of attivo la proprietà none a tutti
                for (const single of message) single.style.display = 'none'
                generalBox.style.display = 'flex'
                requestBox.style.display = 'none'
            }, 100)

        }
        // Condizione per le richieste
        else if (category.classList.contains('message-requests')) {
            setTimeout(() => {
                for (const single of message) single.style.display = 'none'
                generalBox.style.display = 'none'
                requestBox.style.display = 'flex'
            }, 100)
        }
        // Aggiungo la classe Active
        category.classList.add('active')
    })
})

// Selezione della singola richiesta di amicizia ed evento associato
for (let i = 0; i < requestBox.length; i++) {
    requestBox[i].addEventListener('click', () => {
        let accept = requestBox[i].querySelector('.accept') // Seleziono i tasti accetta
        let decline = requestBox[i].querySelector('.decline') // Seleziono i tasti Decline 
        let successMessage = requestBox[i].querySelector('.message-success') // Seleziono i messaggi Success 
        let declineMessage = requestBox[i].querySelector('.message-decline') // Seleziono i messaggi Decline 
        // Avvio ciclo sui tasti accetta
        accept.addEventListener('click', () => {
            successMessage.style.display = 'flex' // Attivo la classe per accettare
            // Avvio il mio timeout per far scomparire entrambi
            setTimeout(() => {
                successMessage.style.display = 'none'
                requestBox[i].style.display = 'none'
            }, 1000)
        })
        // Avvio ciclo sui tasti decline
        decline.addEventListener('click', () => {
            declineMessage.style.display = 'flex' // Attivo la classe per declinare
            // Avvio il mio timeout per far scomparire entrambi
            setTimeout(() => {
                declineMessage.style.display = 'none'
                requestBox[i].style.display = 'none'
            }, 1000)
        })
    })
}
//#endregion

//#region Creazione Post al click
postButton.addEventListener('click', (e) => {
    e.preventDefault() // Prevengo il default del submit
    const feedsPage = querySelector('.feeds') // Mio wrapper principale dove ciclo
    let inputTry = document.getElementById('create-post').value // Input del mio utente
    // Ora ottengo i minuti esatti del post
    const date = new Date();
    // Creo oggetto con le mie variabili necessarie
    const myPost = {
        input: inputTry,
        user_img: './assets/img/profile-8.jpg',
        username: 'Alessandro',
        user_zone: 'Zurigo',
        hour: date.getHours(),
        minute: date.getMinutes()
    }
    // Creo il singolo Post (in questo caso quello del mio input)
    let singlePost =
        `
            <div class="post-card">
                <div class="user">
                    <!-- /.profile-picture -->
                    <div class="profile-picture">
                        <img src="${myPost.user_img}">
                    </div>
                    <!-- /.ingo -->
                    <div class="ingo">
                        <h3>${myPost.username}</h3>
                        <small> ${myPost.user_zone}, ${myPost.hour}:${myPost.minute}</small>
                    </div>
                </div>
                <textarea disabled name="prova" id="provaInput" cols="30" rows="3">${myPost.input}</textarea> 
                <div class="action-buttons">
                    <!-- /.interaction-buttons -->
                    <div class="interaction-buttons">
                        <!-- /.left-buttons -->
                        <div class="left-buttons">
                            <!-- /.uil pointer uil-heart -->
                            <span><i class="uil pointer uil-heart"></i></span>
                            <!-- /.uil pointer uil-comment-dots -->
                            <span><i class="uil pointer uil-comment-dots"></i></span>  
                            <!-- /.uil pointer uil-share-alt -->
                            <span><i class="uil pointer uil-share-alt"></i></span>  
                        </div>
                        <!-- /.right-button -->
                        <div class="right-button">
                            <span><i class="uil pointer uil-bookmark-full"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        `
    // Lo pusho all'interno dei feeds
    feedsPage.insertAdjacentHTML('afterbegin', singlePost)
    // Ora che ho pushato seleziono la mia cards che ha display none
    const myPostCard = querySelector('.post-card')
    myPostCard.style.display = 'flex' // Le abilitò la proprietà flex
})
//#endregion