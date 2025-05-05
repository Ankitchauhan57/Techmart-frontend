import React from 'react'
import Qrcode from '../assets/images/Qr-code.png' 
import googleplay from '../assets/images/google-play.png' 
import appleplay from '../assets/images/app-store.png' 
import copyright from '../assets/images/copyright.svg'

const Footer = () => {
    return (
        <>
            <div className="bg-black text-white px-6 py-10 mt-10">
  <div className="max-w-screen-xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
    {/* Brand & Subscription */}
    <div>
      <h1 className="text-2xl font-bold pb-2">TechMart</h1>
      <p className="text-lg">Subscribe</p>
      <p className="text-sm mb-2">Get 10% off your first order</p>
      <div className="flex items-center border border-white rounded px-2 py-1 w-full max-w-xs">
        <input type="text" className="bg-transparent outline-none text-white flex-1" placeholder="Enter your email"
        />
        <img src="images/icon-send.svg" alt="send" className="w-5 h-5 cursor-pointer" />
      </div>
    </div>

    {/* Support */}
    <div>
      <ul>
        <li className="text-lg font-semibold pb-2">Support</li>
        <li>ShaharMalpur, Samalkha,</li>
        <li>Panipat, Haryana, India.</li>
        <li>techmart@gmail.com</li>
        <li>+91 8950925099</li>
      </ul>
    </div>

    {/* Account */}
    <div>
      <ul>
        <li className="text-lg font-semibold pb-2">Account</li>
        <li>My Account</li>
        <li>Login / Register</li>
        <li>Cart</li>
        <li>Wishlist</li>
        <li>Shop</li>
      </ul>
    </div>

    {/* Quick Link */}
    <div>
      <ul>
        <li className="text-lg font-semibold pb-2">Quick Link</li>
        <li>Privacy Policy</li>
        <li>Terms Of Use</li>
        <li>FAQ</li>
        <li>Contact</li>
      </ul>
    </div>

    {/* Download App */}
    <div>
      <h1 className="text-lg font-semibold pb-2">Download App</h1>
      <p className="text-sm mb-2">Save $3 with App New User Only</p>
      <div className="flex gap-3">
        <img src={Qrcode} alt="qr" className="w-16 h-16" />
        <div className="flex flex-col gap-2">
          <img src={googleplay} alt="Google Play" className="w-24" />
          <img src={appleplay} alt="Apple Store" className="w-24" />
        </div>
      </div>
    </div>
  </div>

  {/* Divider */}
  <div className="my-6 border-b border-gray-600"></div>

  {/* Bottom Bar */}
  <div className="text-gray-400 text-center flex justify-center items-center gap-2 text-sm">
    <img src={copyright} alt="copyright" />
    <p>Copyright Rimel 2022. All rights reserved.</p>
  </div>
</div>

        </>
    )
}

export default Footer
