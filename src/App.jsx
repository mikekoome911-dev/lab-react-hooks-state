import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // 1. State for dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  // 2. State for cart management
  const [cart, setCart] = useState([]);

  // 3. State for category filtering
  const [category, setCategory] = useState('all');

  // Handle adding items to the cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Handle removing or reducing items inside the cart
  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className={`min-h-screen p-6 transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      <div className="max-w-4xl mx-auto space-y-6">
        
        <div className="flex items-center justify-between border-b pb-4 dark:border-slate-800">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">🛒 Shopping App</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Welcome! Your task is to implement filtering, cart management, and dark mode.
            </p>
          </div>
          {/* Rendered DarkModeToggle with active status updating handlers */}
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs">
          {/* Category filter dropdown managed with an onChange listener */}
          <div className="flex items-center gap-2">
            <label htmlFor="category-select" className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              Filter by Category:{' '}
            </label>
            <select
              id="category-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-1.5 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20"
            >
              <option value="all">All</option>
              <option value="Fruits">Fruits</option>
              <option value="Dairy">Dairy</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Products Catalog Display Area */}
          <div className="md:col-span-2">
            <ProductList selectedCategory={category} onAddToCart={handleAddToCart} darkMode={darkMode} />
          </div>

          {/* Rendered Cart component tracking updates */}
          <div className="md:col-span-1">
            <Cart cartItems={cart} onRemove={handleRemoveFromCart} darkMode={darkMode} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
