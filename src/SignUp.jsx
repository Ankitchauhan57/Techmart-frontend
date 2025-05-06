import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import sideimg from "./assets/images/Side-Image.png"
import google from "./assets/images/Google.svg"


function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://techmart-backend-v4mh.onrender.com/users')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [])

  const handlesignup = () => {
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      setMessage("X Please fill in all fields");
      return;
    }
    axios.post('https://techmart-backend-v4mh.onrender.com/users', { id: data.length + 1, name: name, email: email, password: password })
      .then((res) => {
        setData([...data, res.data]);
        setName('');
        setEmail('');
        setPassword('');
        navigate("/login");
      })
      .catch(error => console.log(error))
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center mt-2 gap-8 px-4">
        <div className="w-full lg:w-1/2">
          <img src={sideimg} alt="image" className="w-full h-auto" />
        </div>

        <div className='bg-gray-100 flex flex-col items-start justify-center w-full lg:w-1/2 p-6 rounded shadow-md'>
          {/* Error */}
          {message && (
            <div className='bg-red-600 w-full rounded p-2 mb-3'>
              <p className='text-white text-center font-semibold'>{message}</p>
            </div>
          )}

          <h1 className='text-3xl font-bold mb-2'>Create an Account</h1>
          <p className='text-sm text-gray-600 mb-4'>Enter your details below</p>

          <input type="text" placeholder='Name' className='outline-none border-b-2 border-gray-300 py-2 w-full mb-4' value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="email" placeholder='Email' className='outline-none border-b-2 border-gray-300 py-2 w-full mb-4' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" className='outline-none border-b-2 border-gray-300 py-2 w-full mb-4' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className='bg-black text-white w-full rounded py-2 my-4' onClick={handlesignup} >Create Account</button>

          <button className='bg-white text-black border-2 border-black py-2 w-full flex items-center justify-center gap-3 rounded'>
            <img src={google} alt="google" className="w-5 h-5" />Sign up with Google
          </button>

          <div className='flex justify-center w-full mt-4 text-sm'>
            <p className='text-gray-500'>Already have an account?</p>
            <Link to="/login" className='underline ml-2'>Login</Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default SignUp
