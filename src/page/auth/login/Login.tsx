import React, { useState } from 'react';
import Logo from '../../../assets/logo2.png'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          <h2 className="mt-6 text-start text-3xl font-extrabold text-gray-900">Login</h2>
          <p className='max-w-[16rem] py-2'>Please provide your information to continue</p>
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
                required
                className=" block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="">
                Password *
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className=" block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-regular text-blue-600 ">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[--bg-color] bg-[--button-color] "
            >
              Submit
            </button>
            <div className="text-sm flex justify-center py-2">
              <p>Don't have an account?  </p>
              <a href="/register" className="font-bold text-blue-900 text-center">
                Register
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
