"use-strict";

import loadPage from './modules/page-load.js';
import loadHome from './modules/tabs/home.js';
import loadMenu from './modules/tabs/menu.js';
import loadAbout from './modules/tabs/about.js';
import loadContact from './modules/tabs/contact.js';
(() => {
    //Initial Page Load, append the navbar and footer to DOM
    loadPage();

    const tabsContainer = document.querySelector('.nav__items');

    /**
     * Highlight the activeTab
     * @param {Object} currentActiveTab - The DOM element. 
     */
    function highlightTab(currentActiveTab) {
        const previousActiveTab = document.querySelector('.nav__tab--active');

        if (previousActiveTab) {
            previousActiveTab.classList.remove('nav__tab--active');
        }
        if (currentActiveTab) {
            currentActiveTab.classList.add('nav__tab--active');
        }
    }

    /**
     * It dynamically load the tab contents on DOM
     * @param {Object} tab - The DOM element
     */
    function switchTabs(tab) {
        console.log(`Clicked ${tab.dataset.tab}`);
        switch (tab.dataset.tab) {
            case "Home": loadHome(); break;
            case "Menu": loadMenu(); break;
            case "About": loadAbout(); break;
            case "Contact": loadContact(); break;
        }
    }

    /**
     * Event handler for 'click' event caused by mouse click.
     * @param {Object} event - The MouseClickEvent triggering this function.
     */
    function handleTabClick(event) {
        const tab = event.target.closest('a');
        if (!tab) return;

        switchTabs(tab);
        highlightTab(tab);
    }

    // Add click event listener tabsContainer only, using event-delegation
    tabsContainer.addEventListener('click', handleTabClick);
})();// Invoke IIFE to prevent global context of variable and functions to console