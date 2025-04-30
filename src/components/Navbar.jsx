import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate, NavLink,useLocation } from 'react-router-dom'

import search from '../assets/images/seacrh.svg'
import wishlist from '../assets/images/Wishlist.svg'
import cart from '../assets/images/Cart1 with Buy.svg'

const Navbar = () => {
    const [username, setUsername] = useState('');
    const [displayname,setDisplayname] = useState(false);
    const navigate= useNavigate();
    const location = useLocation();



    useEffect(() => {
        const fromLogin = location.state?.username; // get it from navigate
        const storedUsername = fromLogin || localStorage.getItem('username');
    
        if (storedUsername) {
          setUsername(storedUsername);
          setDisplayname(true);
        }
      }, [location.state]);
       
      const handleLogout = () => {
        localStorage.removeItem('username');
        setDisplayname(false);
        navigate('/login');
      };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <div className="flex w-full  bg-[#000000] text-[#FAFAFA] px-6 py-4 items-center justify-between  overflow-hidden ">
                <h1 className='text-2xl font-bold'>TechMart</h1>
                {/* hamberger */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                {/* routes */}
                <div className=" hidden md:flex  gap-10 items-center justify-center ">
                    {["Home", "Products", "About", "Contact", "Signup"]
                    .filter(value => !(displayname && value === "Signup")) // remove Signup if logged in
                    .map((value) => { 
                        const path = value === "Home" ? "/" : `/${value.toLowerCase()}`;
                        return (
                            <NavLink key={value} to={path} className={(e) => { return e.isActive ? "underline underline-offset-7" : "" }}>{value}</NavLink>
                        )
                    }
                    )
                    }

                    {displayname && <div className='relative group '>
                 <h1 className="text-2xl font-bold text-white flex">Welcome, <p className='uppercase' >{username}</p></h1>
                    <button onClick={handleLogout} className='absolute top-6.5 left-15 hidden group-hover:block z-100'>Logout</button>
                    </div>
                    }
                </div>
                <div className="hidden lg:flex gap-10 items-center justify-center ">
                    <div className=" flex bg-[#F5F5F5] items-center justify-center rounded text-gray-700">
                        <input type="text" className="p-1 focus:outline-hidden pl-2" placeholder='search...' onChange={()=>{navigate("/products")}} />
                        <img src={search} alt="seacrh" className='cursor-pointer ' onClick={()=>{navigate("/products")}}/>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={wishlist} alt="wishlist" className='cursor-pointer ' onClick={()=>navigate("/wishlist")}/>
                        <img src={cart} alt="Cart" className='cursor-pointer ' onClick={()=>navigate("/cart")} />
                    </div>
                </div>
            </div>
            {isMenuOpen ?
                <div className=" md:hidden bg-black text-white text-center w-full m-auto">
                    <div className="flex flex-col gap-3 ">
                        {["Home", "Products", "About", "Contact", "Signup"].map((value) => {
                            const path = value === "Home" ? "/" : `/${value.toLowerCase()}`;
                            return (
                                <NavLink key={value} to={path} className={(e) => { return e.isActive ? "underline underline-offset-7" : "" }}>{value}</NavLink>
                            );
                        })}
                    </div>
                    {/* Search Box */}
                    <div className="flex justify-center bg-white w-sm items-center rounded px-2">
                        <input type="text" className="  p-1 focus:outline-none text-gray-700 placeholder-gray-500 " placeholder="Search..." onChange={()=>{navigate("/products")}}
                        />
                        <img src={search} alt="Search" className="cursor-pointer w-5 h-5" onClick={()=>{navigate("/products")}} />
                    </div>

                    {/* Icons */}
                    <div className="flex justify-center gap-6 pt-2">
                        <img src={wishlist} alt="Wishlist" className="cursor-pointer w-6 h-6" onClick={()=>navigate("/wishlist")}/>
                        <img src={cart} alt="Cart" className="cursor-pointer w-6 h-6" onClick={()=>navigate("/cart")}/>
                    </div>

                </div>

                : " "}
        </>
    )
}

export default Navbar
