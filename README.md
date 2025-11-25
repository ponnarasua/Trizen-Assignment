# 🛒 TrizoCart - Modern E-Commerce Product Landing Page

A complete full-stack e-commerce product landing page built with **MERN Stack** (MongoDB, Express, React, Node.js). Features a beautiful UI with dark mode support, smooth animations, advanced filtering, and a modern shopping experience.

Built with **Vite** for lightning-fast development and **Tailwind CSS** for modern, utility-first styling.

![Product Landing Page](https://img.shields.io/badge/MERN-Stack-green)
![React](https://img.shields.io/badge/React-18.2-blue)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38BDF8)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)

> 🎨 **Features**: Dark Mode • Smooth Scrolling • Advanced Filters • Dynamic Hero Banner • Responsive Design

---

## 🎥 Demo Video

Watch the application in action:

https://github.com/ponnarasua/Trizen-Assignment/assets/Trizen_Ventures%20Assignment.mp4

<details>
<summary>📹 Click to view video demo</summary>

https://github.com/ponnarasua/Trizen-Assignment/assets/Trizen_Ventures%20Assignment.mp4

</details>

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

---

## ✨ Features

### Frontend Features
- ⚡ **Vite** - Lightning-fast build tool and HMR (Hot Module Replacement)
- 🎨 **Tailwind CSS** - Utility-first styling with responsive design
- 🌓 **Dark Mode** - Toggle between light and dark themes with smooth transitions
- 🔍 **Smart Search Bar** with real-time search and URL persistence
- 🎪 **Dynamic Hero Banner** - Featured products carousel with auto-rotation
- 💅 **Modern UI Design** - Clean, professional interface
- 📱 **Fully Responsive** - Desktop, Tablet, and Mobile views
- 🎯 **Product Grid** displaying products with images, prices, and ratings
- ⭐ **Star Ratings** visual display with review counts
- 🔽 **Advanced Filters**:
  - Category filtering
  - Price range slider
  - Star rating filter
  - Mobile-friendly collapsible filters
- 🎭 **Smooth Scrolling** - Enhanced Shop Now buttons with smooth scroll behavior
- ✨ **Smooth Animations** - Hover effects and transitions
- 🖼️ **Product Cards** with discount badges and "out of stock" indicators
- 🛍️ **Add to Cart** functionality

### Backend Features
- 🚀 **RESTful API** with Express.js
- 💾 **MongoDB Database** with Mongoose ODM
- 🔍 **Search API** with case-insensitive, partial matching
- 📊 **Product Filtering** by category, price range, and rating
- 🌱 **Database Seeding** script with sample products
- ⚡ **Fast Response Times** with optimized queries
- 🔒 **CORS Enabled** for cross-origin requests
- 🛡️ **Error Handling** - Comprehensive error handling middleware

---

## 🛠️ Tech Stack

### Frontend
- **React** 18.2 - UI library
- **Vite** 5.0 - Fast build tool and dev server
- **Tailwind CSS** 3.4 - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Router DOM** - Client-side routing and URL management
- **Context API** - State management for theme (dark mode)
- **React Hooks** - useState, useEffect, useRef, useContext

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** 4.18+ - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** 8.0+ - ODM for MongoDB
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variables management

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
│   ├── public/                     # Static assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx          # Navigation header with dark mode toggle
│   │   │   ├── SearchBar.jsx       # Search functionality with URL params
│   │   │   ├── HeroBanner.jsx      # Hero section with product carousel
│   │   │   ├── Filters.jsx         # Advanced product filters
│   │   │   ├── ProductGrid.jsx     # Product display grid
│   │   │   ├── ProductCard.jsx     # Individual product card
│   │   │   └── Footer.jsx          # Page footer
│   │   ├── context/
│   │   │   └── ThemeContext.jsx    # Dark mode theme context
│   │   ├── services/
│   │   │   └── api.js              # Axios API service
│   │   ├── App.jsx                 # Main App component
│   │   ├── App.css                 # Additional styles
│   │   ├── main.jsx                # Vite entry point
│   │   └── index.css               # Tailwind directives & global styles
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

### 1. Dark Mode Theme Toggle
- **Persistent theme** - Saves preference in localStorage
- **Smooth transitions** between light and dark modes
- **Context API** for global theme state management
- **Custom color schemes** optimized for both themes
- **Toggle button** in header for easy switching

### 2. Dynamic Hero Banner with Product Carousel
- **Auto-rotating carousel** - Featured products change every 5 seconds
- **Manual navigation** - Click indicators to switch products
- **Smooth animations** - Fade and scale transitions
- **Fallback view** - Shows when no products are available
- **Product highlights** - Displays rating, price, and discount badges
- **Smooth scroll buttons** - Shop Now and down arrow with smooth scroll

### 3. Smart Search Functionality
- **Real-time search** with URL persistence
- **Search params** - Shareable search URLs
- **Product filtering** - Searches across name, description, and category
- **Case-insensitive** and **partial matching**
- **Loading states** - Visual feedback during search

**Implementation:**
```javascript
// Uses React Router's useSearchParams for URL persistence
const [searchParams, setSearchParams] = useSearchParams();
const searchQuery = searchParams.get('search') || '';

// Update URL when searching
setSearchParams({ search: query });
```

### 4. Advanced Product Filtering

**Filter Options:**
- **Category Filter** - Dropdown with all available categories
- **Price Range Slider** - Interactive slider with min/max values
- **Star Rating Filter** - Filter by minimum rating (1-5 stars)
- **Mobile Responsive** - Collapsible filters on mobile devices
- **Real-time Updates** - Instant product filtering without page reload
- **Clear Filters** - Easy reset to default view

**Filter UI:**
- Shows filter count when active
- Visual feedback for applied filters
- Mobile-friendly toggle button
- Smooth animations

### 5. Smooth Scrolling Experience
- **Enhanced scroll behavior** - All Shop Now and navigation buttons use smooth scrolling
- **Down arrow animation** - Bouncing arrow with smooth scroll to products
- **Native browser smooth scroll** - Uses `scrollIntoView({ behavior: 'smooth' })`
- **Better UX** - No jarring jumps, smooth animated transitions

### 6. Responsive Product Cards

**Features:**
- Product image with loading state
- Discount badge (if applicable)
- Out of stock badge
- Category label with gradient
- Product name (truncated to 2 lines)
- Brand name
- Star rating with review count
- Current price and original price (strikethrough)
- Discount percentage calculation
- Add to Cart button (disabled if out of stock)
- Dark mode optimized colors

**Hover Effects:**
- Card lift animation (`translateY(-5px)`)
- Enhanced shadow
- Image zoom effect
- Smooth transitions

### 7. Database Seeding

Run the seed script to populate MongoDB with sample products:

```bash
cd backend
npm run seed
```

**Sample Products Include:**
- Electronics (iPhone, Samsung, MacBook, Sony Headphones, etc.)
- Fashion (Nike Shoes, Levi's Jeans, Designer Wear, etc.)
- Home & Kitchen (KitchenAid, Instant Pot, Dyson, etc.)
- Books (Best sellers and educational)
- Sports Equipment
- Beauty & Personal Care
- Toys & Games
- Office Supplies

Each product includes:
- Name, description, and brand
- Price and original price (for discount calculation)
- High-quality product images
- Category classification
- Rating (1-5 stars) and review count
- Stock status

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

The project uses custom Tailwind theme colors optimized for both light and dark modes:

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      amazon: {
        dark: '#131921',           // Dark theme background
        orange: '#ff9900',         // Primary accent color
        'orange-hover': '#f3a847', // Hover state
        yellow: '#febd69',         // Highlights
        link: '#007185',           // Links
      },
    },
  },
}
```

### Using Tailwind Classes

All components use Tailwind utility classes for styling:
- **Responsive breakpoints**: `sm:`, `md:`, `lg:`, `xl:`
- **Dark mode**: `dark:bg-gray-900`, `dark:text-white`
- **Hover effects**: `hover:scale-105`, `hover:shadow-xl`
- **Transitions**: `transition-all`, `duration-300`
- **Custom colors**: `bg-amazon-dark`, `text-amazon-orange`
- **Gradients**: `bg-gradient-to-r from-blue-500 to-purple-600`

### Dark Mode Implementation

```css
/* Tailwind automatically handles dark mode with class-based strategy */
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content that adapts to theme
</div>
```

---

## 🧪 Testing the Application

### 1. Test Dark Mode
- Click the theme toggle button in the header
- Verify smooth transition between light and dark modes
- Check that theme preference persists on page reload
- Verify all components are visible in both modes

### 2. Test Hero Banner Carousel
- Watch the automatic rotation (every 5 seconds)
- Click on carousel indicators to manually switch products
- Verify smooth animations and transitions
- Test "Shop Now" button smooth scrolling

### 3. Test Search Functionality
- Type product names in the search bar
- Verify URL updates with search parameters
- Test with different search terms
- Verify search results display correctly

### 4. Test Filters
- Select different categories from dropdown
- Adjust price range slider
- Select different star ratings
- Test mobile filter toggle
- Verify products update in real-time
- Test "Clear Filters" functionality

### 5. Test Smooth Scrolling
- Click all "Shop Now" buttons
- Click the down arrow buttons
- Verify smooth animated scroll to products section

### 6. Test Responsive Design
- Resize browser window
- Test on actual mobile/tablet devices
- Verify collapsible filters on mobile
- Check that all elements are accessible and functional

### 7. Test Product Cards
- Hover over product cards
- Verify hover effects (lift, shadow, image zoom)
- Check discount badges and ratings display correctly
- Test "Add to Cart" button states

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

## 🔮 Future Enhancements

Potential features for future development:
- User authentication and profiles
- Shopping cart with checkout
- Product reviews and ratings submission
- Wishlist functionality
- Order tracking
- Payment gateway integration
- Admin dashboard for product management
- Email notifications
- Product recommendations
- Advanced analytics

---

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)

---

**Happy Coding! 🚀**

---

**TrizoCart** - Your Smart Shopping Destination 🛍️
