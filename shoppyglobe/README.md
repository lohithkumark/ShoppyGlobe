Github link -> "https://github.com/lohithkumark/ShoppyGlobe";


# 🛒 ShoppyGlobe – E-Commerce Web App

ShoppyGlobe is a modern e-commerce web application built using **React, Redux Toolkit, and Vite**.  
It allows users to browse products, add items to cart, place orders, and switch currencies.

---

## 🚀 Features

- ✅ Product Listing (API Based)
- ✅ Product Search
- ✅ Category Filter
- ✅ Price Range Filter
- ✅ Sorting (Low → High / High → Low)
- ✅ Add to Cart / Remove from Cart
- ✅ Quantity Control
- ✅ Checkout System
- ✅ Order History
- ✅ Wishlist
- ✅ Dark / Light Mode
- ✅ Currency Converter (USD / INR / EUR)
- ✅ Responsive Design
- ✅ Toast Notifications
- ✅ LocalStorage Persistence

---

## 🛠️ Tech Stack

| Technology     | Usage            |
|------------    |--------          |
| React.js       | Frontend UI      |
| Redux Toolkit  | State Management |
| React Router   | Routing          |
| Vite           | Build Tool       |
| Framer Motion  | Animations       |
| React Hot Toast| Notifications    |  
| DummyJSON API  | Product Data     |

---

## 📁 Project Folder Structure

```
shoppyglobe/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── Components/
│   │   ├── CartItem.jsx
│   │   ├── FilterBar.jsx
│   │   ├── Header.jsx
│   │   ├── ProductItem.jsx
│   │   └── ScrollTop.jsx
│   │
│   ├── hooks/
│   │   └── useFetchProducts.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Orders.jsx
│   │   ├── ProductDetail.jsx
│   │   └── NotFound.jsx
│   │
│   ├── redux/
│   │   ├── cartSlice.js
│   │   ├── currencySlice.js
│   │   ├── filterSlice.js
│   │   ├── searchSlice.js
│   │   ├── storeSlice.js
│   │   ├── themeSlice.js
│   │   └── wishlistSlice.js
│   │
│   ├── router/
│   │   └── index.jsx
│   │
│   ├── utils/
│   │   └── formatPrice.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd shoppyglobe
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Start Development Server

```bash
npm run dev
```

Open browser at:

```
http://localhost:5173
```

---

## 🌐 API Used

DummyJSON Products API:

```
https://dummyjson.com/products
```

---

## 💾 Local Storage Usage

The app stores data in browser storage:

- 🛒 Cart
- ❤️ Wishlist
- 📦 Orders
- 🌗 Theme
- 💱 Currency

So data is preserved after refresh.

---

## 💱 Currency Support

Supported Currencies:

- USD ($)
- INR (₹)
- EUR (€)

Prices are dynamically converted using predefined rates.

---

## 🎨 UI Features

- Clean Card Layout
- Hover Animations
- Dark Mode
- Responsive Grid
- Smooth Transitions
- Modern Navbar

---

## 📦 Redux State Management

Slices Used:

- cartSlice
- filterSlice
- searchSlice
- themeSlice
- wishlistSlice
- currencySlice

All app state is centralized using Redux Toolkit.

---

## 🧪 Error Handling

- API Errors handled
- Loading State
- Empty Cart Handling
- No Products Found
- Currency Validation

---

## 👨‍💻 Author

Developed by:

**Lohith Kumar K**

Software Developer (React)

---

## 📜 License

This project is created for educational purposes.  
Free to use and modify.

---

## ⭐ Future Improvements

- Payment Gateway
- User Authentication
- Backend Integration
- Admin Dashboard
- Reviews & Ratings
- Order Tracking

---

## 📞 Support

If you face any issues, feel free to contact.
E-mail : lohitkumar2003@gmail.com

Happy Coding 🚀
