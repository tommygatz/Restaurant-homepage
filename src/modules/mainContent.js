function createMain(){
    const main = document.createElement('div');
    main.setAttribute('id', 'main-content');
    main.textContent = '';

    return main;
};

export default createMain;