const footer = () => {
    console.log("footer loaded");
    const body = document.querySelector('body');
    
    const footerEl = document.createElement('footer');
    footerEl.classList.add('footer');
    
    const smallEl =  document.createElement('small');
    smallEl.textContent = '© 2020 Made by CoderOO7';
    footerEl.append(smallEl);
    body.append(footerEl);
};

export default footer;