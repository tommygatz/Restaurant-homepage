import './styles/styles.css';
import './styles/reset.css';
import createHeader from './modules/header';
import createMain from './modules/main';
import createFooter from './modules/footer';
import loadHome from './modules/pages/Home';



function loadContent() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
};



loadContent();
loadHome();