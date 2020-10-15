import {clear} from '../utils.js'

const contact = () => {
    const content = document.getElementById('content');

    const section = document.createElement('section');
    section.classList.add('contact');
    section.style.backgroundImage = `url('https://images.unsplash.com/photo-1543191878-2baa4ff8a570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`

    const form = document.createElement('form');
    form.classList.add('contact-form');

    const title = document.createElement('span');
    title.classList.add('contact-form__title');
    title.textContent = 'Contact Us';
    
    const nameInput = document.createElement('input');
    nameInput.classList.add('contact-form__input')
    nameInput.setAttribute('type','text');
    nameInput.setAttribute('placeholder','Full Name');
    nameInput.setAttribute('required','required');

    
    const emailInput = document.createElement('input');
    emailInput.classList.add('contact-form__input')
    emailInput.setAttribute('type','email');
    emailInput.setAttribute('placeholder','Email')
    emailInput.setAttribute('required','required');

    
    const msgTextArea = document.createElement('textarea');
    msgTextArea.classList.add('contact-form__textarea');
    msgTextArea.setAttribute('placeholder','Your Message');
    
    const submitBtn = document.createElement('button');
    submitBtn.classList.add('contact-form__submit');
    submitBtn.setAttribute('type','submit');
    submitBtn.textContent = 'Submit';

    section.append(form);
    form.append(title);
    form.append(nameInput);
    form.append(emailInput);
    form.append(msgTextArea);
    form.append(submitBtn);
    
    function loadContact(){
        clear(content);
        content.append(section);
    }

    return loadContact();

}    

export default contact;