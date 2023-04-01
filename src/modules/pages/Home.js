function createHome(){
    const home = document.createElement('div');
    home.textContent = 'HOME TEST';
    return home;
};

function loadHome(){
    const main = document.getElementById('main-content');
    main.textContent = '';
    main.appendChild(createHome());
};

export default loadHome;