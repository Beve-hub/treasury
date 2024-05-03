import { useState } from 'react'
import right from '../../../assets/right.svg';
import down from '../../../assets/down.svg';
import left from '../../../assets/leftarrow.svg';
import { useNavigate } from 'react-router-dom';

interface Props {
    oldPass: string,
    newPass: string,
    conPass: string,    
}

const Settings: React.FC<Props> = () => {
  const navigate = useNavigate();
    const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [conPass, setConPass] = useState('');
    const [person, setPerson] = useState<boolean>(true);
    const [security, setSecurity] = useState<boolean>(false);
    const [transaction, setTransaction] = useState<boolean>(false);
  

    const togglePerson = () => {
        setPerson(!person);
    }

    const toggleSecurity = () => {
        setSecurity(!security);
    }

    const toggleTrans = () => {
        setTransaction(!transaction)
    }


    return (
        <section   className='md:min-h-[30rem] top-0  overflow-x-hidden overflow-y-auto '>
        <div className="grid justify-center items-center">
                <div className='mt-20 mb-24 max-w-[40rem] flex justify-around '>
                  <div onClick={() => navigate('/overview')} className='cursor-pointer'>
                     <img src={left} alt='' className='w-[24px]'/>
                  </div>
                    
                    <p className='font-bold text-3xl'>Settings</p>
                </div>
               <div className='w-screen grid justify-center items-center gap-8'>
                {/*personal details */}
                <div>
                    <div onClick={togglePerson} className='max-w-[20rem] bg-[--button-color] p-3 flex items-center gap-[6rem] cursor-pointer'>
                        <p>Personal Infotrmation</p>
                        {!person ? <img src={right} alt='' className='w-[24px]'/> : <img src={down} alt='' className='w-[24px]'/>}
                    </div>
                    {person && (
                        <div className='mt-[2rem] grid md:grid-cols-2 gap-6'>
                            <div className='grid gap-3'>
                              <div>
                                <label>First Name *</label>
                                <input
                                    type="text"
                                    placeholder='victor'                                                    
                                    readOnly
                                    className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                              </div>
                              <div>
                                <label>Email *</label>
                                <input
                                    type="text"
                                    placeholder='victor@gmail.com'                                                    
                                    readOnly
                                    className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                              </div>

                              <div>
                                <label>State *</label>
                                <input
                                    type="text"
                                    placeholder='london'                                                    
                                    readOnly
                                    className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                              </div>                             
                            </div>

                            <div className='grid gap-3'>
                              <div>
                                <label>Last Name *</label>
                                <input
                                    type="text"
                                    placeholder='victor'                                                    
                                    readOnly
                                    className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                              </div>
                              <div>
                                <label>Phone Number *</label>
                                <input
                                    type="text"
                                    placeholder='+1 456 67889'                                                    
                                    readOnly
                                    className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                              </div>
                              <div>
                                <label>Country *</label>
                                <input
                                    type="text"
                                    placeholder='United Kingdom'                                                    
                                    readOnly
                                    className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                              </div>                             
                            </div>
                            
                        </div>
                    )}
                </div>

                {/*transaction details */}
                <div>
                    <div onClick={toggleTrans} className='max-w-[20rem] bg-[--button-color] p-3 flex items-center gap-[4.8rem] cursor-pointer'>
                        <p>Transaction Information</p>
                        {!transaction ? <img src={right} alt='' className='w-[24px]'/> : <img src={down} alt='' className='w-[24px]'/>}
                    </div>
                    {transaction && (
                        <div className='mt-[2rem]'>
                            <div>
                                <label>First Name *</label>
                                <input
                                    type="text"
                                    placeholder='victor'                                                    
                                    readOnly
                                    className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                              </div>
                        </div>
                    )}
                </div>

                 {/*security details */}
                 <div>
                    <div onClick={toggleSecurity} className='max-w-[20rem] bg-[--button-color] p-3 flex items-center gap-[6rem] cursor-pointer'>
                        <p>Security Infotrmation</p>
                        {!security ? <img src={right} alt='' className='w-[24px]'/> : <img src={down} alt='' className='w-[24px]'/>}
                    </div>
                    {security&& (
                        <div className='mt-[2rem] mb-[2rem]'>
                            <div className='grid md:grid-cols-2 gap-6'>

                            <div className='grid gap-3'>
                              
                              
                              <div>
                                <label>Old Password  *</label>
                                <input
                                    type="text"
                                    placeholder='enter password'        
                                    value={oldPass}                                            
                                    onChange={(e) => setOldPass(e.target.value)}
                                    className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                              </div>   
                              <div>
                                <label>New Password *</label>
                                <input
                                    type="text"
                                    placeholder='enter password'        
                                    value={newPass}                                            
                                    onChange={(e) => setNewPass(e.target.value)}
                                    className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                              </div>                                                     
                            </div>

                            <div className='grid gap-4'>                              
                              <div>
                                <label>Confirm Password *</label>
                                <input
                                    type="text"
                                    placeholder='enter password'        
                                    value={conPass}                                            
                                    onChange={(e) => setConPass(e.target.value)}
                                    className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                              </div>    
                              <button
                                type="submit"
                                         className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[--bg-color] bg-[--button-color] " >
                                Update Password
                              </button>                                                        
                            </div>
                            </div>
                        </div>
                    )}
                </div>

                  
               </div>

            </div> 
        </section>
    )
}

export default Settings
