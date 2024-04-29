import  {useEffect} from 'react'
import image from '../../../assets/image_background.png'
import image2 from '../../../assets/image_hero.png'
import AOS from 'aos'
import 'aos/dist/aos.css'



const HeroPage= () => {

    useEffect(() => {
        AOS.init({duration: 2000})
      }, []);

    return (
        <section id="home" className="relative h-screen w-screen overflow-hidden relative">
            <div className=''>
                <div className={`absolute w-screen h-full bg-cover bg-center  overlap-hidden`}
            style={{
                
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}>     

            <div className='grid justify-center items-center  mt-[10rem] pl-[7rem]'>
            <div className='max-w-full mx-auto grid md:grid-cols-2  px-10 justify-between items-center '>

                <div className=''>
                    <div className='' data-aos='fade-right'>
                        <h1 className='text-white text-balance font-bold text-[2.5rem] '>Manage your finances. control your savings</h1>
                        <p className='text-white  text-md w-[25rem] py-4'>Achieve your financial goals with us at United Treasury Bank </p>
                    </div>
                   
                    <button  className='font-bold bg-[--button-color] h-10 mt-3 px-4 rounded-md  transition duration-500 hover:scale-110 hover:bg-blue-600 hover:text-white cursor-pointer' data-aos='zoom-in'>
                    <a href="/register">
                    Get Started
                    </a>                     
                   </button>
                </div>
                <div className='sm:flex hidden' data-aos="fade-up-left">
                <img src={image2} alt='' className='w-[30rem] rounded-3xl hover:scale-110 transition-all duration-500 cursor-pointer' />
                </div>
                
            </div>
            </div>

               </div>
            </div>
        </section>
    )
}

export default HeroPage
