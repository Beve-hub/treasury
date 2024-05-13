import {useEffect} from 'react'
import img from '../../../../assets/badge.svg'
import img2 from '../../../../assets/trade.svg'
import img3 from '../../../../assets/message.svg'
import img4 from '../../../../assets/settings.svg'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Values = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);
  
return (
  <section  className="min-h-[30rem]  py-20 flex  md:flex-row grid-col-2 items-center justify-center ">
  <div>
    <div className='max-w-[1100px] grid gap-2 md:grid-cols-2 '>
     
        <div className='bg-[white]  py-4'>
          <div className='p-6' data-aos="fade-up-right">      
          <div className='py-1 w-[10rem]  flex justify-center font-medium bg-[--button-color]' >
          <p className='text-[--text-extra]'>OUR VALUES</p>
          </div>
           <div>                           
          <p className='font-bold py-4 text-2xl text-[#121212]'>Our Commitment to your Prosperity</p>                    
          <p className='max-w-[30rem] text-light text-[#121212] text-balance md:text-balance'>Our values are based on three tenets: reliability, security, and performance. With our deep understanding of technology, economics, and finance, and by applying knowledge and innovation, we have created one of the
           most sophisticated and technologically advanced trading platforms in the industry.</p>
          </div>
      
        
          </div>
            
            <div className='flex justify-start ml-6 items-center' data-aos="fade-up-right">
               <button className='bg-[--bg-color] text-[white] w-[7rem] rounded-3xl  py-2 grid items-center justify-center hover:scale-110 transition-all duration-500 cursor-pointer'>
                Start Now 
              </button>
            </div>
              
         
       </div>

 
       <div className='   justify-center ' data-aos='zoom-in'>
        <div className='max-w-[90rem] mx-auto grid md:grid-cols-2 gap-4 px-8 py-10'>
        <div className=' drop-shadow-xl border-2 w-[15rem] py-4  rounded-lg transition-all duration-500 ' >
            <div className='max-w-[80rem] flex justify-start mx-2'>
                <img src={img} alt='' className='w-[35px] h-[35px] bg-[--hover-color] p-2 rounded-2xl text-[--text-extra]' />
            </div>                         
             <div className='mt-6'>
                             
                <div className='mx-2'>   
                <p className='text-md font-bold'>Fully Regulated</p>                             
                <p className='text-sm '>We Adhere to strictly to regulatory
                standard and are fully licensed and regulated
                across Europe, the middle East and Asia.</p>
                </div>
             </div>
        </div> 

        <div className=' drop-shadow-xl border-2 w-[15rem] py-4  rounded-lg transition-all duration-500 ' >
            <div className='max-w-[80rem] flex justify-start mx-2'>
                <img src={img2} alt='' className='w-[35px] h-[35px] bg-[--hover-color] p-2 rounded-2xl text-[--text-extra]' />
            </div>                         
             <div className='mt-6'>
                             
                <div className='mx-2'>   
                <p className='text-md font-bold'>Investment & Profit Growth</p>                             
                <p className='text-sm '>Because of our investor owned structure,
                 united treasury bank  success can only be measured
                  by your success.</p>
                </div>
             </div>
        </div> 

        <div className=' drop-shadow-xl border-2 w-[15rem] py-4  rounded-lg transition-all duration-500 ' >
            <div className='max-w-[80rem] flex justify-start mx-2'>
                <img src={img3} alt='' className='w-[35px] h-[35px] bg-[--hover-color] p-2 rounded-2xl text-[--text-extra]' />
            </div>                         
             <div className='mt-6'>
                             
                <div className='mx-2'>   
                <p className='text-md font-bold'>Customer Service</p>                             
                <p className='text-sm '>We are available to guide you and answer
                 any question you may have 24/7</p>
                </div>
             </div>
        </div> 

        <div className=' drop-shadow-xl border-2 w-[15rem] py-4  rounded-lg transition-all duration-500 ' >
            <div className='max-w-[80rem] flex justify-start mx-2'>
                <img src={img4} alt='' className='w-[35px] h-[35px] bg-[--hover-color] p-2 rounded-2xl text-[--text-extra]' />
            </div>                         
             <div className='mt-6'>
                             
                <div className='mx-2'>   
                <p className='text-md font-bold'>Security</p>                             
                <p className='text-sm '>We have built one of  the most sophisticated
                  security system  that have never been compromised.
                   Members records are kept confidential from third
                    parties.</p>
                </div>
             </div>
        </div> 

        

        </div>
         
        </div>
     
    </div>
  </div>
  </section>
    )
}

export default Values
