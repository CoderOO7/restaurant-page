const footer = () => {
    console.log("footer loaded");
    const content = document.getElementById('content');
    
    const footerEl = document.createElement('footer');
    footerEl.classList.add('footer');
    
    const smallEl =  document.createElement('small');
    smallEl.textContent = '© 2020 Made by CoderOO7';
    footerEl.append(smallEl);
    content.insertAdjacentElement('afterend',footerEl);
};

export default footer;