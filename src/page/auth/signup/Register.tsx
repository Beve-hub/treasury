import React, { useEffect, useRef, useState } from 'react';
import Logo from '../../../assets/logo1.png'
import IMG2 from '../../../assets/open-account.webp'
import { NavLink, useNavigate } from 'react-router-dom';
import { auth, firestore } from "../../../firebase"
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { doc, setDoc, getDocs, collection, query, where } from "firebase/firestore";
import IMG from '../../../assets/user_img.png'
import edit from '../../../assets/edit.svg'
import Loaders from '../../../component/Loaders';
import ReactFlagsSelect from "react-flags-select";
import useStorage from '../../../hooks/useStorage';




interface Errors {
  firstName?: string;  
  lastName?: string;    
    email?: string;
    phoneNum?: string; 
    maritalStatus?: string;   
    password?: string;
    confirm?: string;
  date?: string;
  address?: string;
  state?: string;
  coun?: string;  
  kinFirstName?: string;  
  kinLastName?: string;    
    kinEmail?: string;
    kinPhoneNum?: string; 
    kinMaritalStatus?: string;      
  kinAddress?: string;
  kinState?: string;
  kinCoun?: string;  
  pin?: string;
  occupation?: string;
  maidenName?: string;
  profileImage?: File;
  validId?: File;
}

