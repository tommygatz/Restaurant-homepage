import './styles/styles.css';
import createHeader from './modules/createHeader';

const page = document.getElementById('page');
const header = createHeader('header', 'Totally Real Restaurant 2');
page.appendChild(header);