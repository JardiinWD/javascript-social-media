//#region Imports
import { menuItems } from './app.js';
import { messageSearch } from './app.js';
import { message } from './app.js';
import { categoriesZone } from './app.js';

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

/** Funzione per leggere ID specifici
 * 
 * @param {string} element il mio ID nel DOM
 * @returns 
 */
export function getElementById(element) {
    return document.getElementById(element)
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

/** Funzione da invocare ogni volta che devo richiamare un Json
 * This function must be invoked every time I try to manipulate the dom
 * @param {string} url This is my JSON Path
 */
export async function getData(url) {
    /* I save my JSON link on my Response */
    const response = await fetch(url);
    let data = '';
    /* Started API Call to my JSON file */
    try {
        data = await response.json();
        // console.log(data); // I look into the console
        return data // i need to return my data
    }
    // Take the error if needed
    catch (error) {
        console.error(error) // I look into the console
    }
    return response; // I need to return my response
}

/** Funzione per inserire dinamicamente i posts (non creati dall'utente) */
export async function feedsDomManipulation() {
    const feedsPage = querySelector('.feeds') // Mio wrapper principale

    // Invoke my function
    let data = await getData('./assets/json/posts.json')
    // console.log(data[0].liked_users[0]); // Da usare nel forEach
    data.forEach(element => {
        let singleFeed =
            `
            <div class="feed">
                <!-- /.head -->
                <div class="head">
                    <!-- /.user -->
                    <div class="user">
                        <!-- /.profile-picture -->
                        <div class="profile-picture">
                            <img src="${element.user_img}">
                        </div>
                        <!-- /.ingo -->
                        <div class="ingo">
                            <h3>${element.username}</h3>
                            <small>${element.user_location}</small>
                        </div>
                    </div>
                    <!-- /.edit -->
                    <span class="edit">
                        <!-- /.uil uil-ellipsis-h -->
                        <i class="uil uil-ellipsis-h"></i>
                    </span>
                </div>
                <!-- /.photo -->
                <div class="photo">
                    <img src="${element.user_feed_img}">
                </div>
                <!-- /.action-button -->
                <div class="action-buttons">
                    <!-- /.interaction-buttons -->
                    <div class="interaction-buttons">
                        <!-- /.uil pointer uil-heart -->
                        <span><i class="uil pointer uil-heart"></i></span>
                        <!-- /.uil pointer uil-comment-dots -->
                        <span><i class="uil pointer uil-comment-dots"></i></span>  
                        <!-- /.uil pointer uil-share-alt -->
                        <span><i class="uil pointer uil-share-alt"></i></span>  
                    </div>
                    <!-- /.bookmark -->
                    <div class="bookmark">
                        <!-- Per farla solid al click : <i class="uis uis-bookmark"></i> -->
                        <!-- /.uil pointer uil-bookmark-full -->
                        <span><i class="uil pointer uil-bookmark-full"></i></span>
                    </div>
                </div>
                <!-- /.liked-by -->
                <div class="liked-by">
                    <!-- Immagine della gente alla quale piace -->
                    <span><img src="${element.liked_users[0]}"></span>
                    <span><img src="${element.liked_users[1]}"></span>
                    <span><img src="${element.liked_users[2]}"></span>
                    <p>Liked by <b>${element.liked_by}</b> and <b>${element.liked_others}</b></p>
                </div>
                <!-- /.caption -->
                <div class="caption">
                    <p>
                        <b>${element.username}</b> Lorem ipsum, dolor sit amet consectetur. 
                        <!-- /.harsh-tag -->
                        <span class="harsh-tag">#adipisicing.</span>
                    </p>
                </div>
                <!-- /.text-muted -->
                <div class="text-muted comments">
                    View all 277 comments
                </div>
            </div>
            `
        return feedsPage.insertAdjacentHTML('beforeend', singleFeed)
    })
}

/** Function per Manipolare la sezione delle stories utente
 * 
 */
export async function storiesDomManipulation() {
    const siteStories = getElementById('siteStories') // Mio wrapper principale
    // Invoke my function
    let data = await getData('./assets/json/stories.json')
    // console.log(data);
    data.forEach(element => {
        let singleStory =
            `
            <!-- /.story -->
            <div class="story">
                <!-- /.profile-picture -->
                <div class="profile-picture">
                    <img src="${element.stories_img}">
                </div>
                <!-- /.name -->
                <p class="name">${element.user_story}</p>
            </div>
            `
        return siteStories.insertAdjacentHTML('beforeend', singleStory)
    })
}

/** Funzione per rimuovere classe attiva */
export const removeCategoriesSelector = () => {
    categoriesZone.forEach(category => {
        category.classList.remove('active')
    })
}






