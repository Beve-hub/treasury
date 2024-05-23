import { useEffect, useState } from 'react';
import IMG from '../../../assets/image_background.png'
import IMG2 from '../../../assets/image_background3.png'
import IMG3 from '../../../assets/image_background2.png'
import green from '../../../assets/greenarrow.svg'
import yellow from '../../../assets/yellow.svg'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { NavLink } from 'react-router-dom';


const images = [
    {image: IMG,
     title: 'Welcome To Anthstone Bank',
     description: 'Our online banking services are even moire easier to use, Join Us Today '   
    },
    {image: IMG2,
        title: 'Do you need Financing?',
        description: 'with Anthstone Bank, you have the freedom to borrow and repay flexibly. '   
       },
       {image: IMG3,
        title: 'Be in control of your investment',
        description: 'Achieve your financial goals with us  in savings and investment at Anthstone Bank. '   
       },
    ];
const HeroPage= () => {
    const [current, setCurrent] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
          setCurrent((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 5000);
    
        return () => clearInterval(interval);
      }, []);


    useEffect(() => {
        AOS.init({duration: 2000})
      }, []);

    return (
        <section id="home" className="relative h-[50rem]  w-screen overflow-hidden">
            <div className="relative h-screen mt-[5rem]">
                {images.map((items, index) => (
                    <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                      index === current ? 'opacity-100' : 'opacity-0'
                    }`}
              style={{
                  
                backgroundImage: `url(${items.image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                overflow: 'hidden'                
              }}>     
  
              <div className='grid justify-center items-center  h-[40rem] mx-auto'>
              <div className=''>
                      <div className='' data-aos='fade-right'>
                          <h1 className='text-white text-balance font-bold text-[3rem] '>{items.title}</h1>
                          <p className='text-white text-balance  text-md py-2'>{items.description}</p>
                      </div>
                     
                     <div className='mx-auto flex'>
                     <button  className='mr-2 items-center flex font-semibold bg-[--bg-color] h-10 mt-3 px-4 rounded-md  transition duration-500 hover:scale-110 hover:bg-blue-600 hover:text-white cursor-pointer text-[--text-extra]' data-aos='zoom-in'>
                      <NavLink to='/register' >
                      Get Started                      
                      </NavLink>    
                      <img src={yellow} alt='' className='w-[1.5rem]'/>                 
                     </button>
                     <button  className='font-bold flex items-center bg-[--button-color] h-10 mt-3 px-4 rounded-md  transition duration-500 hover:scale-110 hover:bg-blue-600 hover:text-white cursor-pointer text-[--text-color]' data-aos='zoom-in'>
                      <NavLink to='/login' >
                      Login
                      </NavLink>
                      <img src={green} alt='' className='w-[1.5rem]'/>                      
                     </button>
                     </div>
                     
                  </div>
              </div>
  
                 </div>
                )) }
            </div>
        </section>
    )
}

export default HeroPage
