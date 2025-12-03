// State
let state = {
    products: [], // Will be loaded from localStorage or mockData
    searchQuery: "",
    filters: {
        category: "all",
        size: "all", // Added size filter
        minPrice: 0,
        maxPrice: 100000
    },
    sortBy: "price-low", // Changed default sort to price-low
    lastUpdated: null
};

// DOM Elements
const resultsContainer = document.getElementById('resultsContainer');
const searchInput = document.getElementById('searchInput');
const categoryInputs = document.querySelectorAll('input[name="category"]');
const sizeInputs = document.querySelectorAll('input[name="size"]'); // Added size inputs
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const sortSelect = document.getElementById('sortSelect');
const resultCount = document.getElementById('resultCount');
const lastUpdatedDisplay = document.getElementById('lastUpdated');

// Initialization
function init() {
    loadData();
    checkDailyUpdate();
    // Initial sort
    sortProducts();
    renderProducts(state.products);
    setupEventListeners();
    updateTimeDisplay();
}

// Data Persistence & Simulation
function loadData() {
    const storedData = localStorage.getItem('standingDeskData_v3'); // Changed key to force refresh for new size data
    if (storedData) {
        const parsed = JSON.parse(storedData);
        state.products = parsed.products;
        state.lastUpdated = parsed.lastUpdated;
    } else {
        // First visit: Use mock data
        state.products = products.map(p => ({
            ...p,
            previousPrice: p.price, // Initialize previous price
            priceChange: 'none' // 'up', 'down', 'none'
        }));
        state.lastUpdated = new Date().toDateString(); // Store just the date string (e.g., "Tue Dec 03 2025")
        saveData();
    }
}

function saveData() {
    localStorage.setItem('standingDeskData_v3', JSON.stringify({
        products: state.products,
        lastUpdated: state.lastUpdated
    }));
}

function checkDailyUpdate() {
    const today = new Date().toDateString();

    // If stored date is different from today, trigger update
    if (state.lastUpdated !== today) {
        simulatePriceUpdates();
        state.lastUpdated = today;
        saveData();
    }
}

function simulatePriceUpdates() {
    console.log("New day detected! Updating prices...");

    state.products = state.products.map(product => {
        // 50% chance to change price
        if (Math.random() > 0.5) {
            const changePercent = (Math.random() * 0.2) - 0.1; // -10% to +10%
            const newPrice = Math.round(product.price * (1 + changePercent));

            let priceChange = 'none';
            if (newPrice < product.price) priceChange = 'down';
            if (newPrice > product.price) priceChange = 'up';

            return {
                ...product,
                previousPrice: product.price,
                price: newPrice,
                priceChange: priceChange
            };
        }
        return { ...product, priceChange: 'none' };
    });
}

function updateTimeDisplay() {
    const today = new Date();
    const dateStr = today.toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric' });
    lastUpdatedDisplay.textContent = `更新時間：${dateStr} (每日自動更新)`;
}

// Event Listeners
function setupEventListeners() {
    // Search
    searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.toLowerCase();
        filterAndRender();
    });

    // Categories
    categoryInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            state.filters.category = e.target.value;
            filterAndRender();
        });
    });

    // Size Filter
    sizeInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            state.filters.size = e.target.value;
            filterAndRender();
        });
    });

    // Price Range
    minPriceInput.addEventListener('input', (e) => {
        state.filters.minPrice = Number(e.target.value) || 0;
        filterAndRender();
    });

    maxPriceInput.addEventListener('input', (e) => {
        state.filters.maxPrice = Number(e.target.value) || 100000;
        filterAndRender();
    });

    // Sort
    sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        filterAndRender();
    });
}

// Filter and Sort Logic
function filterAndRender() {
    let filtered = state.products.filter(product => {
        // Search Filter
        const matchesSearch = product.name.toLowerCase().includes(state.searchQuery) ||
            product.category.toLowerCase().includes(state.searchQuery);

        // Category Filter
        const matchesCategory = state.filters.category === 'all' ||
            product.category === state.filters.category;

        // Size Filter
        const matchesSize = state.filters.size === 'all' ||
            product.size === state.filters.size;

        // Price Filter
        const matchesPrice = product.price >= state.filters.minPrice &&
            product.price <= state.filters.maxPrice;

        return matchesSearch && matchesCategory && matchesSize && matchesPrice;
    });

    // Sorting
    if (state.sortBy === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    }

    renderProducts(filtered);
}

// Helper function to sort products (used in init)
function sortProducts() {
    if (state.sortBy === 'price-low') {
        state.products.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === 'price-high') {
        state.products.sort((a, b) => b.price - a.price);
    }
}

// Render Products
function renderProducts(productsToRender) {
    const resultsContainer = document.getElementById('resultsContainer');
    const resultCount = document.getElementById('resultCount');

    resultsContainer.innerHTML = '';
    resultCount.textContent = `找到 ${productsToRender.length} 個商品`;

    if (productsToRender.length === 0) {
        resultsContainer.innerHTML = '<div style="text-align:center; padding: 2rem; color: var(--text-secondary);">沒有找到符合條件的商品</div>';
        return;
    }

    // Check if we should render in groups (All categories selected) or single list
    const isAllCategories = state.filters.category === 'all';

    if (isAllCategories) {
        // Group products by category
        const categories = {};
        productsToRender.forEach(product => {
            if (!categories[product.category]) {
                categories[product.category] = [];
            }
            categories[product.category].push(product);
        });

        // Render each category section
        Object.keys(categories).forEach(categoryName => {
            const categoryProducts = categories[categoryName];

            // Create Section
            const section = document.createElement('div');
            section.className = 'category-section';

            // Title
            const title = document.createElement('h2');
            title.className = 'category-section-title';
            title.textContent = categoryName;
            section.appendChild(title);

            // Grid
            const grid = document.createElement('div');
            grid.className = 'product-grid';

            // Render Cards into Grid
            renderCardsToGrid(categoryProducts, grid);

            section.appendChild(grid);
            resultsContainer.appendChild(section);
        });

    } else {
        // Render single grid
        const grid = document.createElement('div');
        grid.className = 'product-grid';
        renderCardsToGrid(productsToRender, grid);
        resultsContainer.appendChild(grid);
    }
}

// Helper to render cards into a specific grid container
function renderCardsToGrid(productsList, gridContainer) {
    const sizeKeywords = {
        'small': '小尺寸',
        'standard': '標準',
        'large': '大尺寸',
        'xl': 'L型'
    };

    productsList.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        // Price Change Logic
        let priceIcon = '';
        let priceClass = '';

        if (product.priceChange === 'down') {
            priceIcon = '<span class="price-change-indicator price-drop">↓</span>';
            priceClass = 'price-drop';
        } else if (product.priceChange === 'up') {
            priceIcon = '<span class="price-change-indicator price-rise">↑</span>';
            priceClass = 'price-rise';
        }

        const formattedPrice = product.price.toLocaleString();
        const sizeKeyword = sizeKeywords[product.size] || '';
        const searchQuery = `${product.category} ${sizeKeyword}`.trim();

        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="rating">
                    <span>★</span> ${product.rating} (${product.reviews})
                </div>
                <div class="product-meta">
                    <div class="product-price ${priceClass}">
                        NT$${formattedPrice} ${priceIcon}
                    </div>
                    <div class="product-platform">${product.platform}</div>
                </div>
                <a href="https://www.google.com/search?tbm=shop&q=${encodeURIComponent(searchQuery)}" target="_blank" class="google-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    Google 查價
                </a>
            </div>
        `;
        gridContainer.appendChild(card);
    });
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
