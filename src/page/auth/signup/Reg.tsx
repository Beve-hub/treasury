import React, { useState } from 'react';
import Logo from '../../../assets/logo2.png'
import { useNavigate } from 'react-router-dom';

const Reg = () => {
    const [ssn, setSsn] = useState('');
    const [pin, setPin] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    
    const navigate = useNavigate();
  
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      navigate('/amount');
    };
    return (
      <div>
  
         <div className='m-10 grid justify-start'>
           <a href='/'>
             <img src={Logo} alt='' className='w-[10rem]' />
          </a>               
        </div>
  
      <div className=" w-screen grid items-center justify-center bg-gray-50 sm:px-6 lg:px-8">
        
        <div className=" w-full ">        
          <div >
            <h2 className="mt-6 text-start text-3xl font-extrabold text-gray-900">Register</h2>
            <p className='max-w-[16rem] py-2'>Join us today and enjoy our offers</p>
          </div>
          <p className='font-semibold'>Security Info</p>
          <form className=" space-y-4" onSubmit={handleSubmit}>
            
            <input type="hidden" name="remember" defaultValue="true" />
            
            
              <div>
                <label htmlFor="email-address" className="">
                Social Security Number (SSN)*
                </label>
                <input
                  id="ssn"
                  name="ssn"
                  type="text"
                  className=" block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Social Security Number "
                  value={ssn}
                  onChange={(e) => setSsn(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="">
                  Phone Number *
                </label>
                <input
                  id="pin"
                  name="pin"
                  type="number"
                  className=" block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Phone Number"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="">
                Password *
                </label>
                <input
                  id="password"
                  name="password"
                  type="text"
                  className=" block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="">
                  Address *
                </label>
                <input
                  id="confirm"
                  name="confirm"
                  type="text"
                  className=" block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="confirm Password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                />
              </div>
              
            
  
            <div className=''>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[--bg-color] bg-[--button-color] "
              >
                Submit
              </button>
             
            </div>
          </form>
        </div>
      </div>
      </div>
    )
}

export default Reg
