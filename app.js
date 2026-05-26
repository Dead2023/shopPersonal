
const products = [
    {
        id: 1,
        name: 'Everyday Knit Sweater',
        category: 'Fashion',
        price: '$49',
        description: 'A soft, breathable sweater you can wear every season.',
    },
    {
        id: 2,
        name: 'Aromatherapy Candle Set',
        category: 'Home',
        price: '$29',
        description: 'Warm vanilla and citrus candles for calm evenings.',
    },
    {
        id: 3,
        name: 'Wireless Sport Earbuds',
        category: 'Tech',
        price: '$79',
        description: 'Lightweight and sweat-resistant earbuds for active days.',
    },
    {
        id: 4,
        name: 'Organic Lip Balm Trio',
        category: 'Beauty',
        price: '$19',
        description: 'Hydrating lip balms with mint, berry, and coconut.',
    },
    {
        id: 5,
        name: 'Minimal Desk Organizer',
        category: 'Home',
        price: '$34',
        description: 'Keep your workspace neat with a clean, modular organizer.',
    },
    {
        id: 6,
        name: 'Everyday Canvas Sneakers',
        category: 'Fashion',
        price: '$59',
        description: 'Comfortable canvas sneakers made for daily wear.',
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
