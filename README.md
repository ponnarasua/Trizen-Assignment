# 🛒 Product Landing Page - MERN Stack

A complete full-stack e-commerce product landing page built with **MERN Stack** (MongoDB, Express, React, Node.js). Features include a responsive product grid, advanced search with autosuggest, category and price filters, and a modern Amazon/Flipkart-inspired UI design.

Built with **Vite** for lightning-fast development and **Tailwind CSS** for modern, utility-first styling.

![Product Landing Page](https://img.shields.io/badge/MERN-Stack-green)
![React](https://img.shields.io/badge/React-18.2-blue)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38BDF8)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)

> 📖 **Note**: This project has been migrated to Vite + Tailwind CSS for better performance. See [MIGRATION.md](./MIGRATION.md) for details.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)
- [Key Functionalities](#key-functionalities)
- [Responsive Design](#responsive-design)

## 📚 Additional Documentation

- **[QUICKSTART.md](./QUICKSTART.md)** - Quick start guide for running the app
- **[MIGRATION.md](./MIGRATION.md)** - Details about Vite + Tailwind migration
- **[TAILWIND-REFERENCE.md](./TAILWIND-REFERENCE.md)** - Tailwind CSS class reference

---

## ✨ Features

### Frontend Features
- ⚡ **Vite** - Lightning-fast build tool and HMR (Hot Module Replacement)
- 🎨 **Tailwind CSS** - Utility-first styling with responsive design
- 🔍 **Smart Search Bar** with real-time autosuggest (max 5 suggestions)
- 💅 **Modern UI Design** inspired by Amazon/Flipkart
- 📱 **Fully Responsive** - Desktop, Tablet, and Mobile views
- 🎯 **Product Grid** displaying 20 products with images, prices, and ratings
- ⭐ **Star Ratings** visual display
- 🎪 **Hero Banner** with animated gradient background
- 🔽 **Category Filter** dropdown
- 💰 **Price Range Filters** (multiple options)
- ✨ **Smooth Hover Effects** on product cards
- 🖼️ **Product Cards** with discount badges
- 🛍️ **Add to Cart** functionality

### Backend Features
- 🚀 **RESTful API** with Express.js
- 💾 **MongoDB Database** with Mongoose ODM
- 🔍 **Search API** with case-insensitive, partial matching
- 📊 **Product Filtering** by category and price range
- 🌱 **Database Seeding** script with 20 sample products
- ⚡ **Fast Response Times** with optimized queries
- 🔒 **CORS Enabled** for cross-origin requests

---

## 🛠️ Tech Stack

### Frontend
- **React** 18.2 - UI library
- **Vite** 5.0 - Fast build tool and dev server
- **Tailwind CSS** 3.4 - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Hooks** - useState, useEffect, useRef

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variables

---

## 📁 Project Structure

```
Trizen-Assignment/
│
├── backend/                    # Backend Node.js + Express API
│   ├── controllers/
│   │   └── productController.js    # Product API logic
│   ├── models/
│   │   └── Product.js              # Product schema
│   ├── routes/
│   │   └── productRoutes.js        # API routes
│   ├── .env                        # Environment variables
│   ├── .gitignore
│   ├── package.json
│   ├── seedData.js                 # Database seeding script
│   └── server.js                   # Express server setup
│
├── frontend/                   # Frontend React + Vite + Tailwind
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header/
│   │   │   │   └── Header.jsx
│   │   │   ├── SearchBar/
│   │   │   │   └── SearchBar.jsx
│   │   │   ├── HeroBanner/
│   │   │   │   └── HeroBanner.jsx
│   │   │   ├── Filters/
│   │   │   │   └── Filters.jsx
│   │   │   ├── ProductGrid/
│   │   │   │   └── ProductGrid.jsx
│   │   │   └── ProductCard/
│   │   │       └── ProductCard.jsx
│   │   ├── services/
│   │   │   └── api.js              # Axios API service
│   │   ├── App.jsx                 # Main App component
│   │   ├── main.jsx                # Vite entry point
│   │   └── index.css               # Tailwind directives
│   ├── index.html                  # HTML template
│   ├── vite.config.js              # Vite configuration
│   ├── tailwind.config.js          # Tailwind configuration
│   ├── postcss.config.js           # PostCSS configuration
│   ├── .gitignore
│   └── package.json
│
└── README.md                   # Project documentation
```

---

## 📦 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v6 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** - Package manager
- **Git** - Version control

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ponnarasua/Trizen-Assignment.git
cd Trizen-Assignment
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file (already created, verify the content)
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/product-landing

# Make sure MongoDB is running on your system
# Start MongoDB (if not running)
# Windows: net start MongoDB
# Mac/Linux: sudo systemctl start mongod

# Seed the database with sample products
npm run seed

# Start the backend server
npm run dev
# Server will run on http://localhost:5000
```

### 3. Frontend Setup

Open a **new terminal** and run:

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Start the Vite development server
npm run dev
# Application will open at http://localhost:3000
```

---

## 🎮 Running the Application

### Start Backend Server

```bash
cd backend
npm run dev
```

✅ Backend API will be available at: **http://localhost:5000**

### Start Frontend Application

```bash
cd frontend
npm run dev
```

✅ Vite app will be available at: **http://localhost:3000**

### Access the Application

Open your browser and navigate to: **http://localhost:3000**

---

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### 1. Get All Products
```http
GET /api/products
```

**Query Parameters:**
- `category` (optional) - Filter by category
- `minPrice` (optional) - Minimum price filter
- `maxPrice` (optional) - Maximum price filter

**Response:**
```json
{
  "success": true,
  "count": 20,
  "data": [
    {
      "_id": "...",
      "name": "Apple iPhone 15 Pro",
      "description": "...",
      "price": 999,
      "originalPrice": 1099,
      "image": "...",
      "category": "Electronics",
      "rating": 4.8,
      "reviews": 1245,
      "brand": "Apple",
      "inStock": true
    }
  ]
}
```

#### 2. Search Products (Autosuggest)
```http
GET /api/search?q=iphone
```

**Query Parameters:**
- `q` (required) - Search query string

**Features:**
- Case-insensitive search
- Partial matching
- Returns maximum 5 results
- Searches in: name, description, category, brand

**Response:**
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "_id": "...",
      "name": "Apple iPhone 15 Pro",
      "price": 999,
      "image": "...",
      "rating": 4.8,
      "category": "Electronics"
    }
  ]
}
```

#### 3. Get Product by ID
```http
GET /api/products/:id
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "name": "Apple iPhone 15 Pro",
    ...
  }
}
```

---

## 📸 Screenshots

### Desktop View
- **Header with Search Bar**: Sticky header with logo, search bar with autosuggest, and cart icon
- **Hero Banner**: Animated gradient banner with call-to-action
- **Product Grid**: 4-column responsive grid with product cards
- **Filters Sidebar**: Category dropdown and price range options

### Tablet View (768px - 968px)
- **2-3 Column Grid**: Products arranged in 2-3 columns
- **Horizontal Filters**: Filters displayed horizontally below hero section
- **Responsive Header**: Search bar moves to full width

### Mobile View (< 576px)
- **Single/Double Column**: Products in 1-2 columns
- **Stacked Layout**: All elements stack vertically
- **Compact Header**: Minimized icons and text
- **Touch-Friendly**: Larger touch targets for mobile interaction

---

## 🎯 Key Functionalities

### 1. Smart Search with Autosuggest
- **Real-time search** as you type
- **Debounced API calls** (300ms delay) to reduce server load
- **Dropdown with max 5 suggestions**
- **Click to fill** search bar with selected product
- **Product thumbnails** in suggestions
- **Case-insensitive** and **partial matching**

**Implementation:**
```javascript
// SearchBar.js - Autosuggest logic
const handleSearchChange = (e) => {
  const value = e.target.value;
  setSearchQuery(value);
  
  // Debounce API call
  debounceTimeout.current = setTimeout(async () => {
    const results = await searchProducts(value);
    setSuggestions(results); // Max 5 results
    setShowSuggestions(results.length > 0);
  }, 300);
};
```

### 2. Product Filtering

**Category Filter:**
- Dropdown with all available categories
- Filter products by selected category
- "All Categories" option to show all products

**Price Range Filter:**
- Radio buttons for different price ranges
- Under $50, $50-$100, $100-$500, etc.
- Real-time filtering without page reload

### 3. Responsive Product Cards

**Features:**
- Product image with loading state
- Discount badge (if applicable)
- Out of stock badge
- Category label
- Product name (truncated to 2 lines)
- Brand name
- Star rating with review count
- Current price and original price (strikethrough)
- Add to Cart button (disabled if out of stock)

**Hover Effects:**
- Card lift animation (`translateY(-5px)`)
- Enhanced shadow
- Image zoom effect

### 4. Database Seeding

Run the seed script to populate MongoDB with 20 sample products:

```bash
cd backend
npm run seed
```

**Sample Products Include:**
- Electronics (iPhone, Samsung, MacBook, Sony Headphones, etc.)
- Fashion (Nike Shoes, Levi's Jeans, etc.)
- Home & Kitchen (KitchenAid, Instant Pot, Dyson)
- Books (Atomic Habits, Psychology of Money)
- Sports Equipment
- Beauty Products
- Toys

---

## 📱 Responsive Design

### Breakpoints

- **Desktop**: 1200px and above
- **Laptop**: 968px - 1199px
- **Tablet**: 577px - 967px
- **Mobile**: 576px and below

### Responsive Features

✅ **Flexible Grid Layout** - Auto-adjusts column count  
✅ **Fluid Typography** - Font sizes scale with screen size  
✅ **Touch-Friendly Buttons** - Larger tap targets on mobile  
✅ **Optimized Images** - Responsive image sizing  
✅ **Sticky Header** - Always accessible navigation  
✅ **Mobile-First CSS** - Progressive enhancement approach  

---

## 🔧 Environment Variables

### Backend `.env` file

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/product-landing
NODE_ENV=development
```

