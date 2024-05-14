import React, { useState } from 'react';
import Logo from '../../../assets/logo2.png'
import  "../../../firebase"
import { auth}  from "../../../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner'


interface Errors {
  email?: string;
  password?: string;
  
}
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  
  const navigate = useNavigate();


  const validate = () => {
    const errors: Errors = {};
    let isValid = true;

    if (!email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
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
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        if (userCredentials && userCredentials.user) {
          sessionStorage.setItem('userId', userCredentials.user.uid);
          // Assuming 'navigate' is a function to navigate to a different page
          navigate(`/overview`, { state: { userId: userCredentials.user.uid } });
          
        }
      }
    } catch (error) {
      console.error("Error signing in:", error);
    } finally {
      setLoading(false);
    }
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
              {errors.email && <span className='text-[#f30000] text-sm'>{errors.email}</span>}
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
              {errors.password && <span className='text-[#f30000] text-sm'>{errors.password}</span>}
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
              {loading ? <Oval  visible={true}  height="20" width="20" color="#ffff"  ariaLabel="oval-loading"  wrapperStyle={{}}  wrapperClass=""  />  : 'Submit'}
            </button>
            <div className="text-sm flex justify-center py-2">
              <p>Don't have an account?  </p>
              <NavLink to="/register" className="font-bold text-blue-900 text-center">
                Register
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
