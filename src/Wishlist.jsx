import { useEffect, useState } from "react";
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  if (!username) {
    return (
      <div className="container mx-auto px-4 py-8 my-20 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 whitespace-nowrap"> Your Wishlist</h2>
        <p className="text-gray-600 text-lg sm:text-xl px-2">Please  <span onClick={() => navigate('/login')} className="text-blue-500 cursor-pointer underline">login</span>  to view your wishlist.</p>
      </div>

    );
  }

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter(item => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (

    <div className="container mx-auto px-4 py-8 my-20">
      <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-600 text-xl p-2 text-center">Your wishlist is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-xl shadow-md">
            {/* Table Head (Desktop only) */}
            <thead className="bg-gray-100 hidden md:table-header-group">
              <tr className="text-left">
                <th className="p-4">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Subtotal</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {wishlist.map(item => (
                <tr key={item.id} className="border-t border-gray-200 flex flex-col md:table-row w-full md:w-auto">
                  <td className="p-4 font-semibold" data-label="Product">{item.name}</td>
                  <td className="p-4" data-label="Price">${item.price}</td>
                  <td className="p-4" data-label="Quantity">{item.quantity}</td><td className="p-4 font-semibold" data-label="Subtotal">${item.price * item.quantity}</td>
                  <td className="p-4" data-label="Action">
                    <button onClick={() => removeFromWishlist(item.id)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>

  );
}

export default Wishlist
