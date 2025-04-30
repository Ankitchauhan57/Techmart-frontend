import React from 'react'

const About = () => {
  return (
    <>

      <div className='flex flex-col lg:flex-row w-full gap-10 lg:gap-20 p-5 lg:p-20'>
        <div className='flex flex-col justify-center gap-5 w-full lg:w-1/2'>
          <h1 className='text-4xl lg:text-6xl font-semibold'>Our Story</h1>
          <p>Launced in 2025, <span className='font-bold'>TechMart</span>  is  Asia's premier online shopping makterplace with an active presense in India. Supported by wide range of tailored marketing, data and service solutions, TechMart has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</p>
          <p>TechMart has more than 1 Million products to offer, growing at a very fast. TechMart offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div className='w-full lg:w-1/2'>
          <img src="images/about_side.png" alt="shopping image" className='w-full h-auto object-contain' />
        </div>
      </div>

      {/* cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12 mx-4 lg:mx-20'>
        {[
          { icon: 'icon_shop.svg', number: '10.5k', label: 'Sellers active on our site' },
          { icon: 'Icon-Sale.svg', number: '33k', label: 'Monthly Product Sale' },
          { icon: 'Icon-Shopping bag.svg', number: '45.5k', label: 'Customers active on our site' },
          { icon: 'Icon-Moneybag (1).svg', number: '25k', label: 'Annual gross sale on our site' }
        ].map(({ icon, number, label }, i) => (
          <div key={i} className='flex flex-col items-center gap-2 border-4 border-gray-200 px-6 py-6 hover:bg-black hover:text-white transition-all ease-out rounded-lg'>
            <img src={`/images/${icon}`} alt="" className='bg-black rounded-full w-16 h-16 p-2 border-8 border-gray-300 object-contain'/>
            <p className='text-2xl font-bold'>{number}</p>
            <p className='text-center'>{label}</p>
          </div>
        ))}
      </div>

      {/* founder */}
      <div className='flex flex-col md:flex-row justify-around items-center w-full gap-10 my-20 px-5'>
  <div className="flex flex-col items-center">
    <img src="images/ankit4.png" alt="Ankit Chauhan" className='bg-gray-200 px-2 pt-5 mb-3 h-64 w-64 object-contain rounded-md' />
    <p className='font-bold text-2xl'>Ankit Chauhan</p>
    <p>Founder & Chairman</p>
  </div>

  <div className="flex flex-col items-center">
    <img src="images/chirag.png" alt="Chirag Goal" className='bg-gray-200 px-2 pt-5 mb-3 h-64 w-64 object-contain rounded-md' />
    <p className='font-bold text-2xl'>Chirag Goal</p>
    <p>Finance Manager</p>
  </div>

  <div className="flex flex-col items-center">
    <img src="images/Vansh.png" alt="Vansh" className='bg-gray-200 px-2 pt-5 mb-3 h-64 w-64 object-contain rounded-md' />
    <p className='font-bold text-2xl'>Vansh</p>
    <p>Chief Sales Officer (CSO)</p>
  </div>
</div>



      {/* services */}
      <div className='w-[90vw] max-w-7xl m-auto my-20 px-4'>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 text-center'>
    
    <div className='flex flex-col items-center text-black'>
      <img src="images/icon-delivery.svg" alt="Delivery Icon" className='bg-black rounded-full w-16 h-16 border-[10px] border-gray-300 p-2 object-contain' />
      <p className='text-xl font-bold mt-3'>FREE AND FAST DELIVERY</p>
      <p className='font-semibold'>Free delivery for all orders over $140</p>
    </div>

    <div className='flex flex-col items-center'>
      <img src="images/Icon-Customer-service.svg" alt="Customer Service Icon" className='bg-black rounded-full w-16 h-16 border-[10px] border-gray-300 p-2 object-contain'/>
      <p className='text-xl font-bold mt-3'>24/7 CUSTOMER SERVICE</p>
      <p className='font-semibold'>Friendly 24/7 customer support</p>
    </div>

    <div className='flex flex-col items-center'>
      <img src="images/Icon-secure.svg" alt="Secure Payment Icon" className='bg-black rounded-full w-16 h-16 border-[10px] border-gray-300 p-2 object-contain'/>
      <p className='text-xl font-bold mt-3'>MONEY BACK GUARANTEE</p>
      <p className='font-semibold'>We return money within 30 days</p>
    </div>
    
  </div>
</div>

    </>
  )
}

export default About
