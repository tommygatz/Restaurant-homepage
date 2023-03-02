function createTab(id, text) {
    const tab = document.createElement('button');
    tab.setAttribute('id', id);
    tab.textContent = text;
    tab.classList.add('tab');
    return tab;
}
export default createTab;