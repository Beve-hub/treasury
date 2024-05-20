import { useState } from "react";



const ContactBody = () => {
    const [formInput, setFormInput] = useState({
        fullName: '',
        email: '',
        message: '',
        subject: '',
    })

 
  const url = "https://unitedtreasury-bf323-default-rtdb.firebaseio.com/CustomerData.json"


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
        <div className='grid gap-6 justify-center items-center h-[30rem] '>             
            <div className='p-6 w-full max-w-[30rem]'>
            <div className='flex gap-2 justify-start mb-10'>
                <p className='text-2xl font-bold'>Contact Us</p>               
            </div>
                <p className='font-bold py-4 text-xl text-[#121212]'>Please Fill Out This Form And We Will Get In Touch.</p>
                <div className='mt-4 grid gap-4'>
                    <div className='grid gap-4 md:grid-cols-2'>
                        <input type='text' 
                        name="fullName"
                          value={formInput.fullName}
                           onChange={handleChange} placeholder='Full Name' className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        <input type='text' 
                        name="email"
                        value={formInput.email}
                         onChange={handleChange} placeholder='Email' className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <input  name="subject"
                          value={formInput.subject}
                           onChange={handleChange} placeholder='Subject' className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                   <textarea
                        name="message"
                        value={formInput.message}
                        onChange={handleChange}
                        placeholder="Message"
                        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className='flex justify-start mt-4'>
                    <button onClick={handleSubmit} className='bg-[--bg-color] text-white px-10 py-2 hover:scale-110 transition-all duration-500 cursor-pointer'>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContactBody
