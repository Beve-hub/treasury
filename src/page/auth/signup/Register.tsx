import React, { useState } from 'react';
import Logo from '../../../assets/logo2.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { auth, firestore } from "../../../firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { Oval } from 'react-loader-spinner'


interface Errors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNum?: string;
  date?: string;
  address?: string;
  state?: string;
  coun?: string;
  ssn?: string;
  pin?: string;
  password?: string;
  confirm?: string;
}

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
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  
  const navigate = useNavigate();

  const validate = (): boolean => {
    const errors: Errors = {};
    let isValid = true;

    if (!firstName.trim()) {
      errors.firstName = 'First Name is required';
      isValid = false;
    }

    if (!lastName.trim()) {
      errors.lastName = 'Last Name is required';
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
      errors.ssn = 'Social Security Number is required';
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
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        if (userCredential && userCredential.user) {
          sessionStorage.setItem('userId', userCredential.user.uid);
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
          ssn: ssn,
          pin: pin,
          password: password,
        });
        navigate('/amount');
        }
        
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
  };

  return (
    <div>
      <div className='p-8 bg-[#ffff] w-screen fixed grid justify-start'>
        <a href='/'>
          <img src={Logo} alt='' className='w-[10rem]' />
        </a>               
      </div>
      <div className="pt-[7rem] w-screen grid items-center justify-center bg-gray-50 sm:px-6 lg:px-8">
        <div className=" w-full ">        
          <div >
            <h2 className="mt-6 text-start text-3xl font-extrabold text-gray-900">Register</h2>
            <p className='max-w-[16rem] py-2'>Join us today and enjoy our offers</p>
          </div>
          <p className='font-semibold'>Personal Details</p>
          <form className=" space-y-6 " onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="flex gap-2">
              <div>
                <label htmlFor="firstName">First Name *</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="block w-[9.5rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && <span className='text-[#f30000] text-sm'>{errors.firstName}</span>}
              </div>
              <div>
                <label htmlFor="lastName">Last Name *</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"                
                  className="block w-[9.9rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && <span className='text-[#f30000] text-sm'>{errors.lastName}</span>}
              </div>
            </div>
            <div>
              <label htmlFor="email-address">Email address *</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className='text-[#f30000] text-sm'>{errors.email}</span>}
            </div>
            <div>
              <label htmlFor="phoneNum">Phone Number *</label>
              <input
                id="phoneNum"
                name="phoneNum"
                type="text"
                className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Phone Number"
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
              />
              {errors.phoneNum && <span className='text-[#f30000] text-sm'>{errors.phoneNum}</span>}
            </div>
            <div>
              <label htmlFor="date">Date of Birth *</label>
              <input
                id="date"
                name="date"
                type="date"
                className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="DD MM YY"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              {errors.date && <span className='text-[#f30000] text-sm'>{errors.date}</span>}
            </div>
            <div>
              <label htmlFor="address">Address *</label>
              <input
                id="address"
                name="address"
                type="text"               
                className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {errors.address && <span className='text-[#f30000] text-sm'>{errors.address}</span>}
            </div>
            <div>
              <label htmlFor="state">State *</label>
              <input
                id="state"
                name="state"
                type="text"
                className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              {errors.state && <span className='text-[#f30000] text-sm'>{errors.state}</span>}
            </div>
            <div>
              <label htmlFor="coun">Country *</label>
              <input
                id="coun"
                name="coun"
                type="text"
                className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Country"
                value={coun}
                onChange={(e) => setCoun(e.target.value)}
              />
              {errors.coun && <span className='text-[#f30000] text-sm'>{errors.coun}</span>}
            </div>
            <div className="space-y-4">
              <p className='font-bold text-xl my-4'>Security Info</p>
              <div>
                <label htmlFor="ssn">Social Security Number (SSN)*</label>
                <input
                  id="ssn"
                  name="ssn"
                  type="text"
                  className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Social Security Number "
                  value={ssn}
                  onChange={(e) => setSsn(e.target.value)}
                />
                {errors.ssn && <span className='text-[#f30000] text-sm'>{errors.ssn}</span>}
              </div>
              <div>
                <label htmlFor="pin">Transaction Pin*</label>
                <input
                  id="pin"
                  name="pin"
                  type="text"
                  className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter transaction pin"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                />
                {errors.pin && <span className='text-[#f30000] text-sm'>{errors.pin}</span>}
              </div>
              <div>
                <label htmlFor="password">Password *</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <span className='text-[#f30000] text-sm'>{errors.password}</span>}
              </div>
              <div>
                <label htmlFor="confirm">Confirm Password *</label>
                <input
                  id="confirm"
                  name="confirm"
                  type="password"
                  className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)} 
                />
                {errors.confirm && <span className='text-[#f30000] text-sm'>{errors.confirm}</span>}
              </div>           
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-[--button-color] ">
                {loading ? <Oval  visible={true}  height="20" width="20" color="#ffff"  ariaLabel="oval-loading"  wrapperStyle={{}}  wrapperClass=""  />  : 'Submit'}
              </button>
              <div className="text-sm flex justify-center py-2">
                <p>Already have an account? </p>
                <NavLink to="/login" className="font-bold text-blue-900 text-center">
                  Login
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;
