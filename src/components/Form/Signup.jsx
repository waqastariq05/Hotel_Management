import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "" })
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        try {
            localStorage.setItem("user", JSON.stringify(user))
            navigate("/")
        } catch (e) { console.log(e) }
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    return (
        <div className='banner h-screen'>
            <div className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'>
                <div className="w-[70%] rounded-md py-10 bg-white/30 z-10 mx-auto">
                    <div className="flex flex-col text-center w-full mb-5">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Sign Up Page</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-[#ddd]">Register an account</p>
                    </div>
                    {/* Form */}
                    <div className="w-full mx-auto px-10">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-white">Name</label>
                                    <input type="text" id="name" name="name" value={user.name} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
                                    <input type="email" id="email" name="email" value={user.email} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="password" className="leading-7 text-sm text-white">Password</label>
                                    <input type="password" id="password" name="password" value={user.password} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type='submit' onClick={handleSubmit}>Sign up</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-5'>
                        <p className='text-base font-medium text-white/80'>Login an account? <a href="/" className='text-orange-700'>Login</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
