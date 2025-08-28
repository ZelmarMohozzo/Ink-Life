import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from './CartContext';

const CartIcon: React.FC = () => {
  const { getTotalItems, setIsCartOpen } = useCart();
  const totalItems = getTotalItems();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsCartOpen(true)}
        className="relative bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/50 border-2 border-white/20"
      >
        <ShoppingCart className="h-6 w-6" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse shadow-lg">
            {totalItems}
          </span>
        )}
      </button>
    </div>
  );
};

export default CartIcon;