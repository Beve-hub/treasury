import React, { useState } from 'react';
import Logo from '../../../assets/logo1.png'
import  "../../../firebase"
import {  getAuth, sendPasswordResetEmail } from 'firebase/auth';
import {  useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner'



interface Errors {
    email?: string;
    password?: string;
    
  }

const Recover = () => {
    const [email, setEmail] = useState('');        
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Errors>({});
    
    const navigate = useNavigate();
  
  
    const validate = () => {
      const errors: Errors = {};
      let isValid = true;
  
      if (!email.trim()) {
        errors.email = 'user not found!!';
        isValid = false;
      }
  
    
  
      setErrors(errors);
      return isValid;
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
    
      try {
        if (validate()) {
          const auth = getAuth();
          await sendPasswordResetEmail(auth, email);
          navigate('/login');
          alert('recovery link has been sent to your email')
        } else{
            alert('no user found')
        }
      } catch (error) {
        console.error("Error signing in:", error);
      } finally {
        setLoading(false);
        
      }
    };
    
  
    return (
      <div className='bg-[--text-extra]'>
  
          <div className='p-10 bg-[--text-extra] grid justify-start'>
             <a href='/'>
               <img src={Logo} alt='' className='w-[10rem]' />
            </a>               
          </div>
  
      <div className=" w-screen grid items-center justify-center bg-gray-50 sm:px-6 lg:px-8">
        
        <div className=" w-full bg-[--text-extra]">        
          <div >
            <h2 className="mt-6 text-start text-3xl font-extrabold text-gray-900">Password Recovery</h2>
            <p className='max-w-[16rem] py-2'>Let us help you recover your account.</p>
          </div>
          <form className=" space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="grid gap-4">
              <div>
                <label htmlFor="email-address" className="">
                Email address *
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"                 
                  className=" block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span className='text-[#f30000] text-sm'>{errors.email}</span>}
              </div>
              
            </div>
  
            
  
            <div>
              <button
                type="submit"
                className="w-full text-[--text-extra] flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-[--button-color] " >
                {loading ? <Oval  visible={true}  height="20" width="20" color="#ffff"  ariaLabel="oval-loading"  wrapperStyle={{}}  wrapperClass=""  />  : 'Submit'}
              </button>
             
            </div>
          </form>
        </div>
      </div>
      </div>
    );
  };

export default Recover