### Frontend (Optional)

Create `.env` file in frontend directory:

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🎨 Tailwind CSS Customization

The project uses custom Tailwind theme colors inspired by Amazon:

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      amazon: {
        dark: '#131921',      // Header background
        orange: '#ff9900',    // Primary buttons
        'orange-hover': '#f3a847',
        yellow: '#febd69',    // Search button
        link: '#007185',      // Links and highlights
      },
    },
  },
}
```

### Using Tailwind Classes

All components use Tailwind utility classes for styling:
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Hover effects: `hover:scale-105`, `hover:shadow-xl`
- Transitions: `transition-all`, `duration-300`
- Custom colors: `bg-amazon-dark`, `text-amazon-orange`

---

## 🧪 Testing the Application

### 1. Test Search Functionality
- Type "iphone" in search bar
- Verify autosuggest dropdown shows max 5 results
- Click a suggestion and verify it fills the search bar

### 2. Test Filters
- Select different categories from dropdown
- Select different price ranges
- Verify products update in real-time

### 3. Test Responsive Design
- Resize browser window
- Test on actual mobile/tablet devices
- Verify all elements are accessible and functional

### 4. Test Product Cards
- Hover over product cards
- Verify hover effects (lift, shadow, image zoom)
- Check discount badges and ratings display correctly

---

## 🚀 Production Build

### Backend Production

```bash
cd backend
npm start
```

### Frontend Production

```bash
cd frontend
npm run build
# Creates optimized production build in 'dist' folder
```

To preview the production build:

```bash
npm run preview
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is created for educational purposes as part of a MERN Stack assignment.

---

## 👨‍💻 Author

**Ponnarasu A**

- GitHub: [@ponnarasua](https://github.com/ponnarasua)
- Repository: [Trizen-Assignment](https://github.com/ponnarasua/Trizen-Assignment)

---

## 🙏 Acknowledgments

- Design inspired by Amazon and Flipkart
- Images from Unsplash
- Icons: Emoji icons for simplicity
- MongoDB, Express, React, Node.js communities

---

## 📞 Support

For any questions or issues, please open an issue on GitHub or contact the repository owner.

---

**Happy Coding! 🚀**
