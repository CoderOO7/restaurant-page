import { clear } from './utils.js';

const menu = () => {
    console.log('menu loaded');
    const content = document.getElementById('content');

    const menuSection = document.createElement('section');
    menuSection.classList.add('menu');

    const menuIntro = document.createElement('div');
    menuIntro.classList.add('menu__intro');
    menuIntro.style.background = `
    linear-gradient(
        rgba(0, 0, 0, 0.45), 
        rgba(0, 0, 0, 0.45)
      ),
    url('https://images.unsplash.com/photo-1514573308375-84a13ac77f42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`;

    const h1 = document.createElement('h1');
    h1.textContent = 'MENU';


    const pageContent = document.createElement('div');
    pageContent.classList.add('menu__pg');
    pageContent.style.backgroundImage = `url('https://images.getbento.com/accounts/898ab47b83409ea68f443a6e1d343174/media/images/732831183ricepaper-12.jpeg')`;

    const h2 = document.createElement('h2');
    h2.classList.add('menu__pg-h2');
    h2.textContent = 'Honest Food & Sweets';

    const menuData = [
        {
            title: 'Choose Your Sweets',
            items: [
                { name: 'Chamcham', price: '185/kg' },
                { name: 'Doda Barfi', price: '320/kg' },
                { name: 'kaju Barfi', price: '525/kg' },
                { name: 'Milk Cake', price: '400/kg' },
                { name: 'Gulab Jamun', price: '180/kg' },
                { name: 'Rasgulla', price: '200/kg' },
                { name: 'Rasbhari', price: '190/kg' },
                { name: 'Coconut Burfi', price: '340/kg' },
                { name: 'Moti Choor Laddoo', price: '340/kg' },
                { name: 'Rabdi Rasmalai', price: '40/Pc' },
            ]
        },
        {
            title: 'Choose Your Snacks',
            items: [
                { name: 'Samosa', price: '20/Pc' },
                {name: 'French Fries', price: '50/Pc'},
                { name: 'Chilli Potato', price: '50/Pc'},
                { name: 'Rabri ', price: '40/Pc' },
                { name: 'Dal Kachori', price: '15/Pc' },
                { name: 'Onion Kachori', price: '20/Pc' },
                { name: 'Paneer Pakora', price: '20/Pc' }
            ]
        },
        {
            title: 'Choose Your Beverages',
            items: [
                { name: 'Chocolate Shake', price: '40/Pc' },
                { name: 'Lassi', price: '50/Pc' },
                { name: 'Chaach', price: '35/Pc' },
                { name: 'Soft Drink Can', price: '30/Pc' },
                { name: 'Fresh Lime Soda', price: '40/Pc' },
            ]
        },
        {
            title: 'Choose Your Pizza',
            items: [
                { name: 'Pepperoni', price: '300/Pc' },
                { name: 'Peppy Paneer', price: '120/Pc' },
                { name: 'Delux Veggie', price: '140/Pc' },
                { name: 'Tandoori Paneer', price: '120/Pc' },
                { name: 'Fresh Viggie', price: '110/Pc' },
            ]
        }
    ]

    function createDynamicMenuCard(data) {
        const menuCard = document.createElement('div');
        menuCard.classList.add('menu__card');

        data.forEach((category, index) => {
            const menuBlock = document.createElement('div');
            menuBlock.classList.add('menu__block');

            const menuHeader = document.createElement('div');
            menuHeader.classList.add('menu__header');

            const menuNum = document.createElement('span');
            menuNum.classList.add('menu__num');
            menuNum.textContent = `${index + 1}`;

            const menuTitle = document.createElement('span');
            menuTitle.classList.add('menu__title');
            menuTitle.textContent = `${category.title}`;
            
            menuHeader.append(menuNum,menuTitle);    

            const menuItemList = document.createElement('ul');
            menuItemList.classList.add('menu__item-list');

            category.items.forEach(item => {
                const menuItem = document.createElement('li');
                menuItem.classList.add('menu__item');

                const menuItemName = document.createElement('span');
                menuItemName.classList.add('menu__item-name');
                menuItemName.textContent = `${item.name}`;

                const menuItemPrice = document.createElement('span');
                menuItemPrice.classList.add('menu__item-price');
                menuItemPrice.textContent = `Rs ${item.price}`;

                menuItem.append(menuItemName,menuItemPrice);
                menuItemList.append(menuItem);
            })

            menuHeader.append(menuNum,menuTitle);    
            menuBlock.append(menuHeader,menuItemList);
            menuCard.append(menuBlock);
        })

        return menuCard;
    }

    const menuCard = createDynamicMenuCard(menuData);
    pageContent.append(menuCard);
    menuIntro.append(h1);
    menuSection.append(menuIntro, pageContent);

    function loadMenu() {
        clear(content);
        content.append(menuSection);
    }

    return loadMenu();

}

export default menu;