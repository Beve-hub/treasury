import {useState} from 'react'
import dots from '../../../../assets/dots.svg'
import AddAddressModal from './AddAddressModal';
import AddCardModal from './AddCardModal';

interface Props {
    cardNum: string,
    expiryDate: string,
    cvv: string,    
}

const WalletCard: React.FC<Props> = () => {
    const [icon, setIcon] = useState<boolean>(false);
    const [add, setAdd] = useState<boolean>(false);
    const [showAddCardModal, setShowAddCardModal] = useState<boolean>(false);
  const [showAddAddressModal, setShowAddAddressModal] = useState<boolean>(false);
  const [cardNum, setCardNum] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');
  

    const toggleAdd = (): void => {
        setAdd(!add)
    }   
    const toggleIcon = (): void => {
        setIcon(!icon)
    }
    return (
        <div className='grid gap-6 '>
            
            <div className='grid items-center justify-center gap-6 md:grid-cols-2 max-w-screen-lg mx-auto'>
                <div className='grid  rounded-2xl  bg-[--transparent] w-[20rem] h-[15rem] md:w-[30rem] md:h-[20rem] outline-dashed outline-2 outline-offset-2'>
                <div onClick={toggleIcon} className='absolute m-2 '>
                        <img src={dots} alt='' className='w-[24px]'/>
                    </div>
                    {icon && (
                     <div className="m-6 h-[3rem] rounded-lg bg-[#ededed] grid items-center justify-center  w-[8rem]">
                      <ul className='grid p-2 items-center cursor-pointer'>
                        <li onClick={() => setShowAddCardModal(true)} className="flex items-center gap-2 ">
                             <p className='text-lg '>+</p>
                            <p className='text-md '>Add Card</p>
                          
                        </li>
                      </ul>   
                    </div>
                )}
                    
                    <div className='grid justify-center items-center gap-1'>
                        <h2 className='text-sm  text-center'>Add Card</h2>
                    </div>
                </div>
                <div className='grid  rounded-2xl  bg-[--transparent] w-[20rem] h-[15rem] md:w-[30rem] md:h-[20rem] outline-dashed outline-2 outline-offset-2'>
                <div onClick={toggleAdd} className='absolute m-2 '>
                        <img src={dots} alt='' className='w-[24px]'/>
                    </div>
                    {add && (
                     <div className="h-[3rem] m-6 rounded-lg bg-[#ededed] grid items-center justify-center  w-[8rem]">
                      <ul className='grid p-2 items-center cursor-pointer'>
                        <li onClick={() => setShowAddAddressModal(true)}  className="flex items-center gap-2 ">
                             <p className='text-lg '>+</p>
                            <p className='text-md '>Add Address</p>
                        </li>
                      </ul>   
                    </div>
                )}
                    <div className='grid justify-center items-center gap-1'>
                        <h2 className='text-sm text-center'>Add wallet address</h2>
                    </div>
                </div>
            </div>

                <AddAddressModal showAddAddressModal={showAddAddressModal} onClose={() => setShowAddAddressModal(false)} >
                <div className='grid gap-4'>
                    <div>
                    <label htmlFor="cryptoWallet">Crypto Wallet</label>
                                    <select
                                        id="cryptoWallet"
                                        name="cryptoWallet"
                                        className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        
                                    >
                                        <option>Choose crypto wallet</option>
                                        <option>BTC</option>
                                        <option>ETH</option>
                                        <option>USDT</option>
                                        <option>XRP</option>
                                    </select>
                    </div>

                           <div className='py-2'>
                                    <label htmlFor="cryptoChannel">Network Channel</label>
                                    <select
                                        id="cryptoChannel"
                                        name="cryptoChannel"
                                        className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        
                                    >
                                        <option>Choose Network Channel</option>
                                        <option>Bitcoin</option>
                                        <option>ERC20</option>
                                        <option>TRC20</option>
                                        <option>BEP20</option>
                                        <option>BEP2</option>
                                    </select>
                                </div>  
                                <div className="grid py-2 items-center">
                                    <label htmlFor='address'>Wallet Address:</label>
                                    <div className='flex items-center space-x-2 py-1'>
                                        <input
                                            type="text"
                                            id='address'
                                            
                                            className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                 />
                                                    
                                </div>
                                </div>                  
                    <button
                      type="submit"
                               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[--bg-color] bg-[--button-color] " >
                      Update Password
                     </button> 

                </div>
                </AddAddressModal>

                <AddCardModal showAddCardModal={showAddCardModal} onClose={() => setShowAddCardModal(false)} >
                <div className='grid gap-4'>
                                    <div>
                                        <label htmlFor="cardNum">Card Number</label>
                                        <input
                                            type="text"
                                            id="cardNum"
                                            name="cardNum"
                                            className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Enter card number"
                                            value={cardNum} // Bind value to state
                                            onChange={(e) => setCardNum(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="expiryDate">Expiry Date</label>
                                        <input
                                            type="text"
                                            id="expiryDate"
                                            name="expiryDate"
                                            className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="MM/YY"
                                            value={expiryDate} // Bind value to state
                                            onChange={(e) => setExpiryDate(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="cvv">CVV</label>
                                        <input
                                            type="text"
                                            id="cvv"
                                            name="cvv"
                                            className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="123"
                                            value={cvv} // Bind value to state
                                             onChange={(e) => setCvv(e.target.value)} 
                                        />
                                    </div>
                                    <button
                                       type="submit"
                                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[--bg-color] bg-[--button-color] " >
                                       Update Password
                                     </button> 

                </div>
                </AddCardModal>
        </div>
    );
}

export default WalletCard;
