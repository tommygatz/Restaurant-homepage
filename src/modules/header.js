import loadHome from './pages/Home';
import loadMenu from './pages/Menu';
import loadContact from './pages/Contact';

function createHeader() {
    const title = "The Rustic Table";

    const header = document.createElement('div');
    header.classList.add('header');

    const headerTitle = document.createElement('div');
    headerTitle.setAttribute('id', 'header-title');
    headerTitle.textContent = title;

    const navbar = createNav('navbar');
    header.appendChild(headerTitle)
    header.appendChild(navbar)

    return header;
};

function createNav(id) {
    const nav = document.createElement('div');

    nav.setAttribute('id', id);
    nav.classList.add('navbar');


    const homeBtn = createTab('home', 'Home');
    homeBtn.classList.add('active');
    homeBtn.addEventListener("click", () => {
        setActive(homeBtn);
        loadHome();
    });

    const menuBtn = createTab('menu', 'Menu');
    menuBtn.addEventListener("click", () => {
        setActive(menuBtn);
        loadMenu();
    });

    const contactBtn = createTab('contact', 'Contact');
    contactBtn.addEventListener("click", () => {
        setActive(contactBtn);
        loadContact();
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
};

function createTab(id, text) {
    const tab = document.createElement('button');
    tab.setAttribute('id', id);
    tab.textContent = text;
    tab.classList.add('tab');
    return tab;
};

function setActive(button) {
    const currentActive = document.querySelector('.tab.active');
    currentActive.classList.remove('active');
    button.classList.add('active');


};

export default createHeader;
