import  {useEffect} from 'react'
import image from '../../../../assets/image_background.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const AboutUs = () => {

    useEffect(() => {
        AOS.init({duration: 2000})
      }, []);

    return (
        <section id="home" className=" bg-[--text-extra] h-[17rem] w-screen overflow-hidden relative">
            <div className=''>
                <div className={`absolute w-screen h-full bg-cover bg-center overlap-hidden`}
            style={{
                
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}>     

                <div className='grid justify-center items-center  h-[screen] '>
            <div className='max-w-full mx-auto grid md:grid-cols-2  px-10 justify-between items-center '>

            <div className='h-[18rem] grid justify-center items-center' data-aos='fade-right'>           
              <div className=' grid justify-center items-center'>
                <div className='max-w-[7rem] flex justify-center bg-[--button-color] py-1'>
                    <p className='font-bold text-[--text-extra]'>About Us</p>
                </div>
                <h1 className='text-white  font-bold text-[18px] max-w-[30rem] '>Empowering Financial Journey: Welcome to Anthstone </h1>  
              </div>
                                    
            </div>
                
                
            </div>
            </div>  
               </div>
            </div>
        </section>
    )
}

export default AboutUs
