import React from 'react'
import image from '../../../assets/image_background.png'
import image2 from '../../../assets/image_hero.png'



const HeroPage= () => {
    return (
        <section id="home" className="min-h-screen w-screen overflow-hidden relative">
            <div className='relative h-screen'>
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
                    <div className=''>
                        <h1 className='text-white text-balance font-bold text-[2.5rem] '>Manage your finances. control your savings</h1>
                        <p className='text-white text-balance w-[25rem] py-4'>Achieve your financial goals with us at United Treasury Bank </p>
                    </div>
                    <button className='bg-[--button-color] py-2 px-6 font-semibold rounded-3xl '>
                        Join Us
                    </button>
                </div>
                <div className='sm:flex hidden'>
                <img src={image2} alt='' className='w-[30rem] rounded-3xl ' />
                </div>
                
            </div>
            </div>

               </div>
            </div>
        </section>
    )
}

export default HeroPage
