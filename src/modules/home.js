import {clear} from './utils.js';

const home = () => {
    const content = document.getElementById('content');
    
    const section =  document.createElement('section'); 
    section.classList.add('home');
    section.style.backgroundImage = `
    linear-gradient(
        rgba(0, 0, 0, 0.45), 
        rgba(0, 0, 0, 0.45)
      ),
    url('https://images.unsplash.com/photo-1559978137-8c560d91e9e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80')`;

    const h1 = document.createElement('h1');
    h1.textContent = 'Indian food';

    function loadHome(){
        clear(content);        
        section.append(h1);
        content.append(section);
    }

    return loadHome();
}

export default home;