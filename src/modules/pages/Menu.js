function createMenu(){
    const menu = document.createElement('div');
    menu.textContent = 'MENU TEST';
    return menu;
};

function loadMenu(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
};

export default loadMenu;