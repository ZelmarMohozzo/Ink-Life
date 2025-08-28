import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from './CartContext';

const CartIcon: React.FC = () => {
  const { getTotalItems, setIsCartOpen } = useCart();
  const totalItems = getTotalItems();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-purple-500/25"
    >
      <ShoppingCart className="h-5 w-5" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
          {totalItems}
        </span>
      )}
    </button>
  );
};

export default CartIcon;