import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row justify-evenly items-center gap-10 px-5 py-10 lg:my-20 md:my-5'>
        {/* Contact Info */}
        <div className='flex flex-col gap-10 max-w-md w-full'>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-3'>
              <img src="images/icons-phone.svg" alt="phone" className='bg-black rounded-full p-2 w-10 h-10' />
              <p className='text-lg font-semibold'>Call to US</p>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p><b>Phone:</b> +91 89509xxxxx</p>
          </div>

          <div className='border-t-2 border-black'></div>

          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-3'>
              <img src="images/icons-mail.svg" alt="mail" className='bg-black rounded-full p-2 w-10 h-10' />
              <p className='text-lg font-semibold'>Write to Us</p>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p><b>Emails:</b> customer@techmart.com</p>
            <p><b>Support:</b> support@techmart.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col gap-6 w-full max-w-2xl">
          <div className='flex flex-col sm:flex-row gap-6'>
            <input type="text" placeholder="Your Name" className='bg-gray-200 px-6 py-3 flex-1 outline-none' required />
            <input type="email" placeholder="Your Email" className='bg-gray-200 px-6 py-3 flex-1 outline-none' required />
            <input type="tel" placeholder="Your Phone Number" className='bg-gray-200 px-6 py-3 flex-1 outline-none' required />
          </div>
          <textarea rows="6" placeholder="Your Message" className='bg-gray-200 px-6 py-3 resize-none outline-none w-full' required ></textarea>
          <button type="button" className='bg-black text-white px-10 py-3 w-fit self-end hover:bg-gray-800 transition'>
            Send Message
          </button>
        </div>
      </div>


    </>
  )
}

export default Contact
