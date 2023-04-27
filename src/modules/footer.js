function createFooter(){
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = `<p>Page created by</p><a class="ghlink" href="https://github.com/tommygatz" title="Github Link">Tommygatz</a>
    `;
    return footer;
};

export default createFooter;