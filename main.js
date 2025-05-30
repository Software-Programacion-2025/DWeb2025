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

// Call the function to generate the navbar
generateNavbar();


function articleItem(srcImage, altImage, description, direction = 'left') {
    if (!srcImage || !altImage || !description) {
        console.error('Missing required article properties');
        return '';
    }

    return `<article>
                <img src="${srcImage}" alt="${altImage}" />
                <p>
                    ${description}
                </p>
            </article>
        `
}

function generateArticles() {
    const articles = [
        {
            srcImage: 'bugatti.webp',
            altImage: 'Bugatti Chiron',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae porro soluta delectus error ' +
                'placeat ' +
                'blanditiis, eaque consectetur libero corrupti reprehenderit totam consequatur quod facilis fugiat ' +
                'distinctio eligendi ut laborum maxime dolores, nemo velit modi nostrum. Est iste architecto ' +
                'exercitationem. Sint accusamus maxime ratione et, reiciendis quas vero nulla labore porro beatae ' +
                'architecto ipsa, cum placeat? Maiores at iste praesentium. Voluptates inventore nostrum ' +
                'exercitationem, ' +
                'possimus doloribus ratione fuga sapiente dolores illum similique recusandae eius. Aliquam quis ' +
                'tempora ' +
                'laudantium ex quae voluptate sunt tenetur culpa non, numquam corrupti adipisci, recusandae soluta enim, ' +
                'distinctio possimus porro quam? Iste quisquam autem, esse possimus repellat, ducimus officia aliquis '
        },
        {
            srcImage: 'descarga.jpeg',
            altImage: 'Mustang',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae porro soluta delectus error ' +
                'placeat ' +
                'blanditiis, eaque consectetur libero corrupti reprehenderit totam consequatur quod facilis fugiat ' +
                'distinctio eligendi ut laborum maxime dolores, nemo velit modi nostrum. Est iste architecto ' +
                'exercitationem. Sint accusamus maxime ratione et, reiciendis quas vero nulla labore porro beatae ' +
                'architecto ipsa, cum placeat? Maiores at iste praesentium. Voluptates inventore nostrum ' +
                'exercitationem, ' +
                'possimus doloribus ratione fuga sapiente dolores illum similique recusandae eius. Aliquam quis ' +
                'tempora ' +
                'laudantium ex quae voluptate sunt tenetur culpa non, numquam corrupti adipisci, recusandae soluta enim, ' +
                'distinctio possimus porro quam? Iste quisquam autem, esse possimus repellat, ducimus officia aliquis '
        }
    ];
    const articlesContainer = document.getElementById('articles');
    if (!articlesContainer) {
        console.error('Articles container not found');
        return;
    }

    articles.forEach(article => {
        const articleHTML = articleItem(article.srcImage, article.altImage, article.description);
        articlesContainer.innerHTML += articleHTML;
    });
}

generateArticles();