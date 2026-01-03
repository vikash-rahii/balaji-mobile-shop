import React from 'react';
import { useCart } from '../context/CartContext';
import { FaTrash, FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import ProductImage from '../components/ProductImage';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    // Format cart items for WhatsApp message
    let message = 'Hi, I want to place an order:%0A%0A';
    message += 'Order Details:%0A';
    message += '━━━━━━━━━━━━━━━━━━━━%0A';

    cartItems.forEach((item, index) => {
      const itemName = item.name || item.model || item.title || 'Product';
      const itemPrice = item.price || 'Price on request';
      message += `${index + 1}. ${itemName}%0A`;
      message += `   Quantity: ${item.quantity}%0A`;
      message += `   Price: ${itemPrice}%0A`;
      if (item.type) {
        message += `   Type: ${item.type}%0A`;
      }
      message += '%0A';
    });

    message += '━━━━━━━━━━━━━━━━━━━━%0A';
    message += `Total Items: ${cartItems.reduce((sum, item) => sum + item.quantity, 0)}%0A`;
    const total = getCartTotal();
    if (total > 0) {
      message += `Estimated Total: ₹${total.toLocaleString('en-IN')}%0A`;
    }
    message += '%0A';
    message += 'Please confirm availability and proceed with the order.';

    const whatsappUrl = `https://wa.me/918873338001?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const extractPrice = (priceString) => {
    if (!priceString) return 0;
    const match = priceString.toString().match(/[\d,]+/);
    if (!match) return 0;
    return parseFloat(match[0].replace(/,/g, ''));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Shopping <span className="text-red-900">Cart</span>
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">
            <FaShoppingCart className="text-6xl text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Add some products to get started!</p>
            <Link
              to="/all"
              className="inline-block px-6 py-3 bg-red-900 text-white rounded-lg font-semibold hover:bg-red-800 transition"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => {
                const itemName = item.name || item.model || item.title || 'Product';
                const itemPrice = item.price || 'Price on request';
                const priceValue = extractPrice(itemPrice);

                return (
                  <div
                    key={`${item.id}-${item.type}-${index}`}
                    className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition"
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      <ProductImage
                        src={item.img}
                        alt={itemName}
                        type={item.type}
                        className="w-full sm:w-24 h-32 sm:h-24 object-contain rounded-lg bg-gray-100"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {itemName}
                        </h3>
                        {item.brand && (
                          <p className="text-sm text-gray-600 mb-1">Brand: {item.brand}</p>
                        )}
                        {item.type && (
                          <p className="text-sm text-gray-600 mb-2">Type: {item.type}</p>
                        )}
                        <p className="text-xl font-bold text-red-900 mb-4">{itemPrice}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.type, item.quantity - 1)
                              }
                              className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                            >
                              <FaMinus className="text-sm" />
                            </button>
                            <span className="text-lg font-semibold w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.type, item.quantity + 1)
                              }
                              className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                            >
                              <FaPlus className="text-sm" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id, item.type)}
                            className="flex items-center gap-2 text-red-600 hover:text-red-800 transition"
                          >
                            <FaTrash />
                            <span className="text-sm">Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="flex justify-end mt-6">
                <button
                  onClick={clearCart}
                  className="px-4 py-2 text-red-600 hover:text-red-800 font-medium transition"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Items ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</span>
                    <span className="font-semibold">
                      {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                    </span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-xl font-bold text-gray-800">
                      <span>Total</span>
                      <span className="text-red-900">
                        {getCartTotal() > 0
                          ? `₹${getCartTotal().toLocaleString('en-IN')}`
                          : 'Price on request'}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-3 bg-red-900 text-white rounded-lg font-semibold hover:bg-red-800 transition mb-4 flex items-center justify-center gap-2"
                >
                  <FaShoppingCart />
                  Checkout via WhatsApp
                </button>

                <Link
                  to="/all"
                  className="block w-full text-center py-2 text-gray-600 hover:text-red-900 transition"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;

