const footer = () => {
    const content = document.getElementById('content');
    
    const footerEl = document.createElement('footer');
    footerEl.classList.add('footer');
    
    const smallEl =  document.createElement('small');
    smallEl.textContent = '© 2020 Made by CoderOO7';

    /* Append footer below content div to DOM */
    const _loadFooter = () => {
        footerEl.append(smallEl);
        content.insertAdjacentElement('afterend',footerEl);
    }
    
    return _loadFooter();
};

export default footer;