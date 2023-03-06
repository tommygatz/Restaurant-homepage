import createTab from './createTab';

function createNav(id) {
    const nav = document.createElement('div');

    nav.setAttribute('id', id);
    nav.classList.add('navbar');


    const homeBtn = createTab('home', 'Home');
    const menuBtn = createTab('menu', 'Menu');
    const contactBtn = createTab('contact', 'Contact');

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}


export default createNav;

