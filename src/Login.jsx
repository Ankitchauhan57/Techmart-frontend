import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import sideimg from "./assets/images/Side-Image.png"


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [showerror, setShowerror] = useState(false);

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      setMessage("X Please fill in all fields");
      setShowerror(true);
      return;
    }

    axios.post('http://localhost:3000/login', { email, password })
      .then(res => {
        console.log("Login successful:", res.data);
        setMessage(res.data.message);
        localStorage.setItem('username', res.data.user.name);
        navigate('/', { state: { username: res.data.user.name } }); // state pass to "/"

      })
      .catch(err => {
        setShowerror(true)
        console.error("Login failed:", err.response.data);
        setMessage(err.response.data.message);
      });
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center mt-4 gap-8 px-4 lg:justify-around">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img src={sideimg} alt="image" className="w-full h-auto object-contain" />
        </div>

        {/* Form Section */}
        <div className='bg-gray-100 flex flex-col items-start justify-center w-full lg:w-1/2 max-w-md p-6 rounded shadow-md'>

          {/* Error Message */}
          {showerror && (
            <div className='bg-red-600 w-full rounded p-2 mb-4'>
              <p className='text-white text-center font-semibold'>{message}</p>
            </div>
          )}

          <h1 className='text-3xl font-bold mb-1'>Log in to TechMart</h1>
          <p className='text-gray-600 mb-5'>Enter your details below</p>

          <input type="email" placeholder='Email' className='outline-none border-b-2 border-gray-300 py-2 w-full mb-4' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" className='outline-none border-b-2 border-gray-300 py-2 w-full mb-6' value={password} onChange={(e) => setPassword(e.target.value)}/>

          <div className='flex flex-col sm:flex-row justify-between items-center w-full gap-4'>
            <button className='bg-black text-white w-full sm:w-auto px-8 py-2 rounded' onClick={handleLogin}>Login</button>
            <p className='text-sm text-blue-600 cursor-pointer hover:underline'> Forget Password?</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login
