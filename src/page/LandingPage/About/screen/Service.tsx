import {useEffect} from 'react'
import img from '../../../../assets/task.svg'
import img2 from '../../../../assets/invest.svg'
import img3 from '../../../../assets/message.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Service = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
      }, []);
      
    return (
      <section  className="min-h-[30rem] bg-[--text-extra] py-20 flex  md:flex-row grid-col-2 items-center justify-center ">
      <div>
        <div className='max-w-[1100px] grid gap-2 md:grid-cols-2 '>
         
            <div className='bg-[white]  py-4'>
              <div className='p-6' data-aos="fade-up-right">      
              <div className='py-1 w-[10rem]  flex justify-center font-medium bg-[--button-color]' >
              <p className='text-[--text-extra]'>Our Services</p>
              </div>
               <div>                           
              <p className='font-bold py-4 text-2xl text-[#121212]'>Working Together To Drive Growth And Positive Change</p>                    
              <p className='max-w-[30rem] text-light text-[#121212] text-balance md:text-balance'>We can tailor a comprehensive suite of services and solutions
               to help fit your situation, whether you're riding out seasonal sales 
               fluctuations, expanding into overseas markets, or looking for ways to
                improve working capital performance.</p>
              </div>
          
            
              </div>
                
                <div className='flex justify-start ml-6 items-center' data-aos="fade-up-right">
                   <button className='bg-[--bg-color] text-[white] w-[7rem] rounded-3xl  py-2 grid items-center justify-center hover:scale-110 transition-all duration-500 cursor-pointer'>
                    Start Now 
                  </button>
                </div>
                  
             
           </div>
    
     
           <div className='   justify-center ' data-aos='zoom-in'>
            <div className='max-w-[30rem] mx-auto grid md:grid-cols-1 gap-4 px-8 py-10'>
            <div className=' drop-shadow-xl border-2  py-2  rounded-lg transition-all duration-500 ' >
                <div className='flex items-center justify-around'>
                
                    <img src={img} alt='' className='w-[35px] h-[35px] bg-[--hover-color] p-2 mx-2 rounded-2xl' />
                                        
                 <div className=' max-w-[20rem]'>                                
                     
                    <p className='text-md font-bold'>Middle Market Banking</p>                             
                    <p className='text-sm '>Whether you're expanding your business,
                     managing financial risk, or looking to stay more
                      competitive, our commercial bankers can provide 
                      options to help your business thrive.</p>
                    
                 </div>
                </div>                
            </div>
            <div className=' drop-shadow-xl border-2  py-2  rounded-lg transition-all duration-500 ' >
                <div className='flex items-center justify-around'>               
                    <img src={img2} alt='' className='w-[35px] h-[35px] bg-[--hover-color] p-2 mx-2 rounded-2xl' />
                                        
                 <div className=' max-w-[20rem]'>                                
                     
                    <p className='text-md font-bold'>Commercial Financing</p>                             
                    <p className='text-sm '>Our experienced team can help you access 
                    the financing to support your business and your 
                    ever-changing goals.</p>
                    
                 </div>
                </div>                
            </div> 
            <div className=' drop-shadow-xl border-2  py-2  rounded-lg transition-all duration-500 ' >
                <div className='flex items-center justify-around'>                
                    <img src={img3} alt='' className='w-[35px] h-[35px] bg-[--hover-color] p-2 mx-2 rounded-2xl' />                                        
                 <div className='max-w-[20rem]'>                             
                     
                    <p className='text-md font-bold'>Treasury Management</p>                             
                    <p className='text-sm '>Conduct business differently and more easily 
                    through technology, with solutions that offer payment
                     and receivables optimization, fraud protection, liquidity 
                     management, and more.</p>
                    
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

export default Service
