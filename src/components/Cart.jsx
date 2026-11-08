import React from 'react'

const Cart = ({ cartItems = [] }) => {
  return (
    <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-xs">
      <h2 className="text-lg font-bold text-slate-700 dark:text-slate-300 mb-3">Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <p className="text-sm text-slate-400 italic">Your cart is currently empty.</p>
      ) : (
        <ul className="space-y-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-400">
          {/* Loops across items to display the exact requested string */}
          {cartItems.map((item) => (
            <li key={item.id} className="leading-relaxed">
              {item.name} is in your cart. {item.quantity > 1 && `(x${item.quantity})`}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart
