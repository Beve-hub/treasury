import {useEffect, useState} from 'react'
import img from '../../../assets/image_5.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Customer = () => {
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
           <img src={img} alt="" className='w-[30rem] h-[30rem] hover:scale-110 transition-all duration-500 cursor-pointer' />
          </div>
       
          <div className='bg-[white]  py-4'>
            <div className='p-6' data-aos="fade-up-right">      
            <div  >
            <p className='text-[--text-color] text-xl font-semibold'>Contact Us</p>
            <div  className='w-[3rem] py-1  flex justify-center border-b-4 border-[--button-color] ' ></div>
            </div>
             <div>                           
            <p className='font-bold py-4 text-xl text-[#121212]'>We Are Always Here For You24/7 </p>                    
            <p className='max-w-[30rem] text-light text-[#121212] text-balance md:text-balance'>Feel Free To Ask Your Questions</p>
            </div>

            <div>

            </div>
            
            <div className='mt-4 grid gap-2'>
                    <div className='grid gap-2 md:grid-cols-2'>
                    <input 
                    name="fullName"
                    value={formInput.fullName}
                     onChange={handleChange}
                    type='text' placeholder='Full Name' className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

                    <input 
                    name="email"
                    value={formInput.email}
                     onChange={handleChange} 
                    type='text' placeholder='Email' className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
    
                    <input 
                     name="subject"
                     value={formInput.subject}
                      onChange={handleChange}
                     placeholder='Subject'
                     className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

                    <textarea  
                    name="message"
                    value={formInput.message}
                    onChange={handleChange}
                    placeholder='Message'
                     className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                  
                    
                </div>
            </div>
              
              <div className='flex justify-start ml-6 items-center' data-aos="fade-up-right">
                 <button onClick={handleSubmit}  className='bg-[--bg-color] text-[white] w-[3rem] px-[7rem] py-2 grid items-center justify-center hover:scale-110 transition-all duration-500 cursor-pointer'>
                  submit
                </button>
              </div>
                
           
         </div>

   
         
       
          </div>
       </div>
    </section>
  )
}

export default Customer
