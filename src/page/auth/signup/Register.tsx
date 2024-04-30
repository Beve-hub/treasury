import React, { useState } from 'react';
import Logo from '../../../assets/logo2.png'
import { useNavigate } from 'react-router-dom';

const Register  = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [coun, setCoun] = useState('');

  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/reg');
  };
  return (
    <div>

        <div className='m-10 fixed grid justify-start'>
           <a href='/'>
             <img src={Logo} alt='' className='w-[10rem]' />
          </a>               
        </div>

    <div className="pt-24 w-screen grid items-center justify-center bg-gray-50 sm:px-6 lg:px-8">
      
      <div className=" w-full ">        
        <div >
          <h2 className="mt-6 text-start text-3xl font-extrabold text-gray-900">Register</h2>
          <p className='max-w-[16rem] py-2'>Join us today and enjoy our offers</p>
        </div>
        <p className='font-semibold'>Personal Details</p>
        <form className=" space-y-4" onSubmit={handleSubmit}>
          
          <input type="hidden" name="remember" defaultValue="true" />
          
          <div className="flex gap-2">

          <div>
              <label htmlFor="firstName" className="">
                First Name *
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                 className=" block w-[9.5rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
          </div>

            <div>
              <label htmlFor="lastName" className="">
                Last Name *
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"                
                className=" block w-[9.9rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
           </div>
          </div>

            <div>
              <label htmlFor="email-address" className="">
                Email address *
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"                               className=" block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="">
                Phone Number *
              </label>
              <input
                id="phoneNum"
                name="phoneNum"
                type="text"
                className=" block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Phone Number"
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="">
                Date of Birth *
              </label>
              <input
                id="date"
                name="date"
                type="date"
                className=" block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="DD MM YY"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="">
                Address *
              </label>
              <input
                id="address"
                name="address"
                type="text"               
                className=" block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="">
                state *
              </label>
              <input
                id="state"
                name="state"
                type="text"
                className=" block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="">
                Country *
              </label>
              <input
                id="coun"
                name="coun"
                type="text"
                className=" block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Country"
                value={coun}
                onChange={(e) => setCoun(e.target.value)}
              />
            </div>
          

          <div className=''>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[--bg-color] bg-[--button-color] "
            >
              Submit
            </button>
            <div className="text-sm flex justify-center py-2">
              <p>Already have an account?  </p>
              <a href="/login" className="font-bold text-blue-900 text-center">
                Login
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Register
