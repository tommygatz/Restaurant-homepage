import Data from '../../assets/data/data.xml';

var data = Data;
const menuItems = data.menu.item;
console.log(menuItems);
for (let x=0; x < menuItems.length; x++) {
    console.log(menuItems[x].name);
    console.log(menuItems[x].desc)
};

function createMenu(){
    const menu = document.createElement("div");
    menu.classList.add("menu");
    const title = document.createElement("div");
    title.classList.add("menu-title");
    title.innerHTML = "<h1>Menu</h1>";
    menu.appendChild(title)
    for (let i = 0; i < menuItems.length; i++) {
        menu.appendChild(createMenuItem(menuItems[i].name, menuItems[i].desc));
    }
    return menu;
}

function createMenuItem(name, desc){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const menuItemTitle = document.createElement('h2');
    menuItemTitle.classList.add('menu-item-title');
    menuItemTitle.textContent = name;

    const menuItemText = document.createElement('h3');
    menuItemText.classList.add('menu-item-text');
    menuItemText.textContent = desc;

    menuItem.appendChild(menuItemTitle);
    menuItem.appendChild(menuItemText);
    
    return menuItem;
};

function loadMenu(){
    const main = document.getElementById('main-content');
    main.textContent = '';
    main.appendChild(createMenu());
};

export default loadMenu;