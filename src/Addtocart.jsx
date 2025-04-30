import React from 'react'
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Addtocart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();
  // Check if user is logged in
  const username = localStorage.getItem('username');
  if (!username) {
    return (
      
      <div className="container mx-auto px-4 py-8 my-20 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4"> Your Cart</h2>
        <p className="text-gray-600 text-lg sm:text-xl px-2">Please  <span onClick={() => navigate('/login')} className="text-blue-500 cursor-pointer underline">login</span>  to view your cart.</p>
      </div>
    );
  }

  return (
    <>
      {/* <div className="container mx-auto  px-4 py-8 text-center my-20">
        <h2 className="text-6xl font-semibold mb-4">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-xl p-2">Your cart is empty.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-sm md:text-base">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Product</th>
                  <th className="px-4 py-2 text-right">Price</th>
                  <th className="px-4 py-2 text-center">Quantity</th>
                  <th className="px-4 py-2 text-right">Subtotal</th>
                  <th className="px-4 py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => {
                  const quantity = item.quantity || 1; // fallback to 1 if missing
                  const subtotal = item.price * quantity;

                  return (
                    <tr key={item.id} className="border-t border-gray-200 text-center">
                      <td className="px-4 py-2 text-left">{item.name}</td>
                      <td className="px-4 py-2 text-right">${item.price.toFixed(2)}</td>
                      <td className="px-4 py-2">{item.quantity || 1}</td>
                      <td className="px-4 py-2 text-right">${(item.price * (item.quantity || 1)).toFixed(2)}</td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div >
              <button type="button" className='bg-black text-white px-12 py-2 mt-10 text-2xl font-semibold' onClick={()=> alert("Order placed")}> Buy Now</button>
            </div>
          </div>

        )}
      </div> */}
     <div className="container mx-auto px-4 py-8 text-center my-20">
  <h2 className="text-6xl font-semibold mb-4">Your Cart</h2>

  {cartItems.length === 0 ? (
    <p className="text-gray-600 text-xl p-2">Your cart is empty.</p>
  ) : (
    <div className="overflow-x-auto">
      {/* Table for larger screens */}
      <div className="hidden sm:block">
        <table className="min-w-full border border-gray-200 text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Product</th>
              <th className="px-4 py-2 text-right">Price</th>
              <th className="px-4 py-2 text-center">Quantity</th>
              <th className="px-4 py-2 text-right">Subtotal</th>
              <th className="px-4 py-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => {
              const quantity = item.quantity || 1; // fallback to 1 if missing
              const subtotal = item.price * quantity;

              return (
                <tr key={item.id} className="border-t border-gray-200 text-center">
                  <td className="px-4 py-2 text-left">{item.name}</td>
                  <td className="px-4 py-2 text-right">${item.price.toFixed(2)}</td>
                  <td className="px-4 py-2">{item.quantity || 1}</td>
                  <td className="px-4 py-2 text-right">${(item.price * (item.quantity || 1)).toFixed(2)}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Card layout for small screens */}
      <div className="block sm:hidden">
        {cartItems.map((item) => {
          const quantity = item.quantity || 1; // fallback to 1 if missing
          const subtotal = item.price * quantity;

          return (
            <div key={item.id} className="border-b border-gray-200 py-4 px-4 mt-5">
              <div className="flex justify-center">
                <h3 className="font-semibold">{item.name}</h3>
              </div>
              <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
              <p className="text-gray-600">Quantity: {item.quantity || 1}</p>
              <p className="font-semibold text-gray-800">
                Subtotal: ${(item.price * (item.quantity || 1)).toFixed(2)}
              </p>
                <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                  Remove
                </button>
            </div>
          );
        })}
      </div>

      <div className="mt-4 sm:mt-10">
        <button type="button" className="bg-black text-white px-12 py-2 text-2xl font-semibold rounded" onClick={() => alert("Order placed")} >
          Buy Now
        </button>
      </div>
    </div>
  )}
</div>



    </>
  )
}

export default Addtocart
