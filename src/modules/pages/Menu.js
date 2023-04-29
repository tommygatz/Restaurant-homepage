import Data from '../../assets/data/data.xml';

var data = Data;
const menuItems = data.menu.item;
console.log(menuItems);
for (let x=0; x < menuItems.length; x++) {
    console.log(menuItems[x].name);
    console.log(menuItems[x].desc)
};

// const menuItems = [
//     "<h2 class='menu-item-title'>Grilled Salmon with Lemon Butter Sauce</h2><h3 class='menu-item-text'>Freshly grilled salmon served with a tangy lemon butter sauce, and a side of roasted vegetables.</h3>",
//     "<h2 class='menu-item-title'>Classic Cheeseburger</h2><h3 class='menu-item-text'>A juicy beef patty topped with melted cheddar cheese, lettuce, tomato, onion, pickles, and served with crispy french fries.</h3>",
//     "<h2 class='menu-item-title'>Margherita Pizza</h2><h3 class='menu-item-text'>Thin-crust pizza topped with tomato sauce, fresh mozzarella cheese, and basil leaves.</h3>",
//     "<h2 class='menu-item-title'>Chicken Alfredo Pasta</h2><h3 class='menu-item-text'>A creamy pasta dish made with grilled chicken, fettuccine pasta, and tossed in a rich Alfredo sauce.</h3>",
//     "<h2 class='menu-item-title'>Vegan Buddha Bowl</h2><h3 class='menu-item-text'>A healthy and delicious bowl filled with brown rice, roasted sweet potatoes, sautéed kale, chickpeas, and topped with a tahini dressing.</h3>"
// ];

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