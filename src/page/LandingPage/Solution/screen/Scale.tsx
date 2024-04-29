import {useEffect} from 'react'
import img from '../../../../assets/image_8.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Scale = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
      }, []);
      
    return (
      <section  className="min-h-[30rem]  py-20 flex  md:flex-row grid-col-2 items-center justify-center ">
      <div>
        <div className='max-w-[1100px] flex gap-8 md:grid-cols-2 '>

        <div className=' justify-center sm:grid hidden' data-aos='zoom-in'>
             <img src={img} alt="" className='w-[35rem] h-[25rem] mt-8 hover:scale-110 transition-all duration-500 cursor-pointer' />
            </div>
                  
            <div className='bg-[white]  py-4'>
              <div className='p-6' data-aos="fade-up-right">      
              <div className='py-1 w-[10rem]  flex justify-center font-medium bg-[--button-color]' >
              <p >Security & Scalability</p>
              </div>
               <div>                           
              <p className='font-bold py-4 text-2xl text-[#121212]'>A system you can rely on</p>                    
              <p className='max-w-[30rem] text-light text-[#121212] text-balance md:text-balance'>Security team Safeguards your account and prospective 
              costumer’s data as you scale. Rest assured that your account will 
              run securely and smoothly on Guaranty Wealth.</p>

              <p className='max-w-[30rem] py-2 text-light text-[#121212] text-balance md:text-balance'>With our professional and technical expertise, United Treasury
               Bank has always been rated as the leading company with a high standard
                in security and stability. With a strong assurance our system that can 
                keep up with your growth and will always prioritize the security and 
                stability of your account.
              </p>
              <p className='max-w-[30rem] py-2 text-light text-[#121212] text-balance md:text-balance'>Protect your account, your data and your customer’s information
               even if your password is compromised. Choose from three levels of security 
               to verify your identity via SMS or email. Or use social login to utilize 
               robust third-party authentication systems and an experts is available to 
               assist you.
              </p>
              
              </div>
          
            
              </div>
                
                
                  
             
           </div>
                
        </div>
      </div>
      </section>
    )
}

export default Scale
