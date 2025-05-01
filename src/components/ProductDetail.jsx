import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';

const ProductDetail = () => {
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { productName } = useParams();
  let [text, setText] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        return res.json();  //fetch we have to use it
      })
      .then((products) => { // if axios.get then use res.data
        // console.log('Fetched products:', products);
        setData(products);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const product = data.find((p) => p.name === productName); // product now conatin full object of specific product -> single obj
  const relatedProduct = data.filter((p) => p.category === product.category); // find give one filter all -> array
  // console.log(relatedProduct);

  const addToWishlist = () => {
    if (!product || !product.id) {
      console.warn("Invalid product data. Cannot add to wishlist.");
      return;
    }

    const wishlistItem = { ...product, quantity: quantity > 0 ? quantity : 1 };

    try {
      const savedWishlist = localStorage.getItem("wishlist");
      const wishlist = savedWishlist ? JSON.parse(savedWishlist) : [];

      // Avoid duplicate entries
      const exists = wishlist.find(item => item.id === product.id);
      if (!exists) {
        wishlist.push(wishlistItem);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
      } else {
        console.log("Item already in wishlist.");
      }

      navigate("/wishlist");
    } catch (error) {
      console.error("Failed to update wishlist:", error);
    }
  };
  const handleBuy = (product) => {
    const username = localStorage.getItem('username');
    if (username) {
      navigate(`/${username}/buy`, { state: { ...product, quantity: text } });
    } else {
      alert('Please log in first.');
      navigate("/login");
    }
  };

  return (
    <>
      {product ? (
        <div className="flex flex-col lg:flex-row justify-around items-center my-8 gap-10 px-4">
          {/* Product Image */}
          <div className="flex justify-center">
            <img src={product.image} alt={product.name} className="w-[300px] sm:w-[400px] lg:w-[500px] h-auto max-h-[600px] shadow-xl shadow-black rounded-full object-contain" />
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-4 w-full lg:w-[50%]">
            <p className="font-semibold text-2xl sm:text-3xl">{product.name}</p>
            <p className="font-semibold text-lg sm:text-xl">{product.price} $</p>
            <p className="text-sm sm:text-base">{product.description}</p>

            <div className="border border-gray-400 mt-5"></div>

            {/* Buy Section */}
            <div className="flex flex-wrap items-center gap-5 my-5 justify-start">
              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <img src="/images/icon-minus.svg" alt="minus" onClick={() => setText(text > 1 ? text - 1 : 1)} className="hover:shadow-black shadow-sm rounded-2xl cursor-pointer w-6" />
                <div className="border-2 border-black px-3 py-1">
                  <p className="text-lg font-semibold">{text}</p>
                </div>
                <img src="/images/icon-plus.svg" alt="plus" onClick={() => setText(text + 1)} className="hover:shadow-black shadow-sm rounded-2xl cursor-pointer w-6" />
              </div>

              {/* Buy Now Button */}
              <button type="button" className="bg-black text-white px-6 py-2 text-sm sm:text-base" onClick={()=>{handleBuy(product)}}>
                Buy Now
              </button>

              {/* Wishlist & Cart */}
              <img src="/images/Wishlist.svg" alt="wishlist" className="border-2 border-black w-10 cursor-pointer" onClick={addToWishlist} />
              <img src="/images/Cart1.svg" alt="cart" className="border-2 border-black w-10 cursor-pointer"
                onClick={() => {
                  const productWithQuantity = { ...product, quantity: text };
                  addToCart(productWithQuantity);
                  navigate("/cart");
                }}
              />
            </div>

            {/* Services Section */}
            <div className="flex flex-col gap-3">
              <div className="flex border-black border-2 p-3 gap-5 shadow-md shadow-gray-500 items-center">
                <img src="/images/delivery-black.svg" alt="delivery" className="w-10" />
                <div className="flex flex-col text-sm sm:text-base">
                  <p>Free Delivery</p>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className="flex border-black border-2 p-3 gap-5 shadow-md shadow-gray-600 items-center">
                <img src="/images/Icon-return.svg" alt="return" className="w-10" />
                <div className="flex flex-col text-sm sm:text-base">
                  <p>Return Delivery</p>
                  <p>Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading or Product Not Found...</p>
      )}


      {/* related products */}
      {relatedProduct ? (
        <div className="mx-auto max-w-[90vw] px-4 py-10 my-20">
          <div className="flex items-center">
            <div className="w-3 h-8 bg-black rounded-sm"></div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl ml-2 font-semibold">Related Products</h1>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-6 sm:gap-8 p-2">
            {relatedProduct.map((value, index) => (
              <div className="bg-gray-100 flex  flex-col justify-center items-center rounded-xl p-4 w-full" key={index}>
                <img src={value.image} alt={`related-${index}`} className="h-[200px] object-contain" />
                <p className='ml-5 font-semibold '>{value.name}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading or Product Not Found...</p>
      )}




    </>
  )
}

export default ProductDetail
