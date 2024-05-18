import {useEffect} from 'react'
import img from '../../../assets/image_2.png'
import img2 from '../../../assets/image_3.png'
import img3 from '../../../assets/image_4.png'
import arrow from '../../../assets/Arrow 1.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'



const Guide = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
      }, []);
    return (
        <section  className="min-h-[30rem] bg-[--text-extra] py-20 flex  md:flex-row grid-col-2 items-center justify-center ">
        <div>
          <div className='max-w-[1100px] flex gap-2 md:grid-cols-2 '> 
                <div className='p-6 ' >     
                  <div className=' grid justify-center items-center'>   
                   
                  <div className='max-w-[80rem] flex justify-center'>
                  <p className='  py-1 w-[10rem]  flex justify-center font-medium bg-[--button-color] text-[--text-extra]'> Our Values</p>
                  </div>                 
                      <p className='font-bold py-4 text-2xl text-[#121212] text-center'>Financial guidance and support</p>                    
                    </div>             
                
                    <div className='max-w-[90rem] mx-auto grid md:grid-cols-3 gap-4 px-8 py-10'>
                        <div className='border-2 w-[17rem] border-black rounded-lg transition-all duration-500 ' data-aos="zoom-in-up">
                            <img src={img} alt='' className='rounded-t-lg' />
                            <div >
                             
                            <div className='mx-2'>
                                <p className='text-sm font-bold py-2'>Get tools. Get tips. Get peace of mind.</p>
                                <p className='text-sm '>Discover digital tools to help you budget, save, manage credit, and more</p>
                            </div>

                            <div className='flex items-center mt-6 justify-end pr-4 gap-2 py-2'>
                                <p className='text-sm'>More</p>
                                <img src={arrow} alt='' className='w-[24px]'/>
                            </div>
                            <div className="relative bg-transparent z-1 h-2 hover:bg-opacity-100 transition duration-100 ease-in-out">
                              <div className="absolute bottom-0 bg-[--hover-color] h-full w-full hover:h-[145px] cursor-pointer"></div>
                            </div>
                            </div>
                        </div>

                        <div className='border-2 w-[17rem] border-black rounded-lg transition-all duration-500 ' data-aos="zoom-in-up">
                            <img src={img2} alt='' className='rounded-t-lg' />
                            <div >
                             
                            <div className='mx-2'>
                                <p className='text-sm font-bold py-2'>Save. Invest. Retire well.</p>
                                <p className='text-sm '>Discover how to start saving to meet your retirement goals.</p>
                            </div>

                            <div className='flex items-center justify-end mt-6 pr-4 gap-2 py-2'>
                                <p className='text-sm'>More</p>
                                <img src={arrow} alt='' className='w-[24px]'/>
                            </div>
                            <div className="relative bg-transparent z-1 h-2 hover:bg-opacity-100 transition duration-100 ease-in-out">
                              <div className="absolute bottom-0 bg-[--hover-color] h-full w-full hover:h-[145px] cursor-pointer"></div>
                            </div>
                            </div>
                        </div>

                        <div className='border-2 w-[17rem] border-black rounded-lg transition-all duration-500 ' data-aos="zoom-in-up">
                            <img src={img3} alt='' className='rounded-t-lg' />
                            <div >
                             
                            <div className='mx-2'>
                                <p className='text-sm font-bold py-2'>Dream big. Make it happen. Live it up.</p>
                                <p className='text-sm '>Discover how smart saving habits could help make your dream purchases a reality</p>
                            </div>

                            <div className='flex items-center mt-1 justify-end pr-4 gap-2 py-2'>
                                <p className='text-sm'>More</p>
                                <img src={arrow} alt='' className='w-[24px]'/>
                            </div>
                            <div className="relative bg-transparent z-1 h-2 hover:bg-opacity-100 transition duration-100 ease-in-out">
                              <div className="absolute bottom-0 bg-[--hover-color] h-full w-full hover:h-[145px] cursor-pointer"></div>
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

export default Guide
