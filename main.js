// Array of navigation items
const navItems = [
    { id: 1, name: 'Home', url: '/' },
    { id: 2, name: 'About', url: '/about' },
    { id: 3, name: 'Services', url: '/services' },
    { id: 4, name: 'Contact', url: '/contact' }
];

function generateNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) {
        console.error('Navbar element not found');
        return;
    }
    const menu = document.createElement('div');
    menu.setAttribute('id','menu');
    const ul = document.createElement('ul');
    
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        
        a.href = item.url;
        a.textContent = item.name;
        a.setAttribute('data-id', item.id);
        
        li.appendChild(a);
        ul.appendChild(li);
    });
    
    const logo = document.createElement('img');
    logo.src = 'logo.jpg'; // Replace with your logo path
    logo.alt = 'Logo';
    logo.className = 'logo';

    menu.appendChild(ul);
    navbar.appendChild(menu);
    navbar.appendChild(logo);
    // document.body.appendChild(navbar);
}

// Call the function to generate the navbar
generateNavbar();