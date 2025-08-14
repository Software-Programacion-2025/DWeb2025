// Array of navigation items
const navItems = [
    { id: 1, name: 'Home', url: '/' },
    { id: 2, name: 'About', url: '/about' },
    { id: 3, name: 'Services', url: '/services' },
    { id: 4, name: 'Contact', url: '/contact' },
    { id: 4, name: 'Secondary Page', url: '/secondary.html' }
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

// Función para cargar los estilos dinámicamente
function loadStyles() {
    // Cargar Tailwind
    const tailwindScript = document.createElement('script');
    tailwindScript.src = 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4';
    document.head.appendChild(tailwindScript);

    // Cargar CSS personalizado
    const customStyles = document.createElement('link');
    customStyles.rel = 'stylesheet';
    customStyles.href = './style.css';
    document.head.appendChild(customStyles);
}

// Función para aplicar estilo a pepito solo en index.html
function handlePepitoStyle() {
    // Verifica si estamos en index.html o en la raíz
    const isHomePage = window.location.pathname.endsWith('index.html') || 
                      window.location.pathname.endsWith('/');
    
    if (isHomePage) {
        const pepitoElements = document.getElementsByTagName('pepito');
        Array.from(pepitoElements).forEach(element => {
            element.classList.add('homepage-pepito');
        });
    }
}

// Como ahora generateArticles es asíncrona, necesitamos llamarla así:
document.addEventListener('DOMContentLoaded', () => {
    loadStyles();
    handlePepitoStyle();
    setPageTitle('Mi Página de Coches');
    generateNavbar();
    generateArticles();
});