// Render cart items
function renderCart() {
    const cartEmpty = document.getElementById('cart-empty');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartItemsContainer = document.getElementById('cart-items-list');
    
    if (cart.length === 0) {
        if (cartEmpty) cartEmpty.style.display = 'block';
        if (cartItemsList) cartItemsList.style.display = 'none';
        updateCartSummary();
        return;
    }
    
    if (cartEmpty) cartEmpty.style.display = 'none';
    if (cartItemsList) cartItemsList.style.display = 'block';
    
    // Clear existing items
    const existingItems = cartItemsContainer.querySelectorAll('.cart-item:not(#cart-item-template)');
    existingItems.forEach(item => item.remove());
    
    // Render each cart item
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-price">${item.price}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-id="${item.id}">
                <button class="quantity-btn plus" data-id="${item.id}">+</button>
            </div>
            <div class="cart-item-total">
                <span class="item-total">₹${parseInt(item.price.replace('₹', '')) * item.quantity}</span>
            </div>
            <button class="remove-item" data-id="${item.id}">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Add event listeners for quantity buttons
    addCartItemEventListeners();
    
    updateCartSummary();
}

// Add event listeners for cart item interactions
function addCartItemEventListeners() {
    // Quantity minus buttons
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const quantityInput = document.querySelector(`.quantity-input[data-id="${productId}"]`);
            const currentQuantity = parseInt(quantityInput.value);
            if (currentQuantity > 1) {
                quantityInput.value = currentQuantity - 1;
                updateCartItemQuantity(productId, currentQuantity - 1);
            }
        });
    });
    
    // Quantity plus buttons
    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const quantityInput = document.querySelector(`.quantity-input[data-id="${productId}"]`);
            const currentQuantity = parseInt(quantityInput.value);
            quantityInput.value = currentQuantity + 1;
            updateCartItemQuantity(productId, currentQuantity + 1);
        });
    });
    
    // Quantity input changes
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', function() {
            const productId = this.getAttribute('data-id');
            const quantity = parseInt(this.value);
            if (quantity > 0) {
                updateCartItemQuantity(productId, quantity);
            } else {
                this.value = 1;
                updateCartItemQuantity(productId, 1);
            }
        });
    });
    
    // Remove item buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            removeFromCart(productId);
        });
    });
}

// Update cart summary
function updateCartSummary() {
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    const shippingElement = document.getElementById('shipping');
    
    if (!subtotalElement) return;
    
    const subtotal = cart.reduce((total, item) => {
        const price = parseInt(item.price.replace('₹', ''));
        return total + (price * item.quantity);
    }, 0);
    
    const shipping = subtotal > 0 ? 100 : 0;
    const tax = subtotal * 0.18; // 18% GST
    const total = subtotal + shipping + tax;
    
    subtotalElement.textContent = `₹${subtotal}`;
    taxElement.textContent = `₹${Math.round(tax)}`;
    totalElement.textContent = `₹${Math.round(total)}`;
    shippingElement.textContent = `₹${shipping}`;
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    // Create checkout data
    const checkoutData = {
        items: cart,
        subtotal: cart.reduce((total, item) => {
            const price = parseInt(item.price.replace('₹', ''));
            return total + (price * item.quantity);
        }, 0),
        shipping: 100,
        tax: cart.reduce((total, item) => {
            const price = parseInt(item.price.replace('₹', ''));
            return total + (price * item.quantity);
        }, 0) * 0.18,
        total: cart.reduce((total, item) => {
            const price = parseInt(item.price.replace('₹', ''));
            return total + (price * item.quantity);
        }, 0) + 100 + (cart.reduce((total, item) => {
            const price = parseInt(item.price.replace('₹', ''));
            return total + (price * item.quantity);
        }, 0) * 0.18)
    };
    
    // Store checkout data in localStorage
    localStorage.setItem('checkoutData', JSON.stringify(checkoutData));
    
    // Redirect to checkout page (you can create a checkout.html page)
    showNotification('Redirecting to checkout...');
    
    // For demo purposes, show a checkout modal
    showCheckoutModal(checkoutData);
}

// Show checkout modal
function showCheckoutModal(checkoutData) {
    const modal = document.createElement('div');
    modal.className = 'checkout-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    modal.innerHTML = `
        <div class="checkout-content" style="
            background-color: white;
            padding: 2rem;
            border-radius: 10px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
        ">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <h2>Checkout</h2>
                <button onclick="this.closest('.checkout-modal').remove()" style="
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #666;
                ">&times;</button>
            </div>
            
            <form id="checkout-form">
                <div style="margin-bottom: 1.5rem;">
                    <h3>Shipping Information</h3>
                    <div style="display: grid; gap: 1rem; margin-top: 1rem;">
                        <input type="text" placeholder="Full Name" required style="padding: 0.75rem; border: 1px solid #ddd; border-radius: 5px;">
                        <input type="email" placeholder="Email" required style="padding: 0.75rem; border: 1px solid #ddd; border-radius: 5px;">
                        <input type="tel" placeholder="Phone" required style="padding: 0.75rem; border: 1px solid #ddd; border-radius: 5px;">
                        <textarea placeholder="Shipping Address" rows="3" required style="padding: 0.75rem; border: 1px solid #ddd; border-radius: 5px; resize: vertical;"></textarea>
                    </div>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h3>Payment Information</h3>
                    <div style="display: grid; gap: 1rem; margin-top: 1rem;">
                        <input type="text" placeholder="Card Number" required style="padding: 0.75rem; border: 1px solid #ddd; border-radius: 5px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <input type="text" placeholder="MM/YY" required style="padding: 0.75rem; border: 1px solid #ddd; border-radius: 5px;">
                            <input type="text" placeholder="CVV" required style="padding: 0.75rem; border: 1px solid #ddd; border-radius: 5px;">
                        </div>
                    </div>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h3>Order Summary</h3>
                    <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 5px; margin-top: 1rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span>Subtotal:</span>
                            <span>₹${checkoutData.subtotal}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span>Shipping:</span>
                            <span>₹${checkoutData.shipping}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span>Tax:</span>
                            <span>₹${Math.round(checkoutData.tax)}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-weight: bold; border-top: 1px solid #ddd; padding-top: 0.5rem;">
                            <span>Total:</span>
                            <span>₹${Math.round(checkoutData.total)}</span>
                        </div>
                    </div>
                </div>
                
                <button type="submit" style="
                    width: 100%;
                    padding: 1rem;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    font-size: 1.1rem;
                    font-weight: bold;
                    cursor: pointer;
                ">Place Order</button>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Handle form submission
    document.getElementById('checkout-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate order processing
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification('Order placed successfully!');
            clearCart();
            modal.remove();
        }, 2000);
    });
}

// Initialize cart page
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the cart page
    if (document.getElementById('cart-items-list')) {
        renderCart();
    }
});

// Add CSS for checkout modal
const checkoutStyle = document.createElement('style');
checkoutStyle.textContent = `
    .checkout-modal {
        animation: fadeIn 0.3s ease;
    }
    
    .checkout-content {
        animation: slideUp 0.3s ease;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideUp {
        from { transform: translateY(50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`;
document.head.appendChild(checkoutStyle); 