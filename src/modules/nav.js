import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';
import loadContact from './contact.js';

const nav = () => {
    console.log("nav loaded");
    
    const body = document.querySelector('body');
    const content = document.getElementById('content');
    
    const nav = document.createElement('nav');
    nav.classList.add('nav');

    function _createNavToggle(){
       
        const navToggle = document.createElement('a');
        navToggle.classList.add('nav__toggle');
        navToggle.innerHTML = `<i class="fas fa-bars" aria-hidden="true"></i>`;
        navToggle.addEventListener('click',()=>{
            const navItems = document.querySelector('.nav__items');
            navItems.classList.toggle('nav__items--active');
        })

        return navToggle;
    }

    function _createNavMisc(nodeText){
        const misc = document.createElement('div');
        misc.classList.add('nav__misc');

        const brand = document.createElement('a');
        brand.classList.add('nav__brand');
        brand.textContent = nodeText;
        brand.addEventListener('click',()=> {
            console.log("brand click");
        })

        const navToggle = _createNavToggle();
        

        misc.append(brand,navToggle);
        return misc;
    }

    function _createTab(nodeText,callback){
        const tab = document.createElement('a');
        tab.classList.add('nav__tab','nav__tab--active');
        tab.textContent = nodeText;
        tab.addEventListener('click',()=>{
            callback();
            console.log(`${nodeText} click`);
        });

        return tab;
    }

    function _createNavItems(){
        const items = document.createElement('div');
        items.classList.add('nav__items');

        const homeTab = _createTab('Home',loadHome);
        const menuTab = _createTab('Menu',loadMenu);
        const aboutTab = _createTab('About',loadAbout);
        const contactTab = _createTab('Contact',loadContact);

        items.append(homeTab);
        items.append(menuTab);
        items.append(aboutTab);
        items.append(contactTab);

        return items;
    }

    

    function _createNav(){
        const navMisc = _createNavMisc('Ashnam');
        const navItems = _createNavItems();
        
        nav.append(navMisc,navItems);
    }

    function loadNav(){
        _createNav();
        body.insertBefore(nav, content);
    }

    return loadNav();
}

export default nav;