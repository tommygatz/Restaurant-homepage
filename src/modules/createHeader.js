import createNav from "./createNav";


function createHeader(className, title) {
    const header = document.createElement('div');

    header.classList.add(className);

    const headerTitle = document.createElement('div');
    headerTitle.setAttribute('id', 'name');
    headerTitle.textContent = title;
    headerTitle.classList.add('header-title');


    const navbar = createNav('navbar');

    header.appendChild(headerTitle)
    header.appendChild(navbar)

    return header;
}

export default createHeader;