const Register  = () => { 
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');  
  const [lastName, setLastName] = useState('');   
  const [maidenName, setMaidenName] = useState('');   
  const [maritalStatus, setMaritalStatus] = useState('');  
  const [occupation, setOccupation] = useState('');   
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');    
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState(''); 
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [coun, setCoun] = useState(''); 
  const [kinFirstName, setKinFirstName] = useState('');  
  const [kinLastName, setKinLastName] = useState('');   
   const [kinMaritalStatus, setKinMaritalStatus] = useState('');  
  const [kinEmail, setKinEmail] = useState('');
  const [kinPhoneNum, setKinPhoneNum] = useState('');    
  const [kinAddress, setKinAddress] = useState('');
  const [kinState, setKinState] = useState('');
  const [kinCoun, setKinCoun] = useState('');  
  const [pin, setPin] = useState(''); 
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [validId, setValidId] = useState<File | null>(null);

  const profileInputRef = useRef<HTMLInputElement>(null);
  const validInputRef = useRef<HTMLInputElement>(null);
  const {startUpload} = useStorage();  
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  


  useEffect(() => {    
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

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

    if (!kinFirstName.trim()) {
      errors.kinFirstName = 'Next of Kin First Name is required';
      isValid = false;
    } 

    if (!kinLastName.trim()) {
      errors.kinLastName = 'Next of Kin Last Name is required';
      isValid = false;
    } 

    if (!maidenName.trim()) {
      errors.maidenName = 'Madien Name is required';
      isValid = false;
    } 
    if (!maritalStatus.trim()) {
      errors.maritalStatus = 'Marital Status is required';
      isValid = false;
    } 
    if (!kinMaritalStatus.trim()) {
      errors.kinMaritalStatus = 'Next of Kin Marital Status is required';
      isValid = false;
    } 

    if (!occupation.trim()) {
      errors.occupation = 'Occupation is required';
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

    if (!kinPhoneNum.trim()) {
      errors.kinPhoneNum= 'Next of Kin Phone Number is required';
      isValid = false;
    }
    

    if (!kinEmail .trim()) {
      errors.kinEmail  = 'Next of Kin Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.kinEmail = 'Next of Kin Email is invalid';
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
    
    if (!kinAddress.trim()) {
      errors.kinAddress = 'Next of Kin Address is required';
      isValid = false;
    }

    if (!kinState.trim()) {
      errors.kinState = 'Next of Kin State is required';
      isValid = false;
    }

    if (!kinCoun.trim()) {
      errors.kinCoun = 'Next of Kin Country is required';
      isValid = false;
    }   

    if (!pin.trim()) {
      errors.pin = 'Transaction Pin is required';
      isValid = false;
    }

  
    setErrors(errors);
    return isValid;
  };


  const generateAccountNumber = async (): Promise<string> => {
    let isUnique = false;
    let accountNumber = '';
    while (!isUnique) {
      accountNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();
      const q = query(collection(firestore, "users"), where("accountNumber", "==", accountNumber));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        isUnique = true;
      }
    }
    return accountNumber;
  };

  const handleProfileImage = () => {
    if (profileInputRef.current) {
      profileInputRef.current.click();      
    }
  };

  const handleValid = () => {
    if (validInputRef.current) {
      validInputRef.current.click();      
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedImage = URL.createObjectURL(files[0]);
      setProfileImage(selectedImage);       
    }
    
  };

   const handleFileValid = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
     setValidId(files[0]);  
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (validate()) {
      try {
        const accountNumber = await generateAccountNumber();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await sendEmailVerification(user);
        alert("Registration successful! A verification email has been sent to your email address.");
        if (userCredential && userCredential.user) {
          sessionStorage.setItem('userId', userCredential.user.uid);
          const userDocRef = doc(firestore, "users", userCredential.user.uid);
          await setDoc(userDocRef, {
            firstName,
            lastName,
            maidenName,
            maritalStatus,
            email,
            phoneNum,
            password,
            occupation,
            date,
            address,
            state,
            coun,
            pin,
            kinFirstName,  
            kinLastName,    
            kinEmail,
            kinPhoneNum,
            kinMaritalStatus,   
            kinAddress,
            kinState,
            kinCoun,
            accountNumber,
          });
        }

        if (validId) {        
          startUpload(validId); 
        }
        setValidId(null);
        navigate('/');
      } catch (error) {
        console.log(error);
      }
      alert('Registration Completed verify your email for access');
    }
    setLoading(false);
  };

  return (
    <div className='grid justify-center items-center'>
     { loading ? <div className='flex justify-center items-center'>
        <Loaders  />
      </div> : 
      (
      <div>
     <div className=' bg-[#ffff] w-screen fixed grid justify-start'>
        <a href='/'>
          <img src={Logo} alt='' className='w-[10rem]' />
        </a>               
      </div>
        <div className='mx-[1rem]'>
          <div className=' w-screen md:flex hidden'>
            <div className='bg-[--bg-color] w-[50rem] h-[30rem] justify-center items-center'>
                <div className='h-[10rem] grid justify-center items-center mt-[10rem]'>
                  <div>
                  <p className='text-[2rem] font-bold text-[--text-extra]'>Essential banking accounts</p>
                  <p className='text-16 text-[--text-extra]'>From the bank obsessed with your success™.</p>
                  </div>   
                  <div>
                  <button className='bg-[--button-color] px-6 py-2 rounded-full'>
                  Apply
                </button>
                  </div> 
                </div>
                
            </div>
            <img src={IMG2} alt='' className='w-[50rem] h-[30rem] '/>
          </div>


          <div className="pt-[7rem] w-screen grid items-center justify-center bg-gray-50 sm:px-6 lg:px-8">
        <div className=" w-full ">        
         
          
          <form className=" space-y-6 mx-[10rem]" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />

            <div >
            <h2 className="mt-6 text-start text-3xl font-extrabold text-gray-900">Get Started</h2>
            <p className='text-balance py-2 '>We're required by law to ask your name, address, date of birth and other information to help us identify you.</p>


              </div>

            <div className='grid justify-center items-center mx-auto'>
              <div className='grid justify-center items-center gap-4'>
              <label htmlFor="profileImage"  className='font-semibold'>Upload  Profile Image</label>
               {/* Conditionally render uploaded image or default image */}
              {profileImage ? (
                <div className='flex'>
          <img
          src={profileImage}
          alt=""
            className="w-[6rem] h-[6rem] rounded-full "
            onClick={handleProfileImage}
          />
          <div onClick={handleProfileImage} className='absolute mt-[4.2rem] ml-[3.5rem]'><img src={edit} alt='' className='w-[1.8rem]' /></div>
          </div>
        ) : (
          <img
            src={IMG} alt="" className="w-[8rem]" onClick={handleProfileImage} /> )}
   
          <input
          type="file"
          id="profileImage"
          name="profileImage"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
          ref={profileInputRef}/>
               </div>

            
              </div>
              
              
              <div className="grid gap-2 mx-auto">
              <p className='font-semibold text-xl'>Personal Information</p>
              <div className='space-y-4 grid md:grid-cols-2 items-center gap-2'>

                <div className='grid'>
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Full name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {errors.firstName && <span className='text-[#f30000] text-sm'>{errors.firstName}</span>}
                </div> 
                <div className='grid'>
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {errors.lastName && <span className='text-[#f30000] text-sm'>{errors.lastName}</span>}
                </div>  
                <div className='grid'>
                  <label htmlFor="maidenName">Maiden Name *</label>
                  <input
                    id="maidenName"
                    name="maidenName"
                    type="text"
                    className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="maiden name"
                    value={maidenName}
                    onChange={(e) => setMaidenName(e.target.value)}
                  />
                  {errors.maidenName&& <span className='text-[#f30000] text-sm'>{errors.maidenName}</span>}
                </div>  

                <div className='grid'>
                <label htmlFor="email-address">Email address *</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span className='text-[#f30000] text-sm'>{errors.email}</span>}
              </div>

              <div className='grid'>
                <label htmlFor="phoneNum">Phone Number *</label>
                <input
                  id="phoneNum"
                  name="phoneNum"
                  type="text"
                  className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Phone Number"
                  value={phoneNum}
                  onChange={(e) => setPhoneNum(e.target.value)}
                />
                {errors.phoneNum && <span className='text-[#f30000] text-sm'>{errors.phoneNum}</span>}
              </div> 

              <div className='grid'>
              <label htmlFor="date">Date of Birth *</label>
              <input
                id="date"
                name="date"
                type="date"
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="DD MM YY"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              {errors.date && <span className='text-[#f30000] text-sm'>{errors.date}</span>}
            </div>
            <div className='grid'>
                   <label htmlFor="maritalStatus">Marital Status *</label>
                   <select
                       id="maritalStatus"
                       name="maritalStatus"
                       className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       value={maritalStatus}
                      onChange={(e) => setMaritalStatus(e.target.value)}
                   >     
                       <option>status</option>                 
                       <option>Single</option>
                       <option>Married</option>                      
                   </select>   
                   {errors.maritalStatus && <span className='text-[#f30000] text-sm'>{errors.maritalStatus}</span>}                
               </div>   

                <div className='grid'>
              <label htmlFor="occupation">Occupation *</label>
              <input
                id="occupation"
                name="occupation"
                type="text"               
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter occupation"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
              />
              {errors.occupation && <span className='text-[#f30000] text-sm'>{errors.occupation}</span>}
                 </div>
                <div className='grid'>
              <label htmlFor="address">Home Address *</label>
              <input
                id="address"
                name="address"
                type="text"               
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter home address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {errors.address && <span className='text-[#f30000] text-sm'>{errors.address}</span>}
                 </div>

                 <div className='grid'>
              <label htmlFor="state">State *</label>
              <input
                id="state"
                name="state"
                type="text"
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              {errors.state && <span className='text-[#f30000] text-sm'>{errors.state}</span>}
                </div>
            <div className='grid'>
              <label htmlFor="coun">Country *</label>
              <ReactFlagsSelect
                id="coun"                               
                selected={coun}
                onSelect={(code) => setCoun(code)}  
                placeholder="Select Country"   
                searchable  
                searchPlaceholder="Search countries"                         
              />
              {errors.coun && <span className='text-[#f30000] text-sm'>{errors.coun}</span>}
            </div> 
                
            <div className='grid'>
  <label htmlFor="pin">Transaction Pin*</label>
  <input
    id="pin"
    name="pin"
    type="text"
    className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter transaction pin"
    value={pin}
    onChange={(e) => setPin(e.target.value)}
  />
  {errors.pin && <span className='text-[#f30000] text-sm'>{errors.pin}</span>}
       </div>   

     <div className='grid'>
    <label htmlFor="password">Password *</label>
    <input
      id="password"
      name="password"
      type="password"
      className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    {errors.password && <span className='text-[#f30000] text-sm'>{errors.password}</span>}
  </div>
  <div className='grid'>
    <label htmlFor="confirm">Confirm Password *</label>
    <input
      id="confirm"
      name="confirm"
      type="password"
      className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Confirm Password"
      value={confirm}
      onChange={(e) => setConfirm(e.target.value)} 
    />
    {errors.confirm && <span className='text-[#f30000] text-sm'>{errors.confirm}</span>}
    </div> 


    <p className='font-semibold text-xl mt-6'>Next of Kin Information</p> 
                <div className='grid'>
              <label htmlFor="kinFirstName">Kin First Name *</label>
              <input
                id="kinFirstName"
                name="kinFirstName"
                type="text"
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Kin First Name"
                value={kinFirstName}
                onChange={(e) => setKinFirstName(e.target.value)}
              />
              {errors.kinFirstName && <span className='text-[#f30000] text-sm'>{errors.kinFirstName}</span>}
                </div>

                <div className='grid'>
              <label htmlFor="kinLastName">Kin Last Name *</label>
              <input
                id="kinLastName"
                name="kinLastName"
                type="text"
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Kin Last Name"
                value={kinLastName}
                onChange={(e) => setKinLastName(e.target.value)}
              />
              {errors.kinLastName && <span className='text-[#f30000] text-sm'>{errors.kinLastName}</span>}
                </div>

                <div className='grid'>
              <label htmlFor="kinEmail">Kin Email*</label>
              <input
                id="kinEmail"
                name="kinEmail"
                type="text"
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Kin Email"
                value={kinEmail}
                onChange={(e) => setKinEmail(e.target.value)}
              />
              {errors.kinEmail && <span className='text-[#f30000] text-sm'>{errors.kinEmail}</span>}
                </div>

                <div className='grid'>
              <label htmlFor="kinPhoneNum">Kin Phone Number *</label>
              <input
                id="kinPhoneNum"
                name="kinPhoneNum"
                type="text"
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Kin Phone Number"
                value={kinPhoneNum}
                onChange={(e) => setKinPhoneNum(e.target.value)}
              />
              {errors.kinPhoneNum && <span className='text-[#f30000] text-sm'>{errors.kinPhoneNum}</span>}
                </div>

                <div className='grid'>
                   <label htmlFor="kinMaritalStatus"> Kin Marital Status *</label>
                   <select
                       id="kinMaritalStatus"
                       name="kinMaritalStatus"
                       className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       value={kinMaritalStatus}
                      onChange={(e) => setKinMaritalStatus(e.target.value)}
                   >     
                       <option>Kin Marital Status</option>                 
                       <option>Single</option>
                       <option>Married</option>                      
                   </select>   
                   {errors.kinMaritalStatus && <span className='text-[#f30000] text-sm'>{errors.kinMaritalStatus}</span>}                
               </div> 

                <div className='grid'>
              <label htmlFor="kinAddress">Kin Address*</label>
              <input
                id="kinAddress"
                name="kinAddress"
                type="text"
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Kin Address"
                value={kinAddress}
                onChange={(e) => setKinAddress(e.target.value)}
              />
              {errors.kinAddress && <span className='text-[#f30000] text-sm'>{errors.kinAddress}</span>}
                </div>

                <div className='grid'>
              <label htmlFor="kinState">Kin State *</label>
              <input
                id="kinState"
                name="kinState"
                type="text"
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Kin State"
                value={kinState}
                onChange={(e) => setKinState(e.target.value)}
              />
              {errors.kinState && <span className='text-[#f30000] text-sm'>{errors.kinState}</span>}
                </div>

              

                  <div className='grid'>
              <label htmlFor="kinCoun">Kin Country *</label>
              <ReactFlagsSelect
                id="kinCoun"                               
                selected={kinCoun}
                onSelect={(code) => setKinCoun(code)}  
                placeholder="Select Country"   
                searchable  
                searchPlaceholder="Search countries"                         
              />
              {errors.kinCoun && <span className='text-[#f30000] text-sm'>{errors.kinCoun}</span>}
            </div>     
              </div>


              </div>
                          
        
                
              
     
     
     <div className='grid justify-center items-center mt-10'>
     <div className='grid justify-center items-center gap-4'>
     <label htmlFor='validId' className='font-semibold text-medium'>Upload  Valid ID</label>
     {validId ? (
       <div className='flex'>
     <img
     src={URL.createObjectURL(validId)}
     alt=""
     className="w-[20rem] h-[10rem]   border-dashed border-2 border-sky-900"     
     onClick={handleValid}
     />          
     </div>
     ) : (
     <div onClick={handleValid} className='w-[20rem] h-[10rem] grid justify-center items-center border-dashed border-2 border-sky-200 '>
     <p>click to add image</p>
     </div> )}

     <input
     type="file"
     id="validId"
     name="validId"
     accept="image/*"
     onChange={handleFileValid}
     style={{ display: 'none' }}
     ref={validInputRef}/>
      </div>

     </div>
 
            
            <div className=' justify-center grid'>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-[--button-color] ">
                 Submit
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
      </div>
      )}
      
    </div>
  )
}

export default Register;
