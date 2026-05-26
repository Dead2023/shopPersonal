//add products here when applied
const products = [
    {
        id: 1,
        name: 'Defult',
        category: 'Defult',
        price: '$N/A',
        description: 'Email aaravk0711@gmail.com',
    },
];

const formElement = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const productsGrid = document.querySelector('.products-grid');

document.addEventListener('DOMContentLoaded', initializeApp);
formElement.addEventListener('submit', handleFormSubmit);

function initializeApp() {
    updateUI(products);
}

function handleFormSubmit(event) {
    event.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
    const filteredProducts = products.filter((product) => {
        return (
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );
    });

    if (!query) {
        updateUI(products);
        return;
    }

    if (filteredProducts.length === 0) {
        showError('No products matched your search. Try a different keyword.');
        return;
    }

    updateUI(filteredProducts);
}

function updateUI(data) {
    productsGrid.innerHTML = data
        .map(
            (product) => `
            <article class="product-card">
                <span class="product-badge">${product.category}</span>
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <div class="product-price">${product.price}</div>
            </article>
        `
        )
        .join('');
}

function showError(message) {
    productsGrid.innerHTML = `<p class="error">${message}</p>`;
}
