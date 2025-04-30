import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [error, setError] = useState(null);
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
        console.log('Fetched products:', products);
        setData(products);
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message);
        console.log(err)
      })
  }, [])
  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error:{error}</div>;

  // 🧠 Filter products by selected category
  const filteredProducts = selectedCategory
    ? data.filter((product) => product.category === selectedCategory)
    : data;

  const categories = ['phone', 'smartwatch', 'gamepad', 'headphone', 'camera'];

  return (
    <>
      <div className="flex flex-wrap sm:flex-nowrap mt-10 gap-4">
        {/* Sidebar Filter */}
        <div className="w-full sm:w-[300px] bg-gray-100 p-6 shadow-md mb-6 sm:mb-0">
          <h2 className="text-3xl font-bold mb-4 text-nowrap">Filter by Category</h2>
          <form className="space-y-3">
            {categories.map((cat) => (
              <div key={cat} className="flex items-center">
                <input type="radio" id={cat} name="category" value={cat} checked={selectedCategory === cat} onChange={() => setSelectedCategory(cat)} className="mr-2"/>
                <label htmlFor={cat} className="cursor-pointer text-xl uppercase">{cat}</label>
              </div>
            ))}
            <div className="mt-4">
              <button type="button" onClick={() => setSelectedCategory('')} className="text-xl px-6 py-2 text-white font-semibold bg-black">
                Clear Filter
              </button>
            </div>
          </form>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10">
          {filteredProducts.map((value, index) => (
            <Link to={`/products/${value.name}`} key={index}>
              <div className="bg-gray-500 text-white hover:bg-gray-600 hover:scale-105 transition-all p-4 rounded-lg sm:h-[380px] sm:mx-1 mx-8 h-[55vh]">
                <img src={value.image} alt="product" className="sm:h-[250px] h-[40vh] w-full object-cover rounded mb-4"
                />
                <p className="font-semibold">Price: {value.price}</p>
                <p className="font-semibold">Name: {value.name}</p>
                <p className="font-semibold">Brand: {value.brand}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </>
  )
}

export default Product
