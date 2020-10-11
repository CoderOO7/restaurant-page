import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';
import loadContact from './contact.js';

const nav = () => {
    console.log("nav loaded");
    
    const body = document.querySelector('body');
    const content = document.getElementById('content');
    const nav = document.createElement('nav');

    function _createNavBrand(nodeText){
        const brand = document.createElement('div');
        brand.classList.add('nav__brand');
        brand.addEventListener('click',()=> {
            console.log("brand click");
        })
        
        const brandName = document.createElement('a');
        brandName.classList.add('nav__brand-name');
        brandName.textContent = nodeText;

        brand.append(brandName);
        return brand;
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
        const navTitle = _createNavBrand('Ashnam');
        const navItems = _createNavItems();

        nav.classList.add('nav');

        nav.append(navTitle);
        nav.append(navItems);
    }

    function loadNav(){
        _createNav();
        body.insertBefore(nav, content);
    }

    return loadNav();
}

export default nav;