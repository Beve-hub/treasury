import fb from '../../../assets/fb.svg'
import x from '../../../assets/x.svg'
import tube from '../../../assets/tube.svg'
import google from '../../../assets/google.svg'
import mail from '../../../assets/mail.svg'


const Footer = () => {
    return (
        <section id="join" className="min-h-[20rem] max-w-full bg-[--bg-color] ">
     

        <div className=' mx-auto grid justify-center  items-center md:grid-cols-2 gap-4 px-8 pt-6'>
  
  <div className='max-w-[150rem] grid justify-center items-center'>
  <div className='grid  items-center md:grid-cols-3 gap-4 px-10 '>
  
  <div className='grid gap-2'>
  <p className='font-bold text-md text-[--text-extra]'>Our Company</p>
  <p className='text-sm font-thin text-[--text-extra]'>About us</p>
  <p className='text-sm font-thin text-[--text-extra]'>Our Portfolio</p>
  <p className='text-sm font-thin text-[--text-extra]'>Investor Relation</p>
  <p className='text-sm font-thin text-[--text-extra]' >Career</p>
  </div>
  
  
  <div className='grid gap-2'>
  <p className='font-bold text-md  text-[--text-extra]'>OUR SERVICES</p>
  <p className='text-sm font-thin text-[--text-extra]'>Sales & Marketing</p>
  <p className='text-sm font-thin text-[--text-extra]'>Security & Scalability</p>
  <p className='text-sm font-thin text-[--text-extra]'>Loan Service</p>
  <p className='text-sm font-thin text-[--text-extra]'>Privacy Policy</p>
  </div>
  
  
  
  <div className='gap-2 grid'>
  <p className='font-light text-sm text-[--text-extra]'>UTB Blog</p>
  <p className='text-sm font-thin text-[--text-extra]'>Coroperate Responsiblity</p>
  <p className='text-sm font-thin text-[--text-extra]'>News Room</p>
  <p className='text-sm font-thin text-[--text-extra]'>Contact Us</p>
  </div>
  </div>
  
  <div className="flex  md:flex-row grid-col-2  gap-4 items-center py-6" >
  
    <p className='font-bold text-white'>FOLLOW UTB</p>
    <div className="flex gap-3  md:flex-row grid-col-4 items-center py-6" >
  <div className='bg-[--button-color]  p-1'>
  <img src={fb} alt='' className='w-[24px]' />
 </div>

 <div className='bg-[--button-color]  p-1'>
  <img src={x} alt='' className='w-[24px]' />
 </div>


 <div className='bg-[--button-color]  p-1'>
  <img src={tube} alt='' className='w-[24px]' />
 </div>


 <div className='bg-[--button-color]  p-1'>
  <img src={google} alt='' className='w-[24px]' />
 </div>


  </div>
  </div>
    </div>
  
    <div>
      <p className='text-balance py-2 text-[--text-extra] font-bold'>Subscribe to our Newsletter</p>
  
      <p className='text-balance py-4 text-[--text-extra] font-light text-sm'>If you would like more information about our services we are eager to help.</p>
  
      <div>
     <img src={mail} alt=''  className='w-[22px] absolute mt-[10px] ml-1'/>
  
      <div className="absolute ml-[12.5rem]">
      <div className=" flex items-center justify-center gap-6 bg-[--button-color] px-2 py-1 mt-1.5 rounded-md text-[white] ">
      <p className='text-sm'>Subscribe</p>
      </div> 
      </div>
      <input  type="text"
      name="username"
      id="username"
      autoComplete="username"
      className="block w-[18rem] rounded-md border-0 py-2 pl-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"                  
      placeholder="Email address.." />
      </div>
  
    </div>  
  
       </div>
  
  <div className="flex border-t-2  mt-6 border-[--button-color] border-t-[#EBEBEB] px-10  md:flex-row grid-col-1 items-center " >
  <div className='mx-auto grid py-4  items-center md:grid-cols-2 gap-4 px-8 mt-4'>
  
  <div>
   <button  className='text-[#EBEBEB50] text-m '>Copyright © 2024, United Treasury Bank </button>
   </div> 
  
  
   
   </div>
  </div>
        
      
  
        
  
  </section>
    )
}

export default Footer
