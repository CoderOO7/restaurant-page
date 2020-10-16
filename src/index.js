import loadPage from './modules/page-load.js';
import loadHome from './modules/tabs/home.js';
import loadMenu from './modules/tabs/menu.js';
import loadAbout from './modules/tabs/about.js';
import loadContact from './modules/tabs/contact.js';

//Initial Page Load
loadPage();

const tabsContainer = document.querySelector('.nav__items'); 

function highlightTab(currentActiveTab){
    const previousActiveTab = document.querySelector('.nav__tab--active');
    
    if(previousActiveTab){
        previousActiveTab.classList.remove('nav__tab--active');
    }
    if(currentActiveTab){
        currentActiveTab.classList.add('nav__tab--active');
    }
}

function switchTabs(tab){
    console.log(`Clicked ${tab.dataset.tab}`);
    switch(tab.dataset.tab){
        case "Home": loadHome(); break;
        case "Menu": loadMenu(); break;
        case "About": loadAbout(); break;
        case "Contact": loadContact(); break;
    }
}

function handleTabClick(event){
    const tab =  event.target.closest('a');
    if(!tab) return;
    
    switchTabs(tab);
    highlightTab(tab);
}

tabsContainer.addEventListener('click',handleTabClick);