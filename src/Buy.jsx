import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Buy = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state;
    const cartItems = location.state?.cartItems || [];
    const quantity = product.quantity || 1;
    const price = product.price;
    const subtotal = cartItems.length > 0
        ? cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
        : price * quantity;

    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const applyCoupon = () => {
        if (couponCode === 'ankit') {
            setDiscount(10);  // 10% discount
            setCouponCode("")
        } else {
            alert('Invalid Coupon Code');
            setDiscount(0);
        }
    };
    const discountAmount = (subtotal * discount) / 100;
    const total = subtotal - discountAmount;
    const [paymentMethod, setPaymentMethod] = useState("Cash");
    return (
        <>
            <div className='flex flex-col lg:justify-between  lg:flex-row gap-10 mt-8 lg:px-20 px-4'>
                <div className='flex flex-col gap-4 w-full lg:w-2/6'>
                    <h1 className='text-3xl font-semibold mb-6'>Billing Details</h1>
                    <label htmlFor="Name">First Name *</label>
                    <input type="text" id="Name" required className='bg-gray-100 p-2 outline-none' />
                    <label htmlFor="address">Street Address *</label>
                    <input type="text" id="address" required className='bg-gray-100 p-2 outline-none' />
                    <label htmlFor="extra">Apartment, floor, etc. (optional)</label>
                    <input type="text" id="extra" className='bg-gray-100 p-2 outline-none' />
                    <label htmlFor="town">Town/City *</label>
                    <input type="text" id="town" required className='bg-gray-100 p-2 outline-none' />
                    <label htmlFor="no">Phone Number *</label>
                    <input type="number" id="no" min="10" required className='bg-gray-100 p-2 outline-none' />
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" required className='bg-gray-100 p-2 outline-none' />
                    <div className='flex items-center gap-3'>
                        <input type="checkbox" id="check" className='w-5 h-5 accent-black' required />
                        <label htmlFor="check" >Save this information for faster check-out next time</label>
                    </div>
                </div>

                <div className='mt-10 flex flex-col gap-6 w-full lg:w-1/2'>
                    <h3 className='text-xl sm:text-2xl text-center font-semibold'>You're buying:</h3>
                    {cartItems.length > 0 ? (
                        <>
                            {cartItems.map((item, index) => (
                                <div key={index} className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-3 p-3 border rounded-md">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
                                    <p className='text-sm sm:text-base'>{item.name}</p>
                                    <p className='text-sm sm:text-base'>${item.price}</p>
                                    {item.quantity > 1 && (
                                        <p className='text-sm sm:text-base'>
                                            ${(item.price * item.quantity).toFixed(2)} <sub>x{item.quantity}</sub>
                                        </p>
                                    )}
                                </div>
                            ))}
                        </>
                    ) : (
                        <div className='flex flex-col sm:flex-row items-center justify-around mb-5 gap-3 p-3 border rounded-md'>
                            <img src={product.image} alt="image" className='w-16 h-16 sm:w-20 sm:h-20 object-contain' />
                            <p className='text-sm sm:text-base'>{product.name}</p>
                            <p className='text-sm sm:text-base'>${product.price}</p>
                        </div>
                    )}
                    <div className='flex justify-between text-sm sm:text-base'>
                        <p>Subtotal:</p>
                        <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <div className='border-b border-gray-300'></div>
                    <div className='flex justify-between text-sm sm:text-base'>
                        <p>Shipping:</p>
                        <p>Free</p>
                    </div>
                    {/* Discount Section */}
                    {discount > 0 && (
                        <>
                            <div className='border-b border-gray-300 mb-2'></div>
                            <div className='flex justify-between text-sm sm:text-base'>
                                <p>Discount ({discount}%):</p>
                                <p>-${discountAmount.toFixed(2)}</p>
                            </div>
                        </>
                    )}
                    <div className='border-b border-gray-300'></div>
                    <div className='flex justify-between font-semibold text-base sm:text-lg'>
                        <p>Total:</p>
                        <p>${total.toFixed(2)}</p>
                    </div>
                    <div className='border-b border-gray-300'></div>
                    <div className='flex items-center gap-2 text-sm sm:text-base'>
                        <input type="radio" id="bank" name="payment" value="Bank" className='accent-black w-4 h-4'
                            checked={paymentMethod === "Bank"} onChange={(e) => setPaymentMethod(e.target.value)}/>
                        <label htmlFor="bank">Bank</label>
                    </div>
                    <div className='flex items-center gap-2 text-sm sm:text-base'>
                        <input type="radio" id="cash" name="payment" value="Cash" className='accent-black w-4 h-4'
                            checked={paymentMethod === "Cash"} onChange={(e) => setPaymentMethod(e.target.value)}/>
                        <label htmlFor="cash">Cash on delivery</label>
                    </div>

                    {/* Coupon and Place Order */}
                    <div className='flex flex-col sm:flex-row sm:justify-center sm:items-center gap-3 w-full'>
                        <input type="text" placeholder='Coupon Code {Try ankit}' className='border-2 p-2 rounded w-full sm:w-1/2' value={couponCode} onChange={(e) => setCouponCode(e.target.value)}/>
                        <input type="button" value="Apply Coupon" className='bg-black text-white px-6 py-2 rounded cursor-pointer w-full sm:w-1/2' onClick={applyCoupon}/>
                    </div>
                    <button type="button" className='p-3 mt-2 rounded bg-black text-white font-semibold hover:bg-gray-800 transition duration-200'
                        onClick={() => {
                            alert("Order Placed");
                            navigate("/");
                        }}
                    >Place Order
                    </button>
                </div>

            </div>
        </>
    )
}

export default Buy
