import { useState } from 'react'
import {
  NavLink, Link, useNavigate} from "react-router";
import { IoArrowBack } from "react-icons/io5";
import { Button,Box, Typography,TextField, Container } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Add login logic here
  };
  const navigate = useNavigate();
  return (
    <div className='flex w-full font-poppins '>
      <div className='sm:w-1/3 sm:bg-slate-600 sm:h-auto'>
      </div>
      <div className="flex py-auto w-full sm:w-2/3 items-center justify-center min-h-screen bg-blue-50">
        <Link to="/"><div className='flex absolute top-8 text-gray-900 sm:text-gray-100 left-4 items-center'><IoArrowBack />Home</div></Link>
        <div className=" px-8 py-12 bg-white rounded-lg justify-center shadow-xl w-4/5 h-3/4 my-auto sm:w-1/2 sm:h-4/5">
          <h2 className="text-xl  font-poppins text-center text-slate-800">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-10 sm:space-y-14 my-8 sm:my-16 ">
            <div>
              <label htmlFor="email" className="block text-md sm:text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full mt-1 h-10 sm:h-10  text-md sm:text-sm border border-gray-300 rounded-lg
   focus:outline-none focus:ring-2 "
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password} onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-1 mt-1 text-lg sm:text-xs h-10 sm:h-10 border border-gray-300 rounded-lg
   focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              onClick={()=> navigate("/auth")}
              type="submit"
              className="w-full px-8 py-2 text-white bg-slate-700 text-sm sm:text-sm h-10 sm:h-10 rounded-md hover:bg-slate-800
   focus:outline-none focus:ring-2 focus:ring-slate-200 hover:font-bold focus:ring-opacity-50 font-semibold"
            >
              Sign In
            </button>
          </form>
          <p className=" text-sm text-center text-gray-600">
            Don’t have an account? <Link to="/register" className="text-slate-600 hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login