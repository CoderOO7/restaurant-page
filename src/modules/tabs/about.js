import {clear} from '../utils.js';

const about = () => {
    const content = document.getElementById('content');
    
    const aboutSection =  document.createElement('section'); 
    aboutSection.classList.add('about');

    const aboutIntro =  document.createElement('div'); 
    aboutIntro.classList.add('about__intro');
    aboutIntro.style.background = `
    linear-gradient(
        rgba(0, 0, 0, 0.45), 
        rgba(0, 0, 0, 0.45)
      ),
    url('static/images/about_intro.jpeg')`;
    
    const h1 = document.createElement('h1');
    h1.textContent = 'ABOUT';


    const pageContent =  document.createElement('div');
    pageContent.classList.add('about__pg');
    pageContent.style.backgroundImage = `url('static/images/tabs_pg_bg.jpeg')`;
    
    const h2 = document.createElement('h2');
    h2.classList.add('about__pg-h2');
    h2.textContent = 'Honest Food & Sweets';

    const p = document.createElement('p');
    p.classList.add('about__pg-content');
    p.textContent = `Ashnam restaurant is well recognized name in India.
                        Ashnam restaurant is very popular among its customers, and we owe this success to our relentless drive to maintain high quality, 
                        and our passion for customer satisfaction. We carefully integrate a range of far-flung flavors from across the globe to keep palates guessing.`

    aboutIntro.append(h1);
    pageContent.append(h2,p);
    aboutSection.append(aboutIntro);
    aboutSection.append(pageContent);
    
    /* Append the About tab conent to DOM */
    const _loadAbout = () => {
        clear(content);        
        content.append(aboutSection);
    }

    return _loadAbout();
}

export default about;