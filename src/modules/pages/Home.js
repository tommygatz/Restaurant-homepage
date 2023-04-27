function createHome(){
    const home = document.createElement('div');
    home.classList.add('home');
    home.innerHTML = `<h1>About Us</h1>
    <p>At The Rustic Table, we believe in simple, honest cooking using the freshest ingredients available. 
    Our restaurant was born out of a desire to provide our customers with an exceptional dining experience in a warm and welcoming atmosphere. 
    Our menu features classic dishes with a modern twist, all made from scratch in-house by our talented chefs.</p>
    <p>We are passionate about supporting local farmers and producers, and we source the majority of our ingredients from within the region. 
    Our commitment to sustainability is reflected in everything we do, from our eco-friendly packaging to our composting and recycling practices.</p>
    <p>Whether you're joining us for a quick lunch, a romantic dinner for two, or a special occasion with friends and family, we invite you to sit back, relax, and enjoy the flavors of our carefully crafted dishes. 
    Welcome to The Rustic Table.</p>`;
    return home;
};

function loadHome(){
    const main = document.getElementById('main-content');
    main.textContent = '';
    main.appendChild(createHome());
};

export default loadHome;