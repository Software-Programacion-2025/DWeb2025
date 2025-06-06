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
    menu.setAttribute('id', 'menu');
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

function articleItem(srcImage, altImage, description, direction = 'left') {
    if (!srcImage || !altImage || !description) {
        console.error('Missing required article properties');
        return '';
    }

    return direction === 'left' ?
        `<article>
            <img src="${srcImage}" alt="${altImage}" />
            <p>
                ${description}
            </p>
        </article>` :
        `<article>
            <p>
                ${description}
            </p>
            <img src="${srcImage}" alt="${altImage}" />
        </article>`
}

async function generateArticles() {
    try {
        console.log('Intentando cargar articles.json...');
        const response = await fetch('articles.json');
        console.log('Response recibida:', response);
        const data = await response.json();
        console.log('Datos cargados:', data);
        const articles = data.articles;
        
        const articlesContainer = document.getElementById('articles');
        if (!articlesContainer) {
            console.error('Articles container not found');
            return;
        }

        // Limpiar el contenedor antes de agregar los nuevos artículos
        articlesContainer.innerHTML = '';
        
        articles.forEach((article, index) => {
            const direction = index % 2 === 0 ? 'left' : 'right';
            const articleHTML = articleItem(article.srcImage, article.altImage, article.description, direction);
            articlesContainer.innerHTML += articleHTML;
        });
        
        console.log('Articles loaded:', articles.length); // Para debugging
    } catch (error) {
        console.error('Error loading articles:', error);
    }
}

// Funcion que le cambia el título de la página
function setPageTitle(title) {
    document.title = title;
}

// Como ahora generateArticles es asíncrona, necesitamos llamarla así:
document.addEventListener('DOMContentLoaded', () => {
    setPageTitle('Mi Página de Coches');
    generateNavbar();
    generateArticles();
});