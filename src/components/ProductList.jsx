import React from 'react'
import ProductCard from './ProductCard'

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ selectedCategory, onAddToCart }) => {
  const filteredProducts = selectedCategory === 'all'
    ? sampleProducts
    : sampleProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-slate-700 dark:text-slate-300">Available Products</h2>

      {filteredProducts.length === 0 ? (
        // Changed text here to match the test assertion expectation
        <p className="text-sm text-slate-400 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-6 text-center">
          No products available.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList
