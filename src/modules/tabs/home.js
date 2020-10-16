import {clear} from '../utils.js';

const home = () => {
    const content = document.getElementById('content');
    
    const section =  document.createElement('section'); 
    section.classList.add('home');
    section.style.backgroundImage = `
    linear-gradient(
        rgba(0, 0, 0, 0.45), 
        rgba(0, 0, 0, 0.45)
      ),
    url('static/images/home_intro_bg.jpeg')`;

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