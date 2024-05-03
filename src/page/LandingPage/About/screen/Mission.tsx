import {useEffect} from 'react'
import img from '../../../../assets/image_6.png'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Mission = () => {

    useEffect(() => {
        AOS.init({duration: 2000})
      }, []);
      
    return (
      <section  className="min-h-[30rem]  py-20 flex  md:flex-row grid-col-2 items-center justify-center ">
      <div>
        <div className='max-w-[1100px] flex gap-2 md:grid-cols-2 '>
         
            <div className='bg-[white]  py-4'>
              <div className='p-6' data-aos="fade-up-right">      
              <div className='py-1 w-[10rem]  flex justify-center font-medium bg-[--button-color]' >
              <p >Our Mission</p>
              </div>
               <div>                           
              <p className='font-bold py-4 text-2xl text-[#121212]'>Empowering Financial Freedom.</p>                    
              <p className='max-w-[30rem] mt-2 text-light text-[#121212] text-balance md:text-balance'>Empowering investors by providing them an avenue for controlling their financial future by providing outstanding service, innovation,
               and expertise in the custody of alternative and traditional assets.</p>
              </div>
          
            
              </div>
                
                <div className='flex justify-start ml-6 items-center' data-aos="fade-up-right">
                   <button className='bg-[--bg-color] text-[white] w-[7rem] rounded-3xl  py-2 grid items-center justify-center hover:scale-110 transition-all duration-500 cursor-pointer'>
                    Start Now 
                  </button>
                </div>
                  
             
           </div>
  
     
           <div className='bg-[--hover-color] h-[30rem] w-[30rem]  justify-center sm:grid hidden' data-aos='zoom-in'>
             <img src={img} alt="" className='w-[25rem] h-[25rem] mt-8 hover:scale-110 transition-all duration-500 cursor-pointer' />
            </div>
         
        </div>
      </div>
      </section>
    )
}

export default Mission
