import React, { useState } from 'react';
import Logo from '../../../assets/logo2.png'
import { useNavigate } from 'react-router-dom';
import '../../../firebase';
import { auth, firestore } from "../../../firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";


const Register  = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [coun, setCoun] = useState('');
  const [ssn, setSsn] = useState('');
    const [pin, setPin] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState(''); 
    const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const navigate = useNavigate();

  const validate = (): boolean => {
    let errors: { [key: string]: string } = {};
    let isValid = true;

    if (!firstName.trim()) {
      errors.firstName = 'First Name is required';
      isValid = false;
    }

    if (!lastName.trim()) {
      errors.lastName = 'last Name is required';
      isValid = false;
    }

    if (!date.trim()) {
      errors.date = 'Date is required';
      isValid = false;
    }

    if (!address.trim()) {
      errors.address = 'Address is required';
      isValid = false;
    }

    if (!state.trim()) {
      errors.state = 'State is required';
      isValid = false;
    }

    if (!coun.trim()) {
      errors.coun = 'Country is required';
      isValid = false;
    }

    if (!ssn.trim()) {
      errors.ssn = 'state security is required';
      isValid = false;
    }

    if (!pin.trim()) {
      errors.pin = 'Transaction Pin is required';
      isValid = false;
    }


    if (!phoneNum.trim()) {
      errors.phoneNum = 'Phone Number is required';
      isValid = false;
    }
    

    if (!email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isValid = false;
    }
    if (password !== confirm) {
      errors.confirm = 'Passwords do not match';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (validate()) {
      setLoading(false);
      console.log("Passwords don't match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const userDocRef = doc(firestore, "users", userCredential.user.uid);
      await setDoc(userDocRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNum: phoneNum,
        date: date,
        address: address,
        state: state,
        coun: coun,
        ssn: ssn
      });
      navigate('/amount');
    } catch (error) {
      console.log(error);
    }
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
              {errors.firstName && <span className='text-red'>{errors.firstName}</span>}
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
              {errors.lastName && <span className='text-red'>{errors.lastName}</span>}
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
              {errors.email && <span className='text-red'>{errors.email}</span>}
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
              {errors.phoneNum && <span className='text-red'>{errors.phoneNum}</span>}
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
              {errors.date && <span className='text-red'>{errors.date}</span>}
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
                placeholder="enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {errors.address && <span className='text-red'>{errors.address}</span>}
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
              {errors.state && <span className='text-red'>{errors.state}</span>}
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
              {errors.coun && <span className='text-red'>{errors.coun}</span>}
            </div>
            <div className=" space-y-4" >
          <p className='font-bold text-xl my-4'>Security Info</p>
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
                {errors.ssn && <span className='text-red'>{errors.ssn}</span>}
              </div>

              <div>
                <label htmlFor="pin" className="">
                Transaction Pin*
                </label>
                <input
                  id="pin"
                  name="pin"
                  type="text"
                  className=" block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="enter transaction pin "
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                />
                {errors.pin && <span className='text-red'>{errors.pin}</span>}
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
                {errors.password && <span className='text-red'>{errors.password}</span>}
              </div>
              <div>
                <label htmlFor="email-address" className="">
                  Confirm Password *
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
                {errors.confirm && <span className='text-red'>{errors.confirm}</span>}
              </div>           
            
  
            
          </div>

          <div className=''>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[--bg-color] bg-[--button-color] " >
              {loading ? 'Loading...' : 'Submit'}
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

export default Register;
