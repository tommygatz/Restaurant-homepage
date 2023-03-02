import './styles/styles.css';
import createTab from './modules/createTab';

const nav = document.getElementById('navbar');

const homeBtn = createTab('home', 'Home');
const menuBtn = createTab('menu', 'Menu');
const contactBtn = createTab('contact', 'Contact');

nav.appendChild(homeBtn);
nav.appendChild(menuBtn);
nav.appendChild(contactBtn);