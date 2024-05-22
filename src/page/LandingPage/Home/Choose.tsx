import  {useEffect} from 'react'
import img from '../../../assets/image_hero.png'
import check from '../../../assets/icons_check-fill.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'






const Choose = () => {

    useEffect(() => {
        AOS.init({duration: 2000})
      }, []);
      
    return (
      <section  className="min-h-[30rem]  py-20 flex bg-[--text-extra] md:flex-row grid-col-2 items-center justify-center ">
      <div>
        <div className='max-w-[1100px] flex gap-2 md:grid-cols-2 '>
         
            <div className='bg-[white]  py-4'>
              <div className='p-6' data-aos="fade-up-right">      
              <div>
              <p className='text-[--text-color] text-xl'>Why Choose Us</p>
              <div  className='w-[5rem] py-1  flex justify-center border-b-4 border-[--button-color] ' ></div>
              
              </div>
               <div>                           
              <p className='font-bold py-4 text-2xl text-[#121212]'>Financial Strategies</p>                    
              <p className='max-w-[30rem] text-light text-[#121212] text-balance md:text-balance'>Moving the management of financial resources in the direction of treasury development and the circular economy is hugely important in the fight against human-induced climate change and we intend to follow this trajectory. Anthstone has now published a Financing Framework which applies to the Bank’s funding and lending activities.</p>
              </div>

              <div>

              </div>
              
              <div className='mt-4 grid gap-2'>
                  <div className='flex items-center gap-2'>
                  <img src={check} alt='' className='w-[25px]' />    
                  <p className='text-md font-semibold'>  Banking Security</p>
                  </div>

                  <div className='flex items-center gap-2'>
                  <img src={check} alt='' className='w-[25px]' />    
                  <p className='text-md font-semibold'>  Secured Investment</p>
                  </div>
                  <div className='flex items-center gap-2'>
                  <img src={check} alt='' className='w-[25px]' />    
                  <p className='text-md font-semibold'>  Affordable Loans</p>
                  </div>
                  <div className='flex items-center gap-2'>
                  <img src={check} alt='' className='w-[25px]' />    
                  <p className='text-md font-semibold'>  Retirement strategies</p>
                  </div>
                  
              </div>
              </div>
                
                <div className='flex justify-start ml-6 items-center' data-aos="fade-up-right">
                   <button className='bg-[--bg-color] text-[white] w-[3rem] px-[7rem] py-2 grid items-center justify-center hover:scale-110 transition-all duration-500 cursor-pointer'>
                    Explore 
                  </button>
                </div>
                  
             
           </div>
  
     
           <div className='sm:grid hidden' data-aos='zoom-in'>
             <img src={img} alt="" className='w-[30rem] h-[25rem] hover:scale-110 transition-all duration-500 cursor-pointer' />
            </div>
         
        </div>
      </div>
      </section>
    )
}

export default Choose
