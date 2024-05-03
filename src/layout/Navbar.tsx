import { useState } from 'react';
import menu from '../assets/menu.svg'
import cancel from '../assets/cancel.svg'
import Logo from '../assets/logo1.png'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
 
const Navbar = () => {
    const [nav, setNav ] = useState<boolean>(true);
    const flexBetween = 'flex items-center justify-between';
    const navigate = useNavigate();

    const handleNav = (): void => {
        setNav(!nav)
    }
   

    return (
        <div className={`${flexBetween} fixed top-0 z-30 w-full bg-[--bg-color]`}>
            <div className='mx-auto w-[80rem] py-2 '>
                <div className='flex justify-between'>

                <div className='flex items-center'>
                <div onClick={handleNav} className='block md:hidden ml-4 '>
                 {!nav ? <img src={cancel} alt=''  className='bg-[#fff] p-1' /> : <img src={menu} alt=''  className='bg-[#fff] p-1' /> }
                 </div>
                 <div>
                 <NavLink to='/'>
                  <img src={Logo} alt='' className='w-[9rem] hover:scale-105'/>
                  </NavLink>
                 </div>
                  
                    
                </div> 
                
                <div className='item-center justify-between sm:flex hidden'>                

                    <ul className={`${flexBetween} mx-[8rem] w-[25rem] `}>
                        <li className='text-[--text-extra] transition duration-500 hover:scale-110 cursor-pointer'>
                            <NavLink to="/" >
                                Home
                            </NavLink>
                        </li>
                        <li className='text-[--text-extra] transition duration-500 hover:scale-110 cursor-pointer'>
                            <NavLink to="/about"  >
                                About Us
                                
                            </NavLink>
                        </li>
                        <li className='text-[--text-extra] transition duration-500 hover:scale-110 cursor-pointer'>
                            <NavLink to="/solution">
                                Solution
                               
                            </NavLink>
                        </li>
                        <li className='text-[--text-extra] transition duration-500 hover:scale-110 cursor-pointer'>
                            <NavLink to="/contact" >
                                Contact
                            </NavLink>
                        </li>
                    </ul>    
                </div>
                <div className='sm:flex hidden '>
                   <button onClick={() => navigate('/register')}  className='font-bold bg-[--button-color] h-10 mt-3 ml-20 px-4 rounded-md  transition duration-500 hover:scale-110 hover:bg-blue-600 hover:text-white cursor-pointer'>
                    
                    Join Us
                                     
                   </button>
                </div>
                
                </div>
                <div className={!nav ? 'fixed right-0 top-0 w-[60%] h-full  border-r-gray-900 bg-[#989898] z-10 ease-in-out duration-500': 'fixed left-[-400%]'}>
                              

<ul className=' grid justify-center gap-6 font-medium mt-20'>
    <li className='text-[--text-extra] text-white transition duration-500 hover:scale-110 cursor-pointer'>
        <NavLink to="/" >
            Home
        </NavLink>
    </li>
    <li className='text-[--text-extra] text-white transition duration-500 hover:scale-110 cursor-pointer'>
        <NavLink to="/about"  >
            About Us            
        </NavLink>
    </li>
    <li className='text-[--text-extra] text-white transition duration-500 hover:scale-110 cursor-pointer'>
        <NavLink to="/solution" >
            Solution           
        </NavLink>
    </li>
    <li className='text-[--text-extra] text-white transition duration-500 hover:scale-110 cursor-pointer'>
        <NavLink to="/contact" >
            Contact
        </NavLink>
    </li>

    <li className='text-[--text-extra] text-white transition duration-500 hover:scale-110 cursor-pointer'>
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
