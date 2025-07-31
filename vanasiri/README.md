# Vanasiri - Plant Ecommerce Website

A modern, responsive ecommerce website for selling plants and garden products. Built with HTML, CSS, and JavaScript.

## 🌱 Features

### Core Ecommerce Features
- **Product Catalog**: Browse plants by category (Indoor, Outdoor, Succulents, Flowering)
- **Shopping Cart**: Add/remove items, update quantities, persistent cart storage
- **Product Filtering**: Filter by category, price range, and size
- **Product Search**: Real-time search functionality
- **Checkout Process**: Complete checkout flow with form validation
- **Responsive Design**: Mobile-friendly interface

### User Experience
- **Modern UI**: Clean, professional design with green theme
- **Smooth Animations**: Hover effects and transitions
- **Form Validation**: Real-time validation for contact forms
- **Notifications**: User-friendly success/error messages
- **Back to Top**: Convenient navigation button

### Technical Features
- **Local Storage**: Cart persistence across sessions
- **Modular JavaScript**: Organized code structure
- **Cross-browser Compatible**: Works on all modern browsers
- **SEO Friendly**: Semantic HTML structure
- **Fast Loading**: Optimized images and code

## 📁 Project Structure

```
vanasiri/
├── index.html          # Homepage
├── shop.html           # Product catalog
├── cart.html           # Shopping cart
├── about.html          # About us page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet
├── script.js           # Core JavaScript functionality
├── shop.js             # Shop page functionality
├── cart.js             # Cart page functionality
├── contact.js          # Contact form functionality
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation
1. Download or clone the project files
2. Open `index.html` in your web browser
3. Start exploring the website!

### Local Development
For development, you can use any local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

## 🛠️ Customization

### Adding Products
Edit the `products` array in `shop.js`:
```javascript
const products = [
    {
        id: 13,
        name: "New Plant",
        price: 1500,
        category: "indoor",
        size: "medium",
        image: "path/to/image.jpg",
        description: "Plant description"
    }
    // Add more products...
];
```

### Changing Colors
Modify the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #4CAF50;
    --secondary-color: #45a049;
    --accent-color: #2c5530;
}
```

### Updating Contact Information
Edit the contact details in the footer sections of each HTML file:
- Phone numbers
- Email addresses
- Physical address
- Business hours

### Adding New Categories
1. Update the category filters in `shop.html`
2. Add category options to the products in `shop.js`
3. Update the category cards in `index.html`

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (320px - 767px)

## 🛒 Shopping Cart Features

- **Add to Cart**: Click "Add to Cart" on any product
- **Cart Persistence**: Cart items saved in browser storage
- **Quantity Management**: Increase/decrease item quantities
- **Remove Items**: Delete items from cart
- **Cart Summary**: Real-time total calculation
- **Checkout**: Complete purchase process

## 🔍 Search and Filter

### Product Search
- Real-time search as you type
- Searches product names and descriptions
- Case-insensitive matching

### Product Filters
- **Category**: Indoor, Outdoor, Succulents, Flowering
- **Price Range**: Under ₹500, ₹500-1000, ₹1000-2000, Above ₹2000
- **Size**: Small, Medium, Large

### Sorting Options
- Price: Low to High
- Price: High to Low
- Name: A to Z
- Most Popular

## 📞 Contact Form

The contact form includes:
- **Form Validation**: Real-time field validation
- **Email Validation**: Proper email format checking
- **Phone Formatting**: Automatic phone number formatting
- **Character Counter**: Message length tracking
- **Success Feedback**: Confirmation messages

## 🎨 Design System

### Color Palette
- **Primary Green**: #4CAF50 (Main brand color)
- **Dark Green**: #2c5530 (Headers and footer)
- **Light Gray**: #f8f9fa (Backgrounds)
- **White**: #ffffff (Cards and content areas)

### Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Heading Sizes**: 2.5rem (h1), 2rem (h2), 1.5rem (h3)
- **Body Text**: 1rem with 1.6 line height

### Components
- **Buttons**: Primary, Secondary, and Outline variants
- **Cards**: Product cards with hover effects
- **Forms**: Styled inputs with validation states
- **Navigation**: Sticky header with cart indicator

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📈 Performance

- **Fast Loading**: Optimized images and minimal dependencies
- **Smooth Interactions**: Hardware-accelerated animations
- **Efficient Code**: Modular JavaScript with event delegation
- **Local Storage**: Fast cart operations

## 🚀 Deployment

### Static Hosting
The website can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Firebase Hosting

### Custom Domain
1. Purchase a domain name
2. Configure DNS settings
3. Update any hardcoded URLs in the code

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For support or questions:
- Email: info@vanasiri.com
- Phone: +91 9880341811
- Address: 123 Garden Street, Indiranagar, Bangalore

## 🔮 Future Enhancements

Potential features for future versions:
- User accounts and login system
- Wishlist functionality
- Product reviews and ratings
- Payment gateway integration
- Order tracking
- Plant care guides
- Newsletter subscription
- Social media integration
- Multi-language support
- Advanced analytics

---

**Vanasiri** - Bringing nature closer to you 🌿 