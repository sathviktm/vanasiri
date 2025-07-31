// Product data
const products = [
    {
        id: 1,
        name: "Monstera Deliciosa",
        price: 1200,
        category: "indoor",
        size: "large",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop",
        description: "Large tropical plant with distinctive split leaves"
    },
    {
        id: 2,
        name: "Snake Plant",
        price: 800,
        category: "indoor",
        size: "medium",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=300&h=300&fit=crop",
        description: "Low maintenance plant perfect for beginners"
    },
    {
        id: 3,
        name: "Peace Lily",
        price: 950,
        category: "indoor",
        size: "medium",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=300&h=300&fit=crop",
        description: "Beautiful flowering plant that purifies air"
    },
    {
        id: 4,
        name: "Fiddle Leaf Fig",
        price: 2500,
        category: "indoor",
        size: "large",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop",
        description: "Statement plant with large, glossy leaves"
    },
    {
        id: 5,
        name: "Aloe Vera",
        price: 450,
        category: "succulents",
        size: "small",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=300&h=300&fit=crop",
        description: "Medicinal plant with healing properties"
    },
    {
        id: 6,
        name: "Echeveria",
        price: 350,
        category: "succulents",
        size: "small",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop",
        description: "Beautiful rosette-shaped succulent"
    },
    {
        id: 7,
        name: "Rose Bush",
        price: 1800,
        category: "flowering",
        size: "medium",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=300&h=300&fit=crop",
        description: "Classic flowering plant for gardens"
    },
    {
        id: 8,
        name: "Orchid",
        price: 1200,
        category: "flowering",
        size: "small",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop",
        description: "Elegant flowering plant for indoor display"
    },
    {
        id: 9,
        name: "Bamboo Palm",
        price: 1600,
        category: "outdoor",
        size: "large",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=300&h=300&fit=crop",
        description: "Tropical palm perfect for outdoor spaces"
    },
    {
        id: 10,
        name: "Lavender",
        price: 600,
        category: "outdoor",
        size: "medium",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop",
        description: "Aromatic herb with purple flowers"
    },
    {
        id: 11,
        name: "ZZ Plant",
        price: 1100,
        category: "indoor",
        size: "medium",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=300&h=300&fit=crop",
        description: "Low light tolerant plant with glossy leaves"
    },
    {
        id: 12,
        name: "Pothos",
        price: 750,
        category: "indoor",
        size: "medium",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop",
        description: "Trailing plant perfect for hanging baskets"
    }
];

let filteredProducts = [...products];

// Render products
function renderProducts(productsToRender = filteredProducts) {
    const productsGrid = document.getElementById('products-grid');
    const productCount = document.getElementById('product-count');
    
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    productCount.textContent = productsToRender.length;
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">₹${product.price}</p>
                <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    // Re-attach event listeners for add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const product = products.find(p => p.id == productId);
            const productCard = this.closest('.product-card');
            const image = productCard.querySelector('img').src;
            
            addToCart(productId, product.name, `₹${product.price}`, image);
        });
    });
}

// Apply filters
function applyFilters() {
    const selectedCategories = Array.from(document.querySelectorAll('input[value="indoor"], input[value="outdoor"], input[value="succulents"], input[value="flowering"]:checked'))
        .map(input => input.value);
    
    const selectedSizes = Array.from(document.querySelectorAll('input[value="small"], input[value="medium"], input[value="large"]:checked'))
        .map(input => input.value);
    
    const selectedPriceRange = document.querySelector('input[name="price"]:checked')?.value;
    
    filteredProducts = products.filter(product => {
        // Category filter
        if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
            return false;
        }
        
        // Size filter
        if (selectedSizes.length > 0 && !selectedSizes.includes(product.size)) {
            return false;
        }
        
        // Price filter
        if (selectedPriceRange) {
            const [min, max] = selectedPriceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
            if (product.price < min || (max !== Infinity && product.price > max)) {
                return false;
            }
        }
        
        return true;
    });
    
    renderProducts();
}

// Clear filters
function clearFilters() {
    // Uncheck all checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(input => {
        input.checked = false;
    });
    
    // Uncheck all radio buttons
    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.checked = false;
    });
    
    filteredProducts = [...products];
    renderProducts();
}

// Sort products
function sortProducts(sortBy) {
    const sortedProducts = [...filteredProducts];
    
    switch(sortBy) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'popular':
            // For demo purposes, sort by ID (you can implement actual popularity logic)
            sortedProducts.sort((a, b) => a.id - b.id);
            break;
        default:
            // Default sorting (by ID)
            sortedProducts.sort((a, b) => a.id - b.id);
    }
    
    renderProducts(sortedProducts);
}

// Search products
function searchProducts(query) {
    const searchTerm = query.toLowerCase();
    
    filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    
    renderProducts();
}

// Initialize shop page
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the shop page
    if (document.getElementById('products-grid')) {
        renderProducts();
        
        // Add event listeners for filter checkboxes
        document.querySelectorAll('input[type="checkbox"]').forEach(input => {
            input.addEventListener('change', applyFilters);
        });
        
        // Add event listeners for price radio buttons
        document.querySelectorAll('input[name="price"]').forEach(input => {
            input.addEventListener('change', applyFilters);
        });
        
        // Add event listener for sort select
        const sortSelect = document.getElementById('sort-select');
        if (sortSelect) {
            sortSelect.addEventListener('change', function() {
                sortProducts(this.value);
            });
        }
        
        // Check for category parameter in URL
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        
        if (category) {
            // Pre-select the category filter
            const categoryCheckbox = document.querySelector(`input[value="${category}"]`);
            if (categoryCheckbox) {
                categoryCheckbox.checked = true;
                applyFilters();
            }
        }
    }
});

// Add search functionality
function addSearchBar() {
    const productsHeader = document.querySelector('.products-header');
    if (productsHeader) {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.innerHTML = `
            <input type="text" id="search-input" placeholder="Search plants..." class="search-input">
        `;
        
        productsHeader.appendChild(searchContainer);
        
        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('input', function() {
            searchProducts(this.value);
        });
    }
}

// Initialize search
document.addEventListener('DOMContentLoaded', addSearchBar);

// Add CSS for search
const searchStyle = document.createElement('style');
searchStyle.textContent = `
    .search-container {
        margin-bottom: 1rem;
    }
    
    .search-input {
        width: 100%;
        max-width: 300px;
        padding: 0.75rem;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 1rem;
    }
    
    .search-input:focus {
        outline: none;
        border-color: #4CAF50;
        box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
    }
`;
document.head.appendChild(searchStyle); 