import { useState } from 'react';
import { BiMenu, BiWorld } from 'react-icons/bi';
import { AiOutlineClose } from "react-icons/ai";
import Logo from '../assets/logo1.png'
import { NavLink } from 'react-router-dom';
 
const Navbar = () => {
    const [nav, setNav ] = useState<boolean>(true);
    const flexBetween = 'flex items-center justify-between';

    const handleNav = (): void => {
        setNav(!nav)
    }
   

    return (
        <div className={`${flexBetween} fixed top-0 z-30 w-full bg-[--bg-color]`}>
            <div className='mx-auto w-[80rem] py-2 '>
                <div className='flex justify-between'>

                <div className='flex items-center'>
                <div onClick={handleNav} className='block md:hidden ml-4 '>
                 {!nav ? <AiOutlineClose size={30} color='white'  className='bg-[#12121220]' /> : <BiMenu color='white' size={30}  className='bg-bg-[#ffff]' /> }
                 </div>
                    <img src={Logo} alt='' className='w-[8rem]'/>
                </div> 
                
                <div className='item-center justify-between sm:flex hidden'>                

                    <ul className={`${flexBetween} mx-[8rem] w-[25rem] `}>
                        <li className='text-[--text-extra]'>
                            <NavLink to="/" >
                                Home
                            </NavLink>
                        </li>
                        <li className='text-[--text-extra]'>
                            <NavLink to="/about"  >
                                About Us
                                
                            </NavLink>
                        </li>
                        <li className='text-[--text-extra]'>
                            <NavLink to="/solution">
                                Solution
                               
                            </NavLink>
                        </li>
                        <li className='text-[--text-extra]'>
                            <NavLink to="/contact" >
                                Contact
                            </NavLink>
                        </li>
                    </ul>    
                </div>
                <div className='sm:flex hidden '>
                   <button  className='font-bold bg-[--button-color] h-10 mt-3 ml-20 px-4 rounded-md '>
                    <a href="/register">
                    Join Us
                    </a>                     
                   </button>
                </div>
                
                </div>
                <div className={!nav ? 'fixed right-0 top-0 w-[60%] h-full  border-r-gray-900 bg-[#989898] z-10 ease-in-out duration-500': 'fixed left-[-400%]'}>
                              

<ul className=' grid justify-center gap-6 font-medium mt-20'>
    <li className='text-[--text-extra] text-white'>
        <NavLink to="/" >
            Home
        </NavLink>
    </li>
    <li className='text-[--text-extra] text-white'>
        <NavLink to="/about"  >
            About Us            
        </NavLink>
    </li>
    <li className='text-[--text-extra] text-white'>
        <NavLink to="/solution" >
            Solution           
        </NavLink>
    </li>
    <li className='text-[--text-extra] text-white'>
        <NavLink to="/contact" >
            Contact
        </NavLink>
    </li>

    <li className='text-[--text-extra] text-white'>
        <NavLink to="/register" >
            Join Us
        </NavLink>
    </li>
</ul>                  

    
          
           
                </div>
            </div>
        </div>
    )
}

export default Navbar
