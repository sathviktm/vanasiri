// Vanasiri Website Configuration
// Modify these settings to customize your plant ecommerce website

const VANASIRI_CONFIG = {
    // Company Information
    company: {
        name: "Vanasiri",
        tagline: "Premium Plants & Garden Center",
        description: "We are passionate about bringing the beauty of nature into your home.",
        founded: "2020",
        location: "Sagara, India"
    },

    // Contact Information
    contact: {
        phone: "+91 9880341811",
        phoneSecondary: "+91 9480057691",
        email: "sagara@vanasiri.com",
        emailSupport: "Sagara@vanasiri.com",
        address: {
            street: "Talavata",
            city: "Sagara",
            state: "Karnataka",
            pincode: "577421",
            country: "India"
        },
        businessHours: {
            weekdays: "9:00 AM - 8:00 PM",
            sunday: "10:00 AM - 6:00 PM"
        }
    },

    // Social Media Links
    social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
        youtube: "#"
    },

    // Website Settings
    website: {
        currency: "₹",
        currencyCode: "INR",
        taxRate: 0.18, // 18% GST
        shippingCost: 100,
        freeShippingThreshold: 2000,
        maxProductsPerPage: 12
    },

    // Product Categories
    categories: [
        {
            id: "indoor",
            name: "Indoor Plants",
            icon: "fas fa-home",
            description: "Perfect for home and office spaces"
        },
        {
            id: "outdoor",
            name: "Outdoor Plants",
            icon: "fas fa-tree",
            description: "Garden and landscape beautification"
        },
        {
            id: "succulents",
            name: "Succulents",
            icon: "fas fa-seedling",
            description: "Low maintenance, high beauty"
        },
        {
            id: "flowering",
            name: "Flowering Plants",
            icon: "fas fa-leaf",
            description: "Add color and fragrance to your space"
        }
    ],

    // Product Sizes
    sizes: [
        { id: "small", name: "Small" },
        { id: "medium", name: "Medium" },
        { id: "large", name: "Large" }
    ],

    // Price Ranges
    priceRanges: [
        { id: "0-500", name: "Under ₹500", min: 0, max: 500 },
        { id: "500-1000", name: "₹500 - ₹1000", min: 500, max: 1000 },
        { id: "1000-2000", name: "₹1000 - ₹2000", min: 1000, max: 2000 },
        { id: "2000+", name: "Above ₹2000", min: 2000, max: Infinity }
    ],

    // Team Members
    team: [
        {
            name: "Rahul Sharma",
            position: "Founder & CEO",
            description: "Plant enthusiast with 15+ years of experience in horticulture.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
        },
        {
            name: "Priya Patel",
            position: "Head of Operations",
            description: "Expert in plant care and customer experience management.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop"
        },
        {
            name: "Arjun Kumar",
            position: "Plant Specialist",
            description: "Certified horticulturist with deep knowledge of plant varieties.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
        }
    ],

    // Company Values
    values: [
        {
            title: "Quality",
            icon: "fas fa-heart",
            description: "We source only the finest plants from trusted growers and nurseries."
        },
        {
            title: "Trust",
            icon: "fas fa-handshake",
            description: "Building lasting relationships with our customers through honesty and transparency."
        },
        {
            title: "Sustainability",
            icon: "fas fa-leaf",
            description: "Committed to eco-friendly practices and promoting environmental consciousness."
        },
        {
            title: "Community",
            icon: "fas fa-users",
            description: "Supporting local growers and fostering a community of plant lovers."
        }
    ],

    // Design Theme
    theme: {
        colors: {
            primary: "#4CAF50",
            secondary: "#45a049",
            accent: "#2c5530",
            background: "#f8f9fa",
            white: "#ffffff",
            text: "#333333",
            textLight: "#666666",
            error: "#ff4444",
            success: "#4CAF50"
        },
        fonts: {
            primary: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            heading: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        },
        borderRadius: "6px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
    },

    // SEO Settings
    seo: {
        title: "Vanasiri - Premium Plants & Garden Center",
        description: "Discover our premium collection of indoor and outdoor plants. Transform your space with the beauty of nature.",
        keywords: "plants, indoor plants, outdoor plants, succulents, garden center, plant nursery, Bangalore",
        author: "Vanasiri",
        ogImage: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=1200&h=630&fit=crop"
    },

    // Features Configuration
    features: {
        cart: {
            enabled: true,
            persistence: true,
            maxItems: 50
        },
        search: {
            enabled: true,
            realTime: true,
            minLength: 2
        },
        filters: {
            enabled: true,
            categories: true,
            price: true,
            size: true
        },
        notifications: {
            enabled: true,
            duration: 3000
        },
        lazyLoading: {
            enabled: true,
            threshold: 0.1
        }
    },

    // Payment Methods (for future integration)
    payment: {
        methods: [
            { id: "cod", name: "Cash on Delivery", enabled: true },
            { id: "upi", name: "UPI", enabled: false },
            { id: "card", name: "Credit/Debit Card", enabled: false },
            { id: "netbanking", name: "Net Banking", enabled: false }
        ]
    },

    // Shipping Information
    shipping: {
        methods: [
            { id: "standard", name: "Standard Delivery", cost: 100, days: "3-5" },
            { id: "express", name: "Express Delivery", cost: 200, days: "1-2" },
            { id: "free", name: "Free Delivery", cost: 0, days: "3-5", minOrder: 2000 }
        ]
    }
};

// Export configuration for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VANASIRI_CONFIG;
} else {
    window.VANASIRI_CONFIG = VANASIRI_CONFIG;
}

// Helper functions for configuration
const ConfigHelper = {
    // Get company name
    getCompanyName: () => VANASIRI_CONFIG.company.name,
    
    // Get formatted address
    getFullAddress: () => {
        const addr = VANASIRI_CONFIG.contact.address;
        return `${addr.street}, ${addr.city}, ${addr.state} ${addr.pincode}, ${addr.country}`;
    },
    
    // Get formatted phone
    getPhone: () => VANASIRI_CONFIG.contact.phone,
    
    // Get formatted email
    getEmail: () => VANASIRI_CONFIG.contact.email,
    
    // Calculate tax
    calculateTax: (amount) => amount * VANASIRI_CONFIG.website.taxRate,
    
    // Calculate shipping
    calculateShipping: (subtotal) => {
        if (subtotal >= VANASIRI_CONFIG.website.freeShippingThreshold) {
            return 0;
        }
        return VANASIRI_CONFIG.website.shippingCost;
    },
    
    // Format currency
    formatCurrency: (amount) => {
        return `${VANASIRI_CONFIG.website.currency}${amount.toLocaleString()}`;
    },
    
    // Get category by ID
    getCategory: (id) => {
        return VANASIRI_CONFIG.categories.find(cat => cat.id === id);
    },
    
    // Get size by ID
    getSize: (id) => {
        return VANASIRI_CONFIG.sizes.find(size => size.id === id);
    }
};

// Export helper functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports.ConfigHelper = ConfigHelper;
} else {
    window.ConfigHelper = ConfigHelper;
} 