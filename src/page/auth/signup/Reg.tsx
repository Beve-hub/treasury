import React, { useState } from 'react';
import Logo from '../../../assets/logo2.png'
import { useNavigate } from 'react-router-dom';

const Reg = () => {
    
    
    const navigate = useNavigate();
  
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
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
          
         
        </div>
      </div>
      </div>
    )
}

export default Reg
