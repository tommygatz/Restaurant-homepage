function createContact(){
    const contact = document.createElement('div');
    contact.innerHTML = `<h1 class="contact-title">Contact Us</h1>
    <p>555-555-5555</p>
    <p>contact@TheRusticTable.eat</p>`;
    return contact;
};

function loadContact(){
    const main = document.getElementById('main-content');
    main.textContent = '';
    main.appendChild(createContact());
};

export default loadContact;