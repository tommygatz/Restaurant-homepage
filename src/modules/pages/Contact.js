function createContact(){
    const contact = document.createElement('div');
    contact.textContent = 'CONTACT TEST';
    return contact;
};

function loadContact(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
};

export default loadContact;