import {useEffect} from 'react'
import img from '../../../../assets/image_9.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Sales= () => {
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
              <p className='text-[--text-extra]'>Sales And Assessment</p>
              </div>
               <div>                           
              <p className='font-bold py-4 text-2xl text-[#121212]'>We Have Autonomy And Ownership</p>                    
              <p className='max-w-[30rem] text-light text-[#121212] text-balance md:text-balance'>Working as an Guaranty Wealth sales team means you don't have 
              someone micro-managing you or looking over your shoulder to make sure
              you're getting things done. We're a team of doer, who take full ownership
              of their results.</p>

              <p className='max-w-[30rem] py-2 text-light text-[#121212] text-balance md:text-balance'>We don’t just train sales professionals. We build revenue-generating
               machines. Building a successful sales team is a no-easy task. Finding 
               individuals that are personable, driven, and detailed amongst many other 
               traits is not for the faint hearted. Whether you are just starting to build 
               your sales potentiality or you’re looking to enhance the quality of your 
               experience, United Treasury Bank will help. We have worked on creating a variety
                of assessments that can help ensure you are the best sales-person of your 
                time with a great Job Opportunity for you to explore.
              </p>
              
              
              </div>
          
            
              </div>
                
                
                  
             
           </div>
                
        </div>
      </div>
      </section>
    )
}

export default Sales
