import Img1 from '../../../assets/img-1.jpg'
import Img2 from '../../../assets/img-2.jpg'
import Img3 from '../../../assets/img-3.jpg'
import Img4 from '../../../assets/boxarrow.svg'

const Insurance = () => {
    return (
        <section  className="min-h-[30rem]  py-20 flex bg-[--text-extra] md:flex-row grid-col-2 items-center justify-center ">
             <div className='grid gap-6 w-[screen]'>
            <div className='grid justify-center py-4'>
                <p className="text-2xl font-bold">Our Insurance</p>
                <div  className='w-[3rem] py-1  flex justify-center border-b-4 border-[--button-color] ' ></div>
            </div>

            <div className='grid md:grid-cols-3 items-center justify-center gap-4 mx-auto'>
            <div className='w-[20rem] grid gap-3'>
    <div className='relative'>
        <img src={Img1} alt='' className='w-[20rem]' />
        <div className="absolute bottom-0 left-0 w-full h-full bg-transparent hover:bg-[--hover-color] transition duration-100 ease-in-out">
            <div className="flex justify-center items-center h-full opacity-0 hover:opacity-100 transition duration-100 ease-in-out">
                <img src={Img4} alt='' className='w-[2rem]' />
            </div>
        </div>
    </div>
    <div className='grid gap-4'>
        <div>
            <p className='font-bold text-xl text-[--bg-color]'>E-Solution Account</p>
            <div className='w-[3rem] py-1 flex justify-center border-b-4 border-[--button-color]'></div>
        </div>
        <p className='text-[#12121270] text-sm'>Control your finances with free access to your money 24 hours a day. Bank accounts also offering investments, insurance and a payday advance.</p>
    </div>
            </div>



                <div className='w-[20rem] grid '>
                <div className='relative'>
        <img src={Img2} alt='' className='w-[20rem]' />
        <div className="absolute bottom-0 left-0 w-full h-full bg-transparent hover:bg-[--hover-color] transition duration-100 ease-in-out">
            <div className="flex justify-center items-center h-full opacity-0 hover:opacity-100 transition duration-100 ease-in-out">
                <img src={Img4} alt='' className='w-[2rem]' />
            </div>
        </div>
    </div>
                    
                    <div className='grid gap-4 mt-3'>
                        <div>
                            <p className='font-bold text-xl text-[--bg-color]'>Savings E-Solutions</p>
                            <div  className='w-[3rem] py-1  flex justify-center border-b-4 border-[--button-color] ' ></div>
                        </div>
                        <p className='text-[#12121270] text-sm'>Create a safe Saving, available at any time! Whatever your goals, choose our Saving product that suits you today and tomorrow.</p>
                    </div>
                </div>


                <div className='w-[20rem] grid gap-3 mt-4'>
                     <div className='relative'>
        <img src={Img3} alt='' className='w-[20rem]' />
        <div className="absolute bottom-0 left-0 w-full h-full bg-transparent hover:bg-[--hover-color] transition duration-100 ease-in-out">
            <div className="flex justify-center items-center h-full opacity-0 hover:opacity-100 transition duration-100 ease-in-out">
                <img src={Img4} alt='' className='w-[2rem]' />
            </div>
        </div>
    </div>
                    <div className='grid gap-4'>
                        <div>
                            <p className='font-bold text-xl text-[--bg-color]'>Optimal Protection</p>
                            <div  className='w-[3rem] py-1  flex justify-center border-b-4 border-[--button-color] ' ></div>
                        </div>
                        <p className='text-[#12121270] text-sm'>Protect your family, for life as well as your money with the assurance of financial security, a choice of customized formulas and appropriate coverage levels.</p>
                    </div>
                </div>
            </div>

            
        </div>
        </section>       
    )
}

export default Insurance
