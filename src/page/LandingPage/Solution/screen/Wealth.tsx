import {useEffect} from 'react'
import img from '../../../../assets/image_7.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Wealth = () => {
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
              <p className='text-[--text-extra]'>Wealth Management</p>
              </div>
               <div>                           
              <p className='font-bold py-4 text-2xl text-[--text-extra] '>THIS IS WHAT GUIDES US</p>                    
              <p className='max-w-[30rem] text-light text-[#121212] text-balance md:text-balance'>Markets move fast and often, so you need a partner who understands 
              the ever-changing investing landscape. Guaranty Wealth combine our patented 
              simulation and optimization engines with thoughtful human insights to deliver 
              a portfolio tailored to you. And in the process, we bring you institutional 
              rigor you can benefit from as an individual investor.</p>

              <p className='max-w-[30rem] py-2 text-light text-[#121212] text-balance md:text-balance'>investment strategies tailored to your goals and needs. 
              Portfolios that are broadly diversified across asset classes and 
              sectors. Systematic and rigorous quantitative analysis backed by
               deep research. A core belief that everyone deserves to move their
                financial life forward. Independent, fiduciary advice that always
                 puts your best interests first. Wealth management that seeks to 
                 balance maximizing returns, structuring for tax-efficiency.
              </p>
              
              </div>
          
            
              </div>
                
                
                  
             
           </div>
  
     
           <div className=' justify-center sm:grid hidden' data-aos='zoom-in'>
             <img src={img} alt="" className='w-[30rem] h-[25rem] mt-8 hover:scale-110 transition-all duration-500 cursor-pointer' />
            </div>
         
        </div>
      </div>
      </section>
    )
}
