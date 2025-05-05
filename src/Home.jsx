import React, { useState, useEffect } from 'react';
import bg_2 from './assets/images/bg-2.png'
import ps5 from './assets/images/ps5-large.png'
import { useNavigate } from 'react-router-dom';


const icon = [{
  img: "images/Category-CellPhone.svg",
  text: "Phone",
},
{
  img: "images/Category-Camera.svg",
  text: "camera",
},
{
  img: "images/Category-Computer.svg",
  text: "Computer",
},
{
  img: "images/Category-Gamepad.svg",
  text: "Gamepad",
},
{
  img: "images/Category-Headphone.svg",
  text: "Headphone",
},
{
  img: "images/Category-SmartWatch.svg",
  text: "SmartWatch",
},
]
const Home = () => {
  const images = [
    '/images/frame.png',
    '/images/op_lenovo-removebg.png',
    '/images/op_headphone-removebg.png',
    '/images/op_watch-removebg.png'
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  return (
    <>

      <div className='flex flex-col lg:flex-row justify-center mt-1 bg-black overflow-hidden'>
        {/* Text Content */}
        <div className="bg-black text-white px-6 py-10 lg:px-10 lg:py-20 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-[80px] font-bold leading-tight">Latest Tech.</h1>
          <h1 className="text-4xl md:text-5xl lg:text-[80px] font-bold leading-tight">Minimal Design.</h1>
          <p className='text-sm md:text-base mt-2 mb-4'>Explore the newest gadgets with our curated tech collection.</p>
          <button className="underline underline-offset-3 cursor-pointer text-base" onClick={() => navigate("/products")}>Shop Now</button>
        </div>

        {/* Image Section */}
        <div className='w-full lg:w-auto py-8 lg:py-20 flex justify-center'>
          <img
            src={images[currentIndex]}
            alt="slider"
            className="w-72 h-76 sm:w-96 lg:w-[500px]  object-contain transition-all duration-1000 ease-in-out"
          />
        </div>
      </div>


      {/* new arival */}
      <div className='flex justify-center mt-20'>
        <div className='w-full sm:w-[80vw] p-10'>
          <div className='flex'>
            <div className='w-3 bg-black rounded-sm'></div>
            <h1 className='text-4xl ml-2 font-semibold'>New Arrivals</h1>
          </div>
          <div className='mt-10'>
            <div className='flex flex-col sm:flex-row justify-center gap-10 sm:gap-10'>
              <div className='bg-black text-white rounded-lg shadow-lg w-full sm:w-[45%] relative overflow-hidden'>
                <img src={ps5} alt="PlayStation" className="mt-30 rounded-md hover:scale-105" />
                <div className='absolute inset-0 flex flex-col justify-end p-4 w-[65%]'>
                  <p className='text-lg font-semibold'>PlayStation 5</p>
                  <p className='text-gray-300'>Black and White version of the PS5 coming out on sale.</p>
                  <p className='font-semibold cursor-pointer underline underline-offset-3' onClick={() => navigate("/products")}>Shop now</p>
                </div>
              </div>
              
              <div className='flex flex-col gap-10 w-full sm:w-[50%]'>
                <div className='flex items-end bg-[url(/images/op_watch-removebg.png)] h-[43%] bg-[position:80%_center] p-5 hover:bg-[length:50%] bg-no-repeat rounded-lg bg-black'>
                  <div className='text-white flex flex-col w-[45%] p-3'>
                    <p className='text-lg font-semibold'>Smart Watch</p>
                    <p className='text-gray-300 text-sm'>Apple ultra watch coming out on sale, grab it soon.</p>
                    <p className='font-semibold cursor-pointer underline underline-offset-3' onClick={() => navigate("/products")}>Shop now</p>
                  </div>
                </div>

                <div className='flex gap-10 h-[50%]'>
                  <div className='bg-black w-[50%] h-[100%] flex items-end border-2 border-black rounded-lg bg-[url(/images/speakerlarge.png)] bg-[length:auto_75%] hover:bg-[length:90%] bg-center bg-no-repeat'>
                    <div className='text-white flex flex-col p-3'>
                      <p className='text-lg font-semibold'>Speakers</p>
                      <p className='text-gray-300 text-sm'>Amazon wireless speakers</p>
                      <p className='font-semibold cursor-pointer underline underline-offset-3' onClick={() => navigate("/products")}>Shop now</p>
                    </div>
                  </div>
                  <div className='bg-black w-[50%] flex items-end border-2 border-black rounded-lg bg-[url(/images/op_headphone-removebg.png)] bg-[length:auto_75%] hover:bg-[length:90%] bg-center bg-no-repeat'>
                    <div className='text-white flex flex-col p-3'>
                      <p className='text-lg font-semibold'>HeadPhone</p>
                      <p className='text-gray-50 text-sm'>Hot wireless Music</p>
                      <p className='font-semibold cursor-pointer underline underline-offset-3' onClick={() => navigate("/products")}>Shop now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='w-[80vw] bg-gray-300 h-[1.5px] m-auto my-15'></div>

      {/* best product */}
      <div className='flex justify-center'>
        <div className='w-full sm:w-[80vw] p-10'>
          <div className='flex'>
            <div className='w-3 bg-black rounded-sm'></div>
            <h1 className='text-4xl ml-2 font-semibold'>Best Selling Products</h1>
          </div>
          {/* Products */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-10'>
            <div className='flex flex-col items-center gap-2'>
              <img src="images/iphone16.jpg" alt="iphone" className='h-[250px] w-full object-contain' />
              <p className='text-xl font-semibold'>IPHONE 16PRO MAX</p>
              <img src="images/rating1.png" alt="rating" />
            </div>
            <div className='flex flex-col items-center gap-2'>
              <img src="images/camera16.jpg" alt="camera" className='h-[250px] w-full object-contain' />
              <p className='text-xl font-semibold'>CANON EOS DSLR Camera</p>
              <img src="images/rating1.png" alt="rating" />
            </div>
            <div className='flex flex-col items-center gap-2'>
              <img src="images/16watch.jpg" alt="watch" className='h-[250px] w-full object-contain' />
              <p className='text-xl font-semibold'>NOISE PLUS 2 PRO</p>
              <img src="images/rating1.png" alt="rating" />
            </div>
            <div className='flex flex-col items-center gap-2'>
              <img src="images/16game.jpg" alt="gamepad" className='h-[250px] w-full object-contain' />
              <p className='text-xl font-semibold'>GP11 Shooter USB Gamepad</p>
              <img src="images/rating1.png" alt="rating" />
            </div>
          </div>
        </div>
      </div>


      <div className='w-[80vw] bg-gray-300 h-[1.5px] m-auto my-15'></div>
      <div className='flex justify-center' onClick={() => navigate("/products")}>
        <img src={bg_2} alt="background" className="w-[80vw] h-auto sm:h-[400px] md:h-[500px] lg:h-[600px] object-contain" />
      </div>
      <div className='w-[80vw] bg-gray-300 h-[1.5px] m-auto my-15'></div>

      {/* our products */}
      <div className='flex justify-center'>
        <div className='w-[80vw] p-10'>
          <div className='flex'>
            <div className='w-3 bg-black rounded-sm'></div>
            <h1 className='text-4xl ml-2 font-semibold'>Explore our Products</h1>
          </div>
          {/* Products */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-10'>
            <div className='rounded-lg flex flex-col items-center hover:scale-105 gap-2'>
              <img src="images/16game.jpg" alt="gamepad" className='h-[250px]' />
              <p className='text-xl font-semibold'>HAVIT HV-G92 Gamepad</p>
              <img src="images/rating1.png" alt="rating" />
            </div>
            <div className='rounded-xl flex flex-col items-center hover:scale-105 gap-2'>
              <img src="images/op_android.jpg" alt="android" className='h-[250px]' />
              <p className='text-xl font-semibold'>MOTOROLA EDGE 50 PRO</p>
              <img src="images/rating1.png" alt="rating" />
            </div>
            <div className='rounded-xl flex flex-col items-center hover:scale-105 gap-2'>
              <img src="images/op_leptop.jpg" alt="laptop" className='h-[250px]' />
              <p className='text-xl font-semibold'>ASUS VIVOBOOK 15</p>
              <img src="images/rating1.png" alt="rating" />
            </div>
            <div className='rounded-xl flex flex-col items-center hover:scale-105 gap-2'>
              <img src="images/camera16.jpg" alt="camera" className='h-[250px]' />
              <p className='text-xl font-semibold'>CANON EOS DSLR Camera</p>
              <img src="images/rating1.png" alt="rating" />
            </div>
            <div className='rounded-xl flex flex-col items-center hover:scale-105 gap-2'>
              <img src="images/op_smartwatch1.jpg" alt="smartwatch" className='h-[250px]' />
              <p className='text-xl font-semibold'>ROLEX ANALOG WATCH</p>
              <img src="images/rating1.png" alt="rating" />
            </div>
            <div className='rounded-xl flex flex-col items-center hover:scale-105 gap-2'>
              <img src="images/op_lenovo.jpg" alt="lenovo" className='h-[250px]' />
              <p className='text-xl font-semibold'>LENOVO IDEAPAD 3</p>
              <img src="images/rating1.png" alt="rating" />
            </div>
            <div className='rounded-xl flex flex-col items-center hover:scale-105 gap-2'>
              <img src="images/op_samsung.jpg" alt="samsung" className='h-[250px]' />
              <p className='text-xl font-semibold'>SAMSUNG S24 ULTRA</p>
              <img src="images/rating1.png" alt="rating" />
            </div>
            <div className='rounded-xl flex flex-col items-center hover:scale-105 gap-2'>
              <img src="images/op_watch.jpg" alt="watch" className='h-[250px]' />
              <p className='text-xl font-semibold'>APPLE ULTRA WATCH</p>
              <img src="images/rating1.png" alt="rating" />
            </div>
          </div>
          <div className='text-center mt-10'>
            <button
              type="button"
              className='bg-black text-white rounded px-10 py-3 text-lg transition duration-300 ease-in-out hover:translate-y-2 hover:scale-110 cursor-pointer'
              onClick={() => navigate("/products")}>
              View All Products
            </button>
          </div>
        </div>
      </div>

      <div className='w-[80vw] bg-gray-300 h-[1.5px] m-auto my-15'></div>
      {/* category */}
      <div className='flex justify-center'>
        <div className='w-[80vw] mt-15 p-10'>
          <div className='flex'>
            <div className='w-3 bg-black rounded-sm'></div>
            <h1 className='text-4xl ml-2 font-semibold'>Browse by Category</h1>
          </div>
          {/* Category icon */}
          <div className="flex xl:flex-nowrap flex-wrap mt-7 gap-8 sm:gap-14 md:gap-20 items-center justify-center">
            {icon.map(({ img, text }, index) => (
              <div key={index} className='flex flex-col items-center sm:w-40 md:w-44  lg:w-52 shadow-lg shadow-black p-6 rounded-lg hover:scale-105 hover:bg-gray-100 transition-transform'
                onClick={() => navigate("/products")}
              >
                <img src={img} alt={text} className='w-16 sm:w-20 md:w-24' />
                <p className='mt-2 text-center'>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='w-[80vw] bg-gray-300 h-[1.5px] m-auto my-15'></div>

      {/*  servicesss */}
      <div className='w-[80vw] m-auto mb-20'>
        <div className='flex flex-wrap justify-between p-4 gap-10 sm:gap-14 md:gap-20'>
          <div className='flex flex-col items-center text-black w-full sm:w-auto'>
            <img src="images/icon-delivery.svg" alt="delivery" className='bg-black rounded-full w-20 border-8 border-gray-300 p-2'/>
            <p className='text-2xl font-bold whitespace-nowrap'>FREE AND FAST DELIVERY</p>
            <p className='font-semibold'>Free delivery for all orders over $140</p>
          </div>
          <div className='flex flex-col items-center w-full sm:w-auto'>
            <img src="images/Icon-Customer-service.svg" alt="customer" className='bg-black rounded-full w-20 border-8 border-gray-300 p-2'/>
            <p className='text-2xl font-bold whitespace-nowrap'>24/7 CUSTOMER SERVICE</p>
            <p className='font-semibold'>Friendly 24/7 customer support</p>
          </div>
          <div className='flex flex-col items-center w-full sm:w-auto'>
            <img src="images/Icon-secure.svg" alt="secure" className='bg-black rounded-full w-20 border-8 border-gray-300 p-2'/>
            <p className='text-2xl font-bold whitespace-nowrap'>MONEY BACK GUARANTEE</p>
            <p className='font-semibold'>We return money within 30 days</p>
          </div>
        </div>
      </div>


      <div className='bg-gray-300 fixed bottom-9 right-5 w-10  p-2 h-10 rounded-full  cursor-pointer flex justify-center'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="images/icons_arrow-up.svg" alt="up" />
      </div>




    </>
  )
}

export default Home
