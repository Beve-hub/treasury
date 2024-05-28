
import mail from '../../../assets/mail.svg'


const Footer = () => {
    return (
        <section id="join" className="min-h-[20rem] max-w-full bg-[--bg-color] ">
     

        <div className=' mx-auto w-screen grid justify-center items-center md:grid-cols-2 gap-4 px-8 pt-6'>
  
  <div className='max-w-[150rem] grid justify-center items-center'>
  <div className='grid  items-center md:grid-cols-3 gap-4 px-10 '>
  
  <div className='grid gap-4 mt-4 '>
  <p className='font-bold text-md text-[--text-extra]'>Our Company</p>
  <p className='text-sm font-thin text-[--text-extra]'><a href='/about'>About us</a></p>
  <p className='text-sm font-thin text-[--text-extra]'><a href='/about'>Our Portfolio</a></p>
  <p className='text-sm font-thin text-[--text-extra]'><a href='/about'>Investor Relation</a></p>
  <p className='text-sm font-thin text-[--text-extra]' ><a href='/about'>Career</a></p>
  </div>
  
  
  <div className='grid gap-4 mt-4 '>
  <p className='font-bold text-md  text-[--text-extra]'>OUR SERVICES</p>
  <p className='text-sm font-thin text-[--text-extra]'><a href='/solution'>Sales & Marketing</a></p>
  <p className='text-sm font-thin text-[--text-extra]'><a href='/solution'>Security & Scalability</a></p>
  <p className='text-sm font-thin text-[--text-extra]'><a href='/'>Loan Service</a></p>
  <p className='text-sm font-thin text-[--text-extra]'><a href='/contact'>Contact Us</a></p>
  </div>
  
  
  
  <div className='gap-6 mt-4 grid'>
  <p className='font-light text-sm text-[--text-extra]'><a href='/blog'>ASB Blog</a></p>
  <p className='text-sm font-thin text-[--text-extra]'><a href='/responsibility'>Cooperate Responsibility</a></p>
  <p className='text-sm font-thin text-[--text-extra]'><a href='/news'>News Room</a></p>
  <p className='text-sm font-thin text-[--text-extra]'><a href='/policy'>Privacy Polices</a></p>
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
   
  
     
  
  <div className="flex justify-center border-t-2  mt-[4rem] border-[--button-color] border-t-[#EBEBEB] px-10  md:flex-row grid-col-1 items-center " >
  <p  className='text-[#EBEBEB50] '>Copyright © 2024, Anthstone </p> 
  </div>
        
      
  
        
  
  </section>
    )
}

export default Footer
