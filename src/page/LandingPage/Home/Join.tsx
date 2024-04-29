import React from 'react'
import {useEffect} from 'react'
import img from '../../../assets/image_5.png'
import AOS from 'aos'
import 'aos/dist/aos.css'



const Join = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
      }, []);

    return (
          <section  className="min-h-[10rem] bg-[--button-color] py-20 flex  md:flex-row grid-col-2 items-center justify-center ">
        <div>
          <div className='max-w-[1100px] grid justify-between gap-20 md:grid-cols-2 '>             
                       
          <div className=' py-4'>
             
            <p className='font-bold ml-8 max-w-[26rem] text-2xl text-[#121212] text-balance' data-aos="zoom-in">Sign up for a new account in minutes.</p>                    
            
                       
             
           
         </div>

         <div className='flex  ml-6 items-center' data-aos="fade-up-left">
                 <button className='bg-[--bg-color] text-[white] w-[10rem]  py-2  hover:scale-110 transition-all duration-500 cursor-pointer'>
                  Join Us
                </button>
              </div>
         
       
          </div>
       </div>
    </section>
    )
}

export default Join
