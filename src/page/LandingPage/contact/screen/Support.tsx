import {useEffect, useState} from 'react'
import img from '../../../../assets/image_10.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Support = () => {
  const [formInput, setFormInput] = useState({
    fullName: '',
    email: '',
    message: '',
    subject: '',
})

const url = "https://unitedtreasury-bf323-default-rtdb.firebaseio.com/CustomerData.json"

    useEffect(() => {
        AOS.init({duration: 2000})
      }, []);

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name, value } = e.target;
        setFormInput({
            ...formInput,
            [name]: value
        }) 
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const resp = await fetch(url, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({...formInput,   })
        })

        if (resp) {
            alert("Successfull")
        }else {
            alert("Please fill in all required fields.");
        }

    }catch (error) {
        console.error('Error adding wallet:', error);
        alert("Error storing details. Please try again.");
    }
  };

      
      return (
        <section  className="min-h-[30rem] bg-[--text-extra] py-20 flex  md:flex-row grid-col-2 items-center justify-center ">
            <div>
              <div className='max-w-[1100px] flex gap-2 md:grid-cols-2 '>
              <div className='sm:grid hidden' data-aos='zoom-in'>
               <img src={img} alt="" className='w-[30rem] h-[25rem] hover:scale-110 transition-all duration-500 cursor-pointer' />
              </div>
           
              <div className='bg-[white]  py-4'>
                <div className='p-6' data-aos="fade-up-right">      
                <div className='py-1 w-[10rem]  flex justify-center font-medium bg-[--button-color]' >
                <p className='text-[--text-extra]'>Customer  Support</p>
                </div>
                 <div>                           
                <p className='font-bold py-4 text-2xl text-[#121212] max-w-[25rem]'>Please Fill Out This Form To And We Will Get In Touch.</p>                    
                <p className='max-w-[30rem] text-light text-[#121212] text-balance md:text-balance'>Working with a life coach is like hanging out with a really honest
                 friend who to the believes in your dreams, always wants the best for you,
                  and is willing to ask you for hard questions and call you on your bullshit.
                  </p>
                </div>
    
                <div>
    
                </div>
                
                <div className='mt-4 grid gap-2'>
                    <div className='grid gap-2 md:grid-cols-2'>
                    <input type='text'  name="fullName"
                          value={formInput.fullName}
                           onChange={handleChange}  placeholder='Full Name' className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    <input type='text' 
                        name="email"
                        value={formInput.email}
                         onChange={handleChange} placeholder='Email' className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
    
                    <input name="subject"
                          value={formInput.subject}
                           onChange={handleChange} placeholder='Subject'
                     className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    <textarea  name="message"
                        value={formInput.message}
                        onChange={handleChange} placeholder='Message'
                     className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight optional:autofill:focus:outline-none focus:shadow-outline"/>
                  
                    
                </div>
                </div>
                  
                  <div className='flex justify-start ml-6 items-center' data-aos="fade-up-right">
                     <button onClick={handleSubmit} className='bg-[--bg-color] text-[white] w-[3rem] px-[7rem] py-2 grid items-center justify-center hover:scale-110 transition-all duration-500 cursor-pointer'>
                      submit
                    </button>
                  </div>
                    
               
             </div>
    
       
             
           
              </div>
           </div>
        </section>
      )
}

export default Support
