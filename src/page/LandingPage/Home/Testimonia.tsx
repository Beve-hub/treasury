import {useEffect} from 'react'
import img from '../../../assets/image_test1.png'
import img2 from '../../../assets/image_test2.png'
import img3 from '../../../assets/image_test3.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import star from '../../../assets/star.svg'



const Testimonia = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
      }, []);
    return (
        <section  className="min-h-[30rem]  py-20 flex  md:flex-row grid-col-2 items-center justify-center ">
        <div>
          <div className='max-w-[1100px] flex gap-2 md:grid-cols-2 '>
           
             
                <div className='p-6 ' >     
                  <div className=' grid justify-center items-center'> 
                  <div className='max-w-[80rem] flex justify-center'>
                  <p className='  py-1 w-[10rem]  flex justify-center font-medium bg-[--button-color] text-[--text-extra]'> TESTIMONIAL</p>  
                  </div>
                                          
                   <p className='font-bold py-4 text-center text-2xl text-[#121212] max-w-[30rem] te'>The Journey Of Building A Financial Plan That Is Both Successful</p>                    
                    </div>             
                
                    <div className='max-w-[90rem] mx-auto grid md:grid-cols-3 gap-4 px-8 py-10'>

                        <div className=' drop-shadow-xl border-2 w-[17rem] py-4  rounded-lg transition-all duration-500 ' data-aos="zoom-in-up">
                            <div className='max-w-[80rem] flex justify-center'>
                            <img src={img} alt='' className='w-[3.6rem] h-[3.9rem]' />
                            </div>
                            
                            <div className='mt-6'>
                             
                            <div className='mx-2'>                                
                                <p className='text-sm '>I recently switched to Guaranty Wealth and I'm extremely happy with the results. Their customer service is outstanding - they're always willing to go that extra mile to make sure I'm satisfied. The features they offer are top-notch and their fees are very reasonable. Overall, I'm a big fan of Latitude Fidelity and would highly recommend them to anyone looking for reliable financial services.</p>
                            </div>

                            <div className='flex items-center mt-6 justify-between mx-2 pr-4 gap-2 py-2'>
                                <p className='text-sm font-bold'>George Brown</p>
                                <div className='flex '>
                                 <img src={star} alt='' className='w-[1.2rem] ' />
                                 <img src={star} alt='' className='w-[1.2rem] ' />
                                 <img src={star} alt='' className='w-[1.2rem] ' />
                                 <img src={star} alt='' className='w-[1.2rem] ' />
                                 <img src={star} alt='' className='w-[1.2rem] ' />
                                </div>
                            </div>
                            
                            </div>
                        </div>

                        <div className='drop-shadow-xl border-2 w-[17rem] py-4  rounded-lg transition-all duration-500 ' data-aos="zoom-in-up">
                        <div className='max-w-[80rem] flex justify-center'>
                            <img src={img2} alt='' className='w-[3.6rem] h-[3.9rem]' />
                            </div>
                            
                            <div className='mt-6'>
                             
                            <div className='mx-2'>                                
                                <p className='text-sm '>I've been a customer of Guaranty Wealth for over 5 years now and I'm still delighted with their service. Their customer support team is always helpful and willing to go the extra mile, making sure I get the best product or service every time.</p>
                            </div>

                            <div className='flex items-center mt-[6.5rem] justify-between mx-2 pr-4 gap-2 py-2'>
                                <p className='text-sm font-bold'>Sarah Chu</p>
                                <div className='flex '>
                                 <img src={star} alt='' className='w-[1.2rem] ' />
                                 <img src={star} alt='' className='w-[1.2rem] ' />
                                 <img src={star} alt='' className='w-[1.2rem] ' />
                                 <img src={star} alt='' className='w-[1.2rem] ' />
                                 <img src={star} alt='' className='w-[1.2rem] ' />
                                </div>
                            </div>
                            
                            </div>
                        </div>

                        <div className='drop-shadow-xl border-2 w-[17rem] py-4  rounded-lg transition-all duration-500 ' data-aos="zoom-in-up">
                        <div className='max-w-[80rem] flex justify-center'>
                            <img src={img3} alt='' className='w-[3.6rem] h-[3.9rem]' />
                            </div>
                            
                            <div className='mt-6'>
                             
                            <div className='mx-2'>                                
                                <p className='text-sm '>I've been using Guaranty Wealth for a few months now and I can confidently say that they are the best in the market. Their customer service is top-notch and their products are always reliable. They take feedback seriously and strive to make their customers happy. I'm impressed with the quality of their product and recommend them to anyone looking for a reliable financial solution.</p>
                            </div>

                            <div className='flex items-center mt-6 justify-between mx-2 pr-4 gap-2 py-2'>
                                <p className='text-sm font-bold'>Christine Eve</p>
                                <div className='flex '>
                                 <img src={star} alt='' className='w-[1.2rem] ' />
                                 <img src={star} alt='' className='w-[1.2rem] ' />
                                 <img src={star} alt='' className='w-[1.2rem] ' />
                                 <img src={star} alt='' className='w-[1.2rem] ' />
                                 <img src={star} alt='' className='w-[1.2rem] ' />
                                </div>
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

export default Testimonia
