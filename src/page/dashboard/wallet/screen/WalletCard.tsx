import {useState, useEffect} from 'react'
import dots from '../../../../assets/dots.svg'
import AddAddressModal from './AddAddressModal';
import AddCardModal from './AddCardModal';
import { Oval } from 'react-loader-spinner'
import { ref, get, } from 'firebase/database';
import { database } from '../../../../firebase';
import Logo from '../../../../assets/logo2.png';

type Card = {
    cardNum: string;
    expiryDate: string;
    cvv: string;
    key: string;
  };
  
  type Address = {
    cryptoWallet: string;
    cryptoChannel: string;
    address: string;
    key: string;
  };

  type Errors = {
    cardNum?: string;
    expiryDate?: string;
    cvv?: string;
  };
  


const WalletCard = () => {
    const [formInput, setFormInput] = useState(() => {
        const savedFormInput = localStorage.getItem('formInput');
        return savedFormInput ? JSON.parse(savedFormInput) : {
            cardNum: '',
            expiryDate: '',
            cvv: '',   
            key: ''    
        };
    });

    const [formAddress, setFormAddress] = useState(() => {
        const savedFormAddress = localStorage.getItem('formAddress');
        return savedFormAddress ? JSON.parse(savedFormAddress) : {
            cryptoWallet: '',
            cryptoChannel: '',
            address: '',
            key: ''
        };
    });


    const [icon, setIcon] = useState<boolean>(false);
    const [add, setAdd] = useState<boolean>(false);
    const [showAddCardModal, setShowAddCardModal] = useState<boolean>(false);
    const [showAddAddressModal, setShowAddAddressModal] = useState<boolean>(false);
    const [showCard, setShowCard] = useState<boolean>(() => {
        const savedShowCard = localStorage.getItem('showCard');
        return savedShowCard ? JSON.parse(savedShowCard) : false;
    });
    const [showAddress, setShowAddress] = useState<boolean>(() => {
        const savedShowAddress = localStorage.getItem('showAddress');
        return savedShowAddress ? JSON.parse(savedShowAddress) : false;
    });
    const [card, setCard] = useState<Card[]>(() => {
        const savedCard = localStorage.getItem('card');
        return savedCard ? JSON.parse(savedCard) : [];
    });
    const [address, setAddress] = useState<Address[]>(() => {
        const savedAddress = localStorage.getItem('address');
        return savedAddress ? JSON.parse(savedAddress) : [];
    });
  const [loading,setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({ });


  const url1 = "https://anthstone-default-rtdb.firebaseio.com/CardData.json"
  const url2 = "https://anthstone-default-rtdb.firebaseio.com/AddressData.json"


    const toggleAdd = (): void => {
        setAdd(!add)
    }   
    const toggleIcon = (): void => {
        setIcon(!icon)
    }

    useEffect(() => {
        const fetchWallets = async () => {
            const userId = sessionStorage.getItem('userId');
            try {
                const CardRef = ref(database, 'CardData');
                const AddressRef = ref(database, 'AddressData');

                const cardSnapshot = await get(CardRef);
                const addressSnapshot = await get(AddressRef);

                const cardData: Card[] = [];
                const addressData: Address[] = [];

                if (cardSnapshot.exists()) {
                    cardSnapshot.forEach((childSnapshot) => {
                        const userKey = childSnapshot.key;
                        const data = childSnapshot.val();  
                        if (data.userId === userId) {
                            cardData.push({
                                cardNum: data.cardNum,
                                expiryDate: data.expiryDate,
                                cvv: data.cvv,
                                key: userKey,
                            });
                        }
                    });
                }

                if (addressSnapshot.exists()) {
                    addressSnapshot.forEach((childSnapshot) => {
                        const userKey = childSnapshot.key;
                        const data = childSnapshot.val();   
                        if (data.userId === userId) {
                            addressData.push({
                                cryptoWallet: data.cryptoWallet,
                                address: data.address,
                                cryptoChannel: data.cryptoChannel,
                                key: userKey,
                            });
                        }
                    });
                }
                setCard(cardData.slice(0, 1));
                setAddress(addressData.slice(0, 3));
            } catch (error) {
                console.error('Error fetching wallets:', error);
            }
        };
        fetchWallets();
    }, []);

    useEffect(() => {
        localStorage.setItem('formInput', JSON.stringify(formInput));
        localStorage.setItem('formAddress', JSON.stringify(formAddress));
        localStorage.setItem('card', JSON.stringify(card));
        localStorage.setItem('address', JSON.stringify(address));
        localStorage.setItem('showCard', JSON.stringify(showCard));
        localStorage.setItem('showAddress', JSON.stringify(showAddress));
    }, [formInput, formAddress, card, address, showCard, showAddress]);

    useEffect(() => {
        // Simulate some asynchronous operation
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }, []);
    
      const validateCardInput = (): boolean => {
        const errors: Errors = {
            cardNum: '',
            expiryDate: '',
            cvv: ''
        };
       let isValid = true;

        if (!formInput.cardNum.trim()) {
            errors.cardNum = "card number is required";
            isValid = false;
        } else if (!/^\d{13,19}$/.test(formInput.cardNum)) {
            errors.cardNum = "card number is invalid";
            isValid = false
        }

        if (!formInput.expiryDate.trim()) {
            errors.expiryDate = "expiry date is required";
            isValid = false;
        } else if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(formInput.expiryDate)) {
            errors.expiryDate = "expiry date is invalid";
            isValid = false
        }

        if (!formInput.cvv.trim()) {
            errors.cvv = "cvv is required";
            isValid = false;
        } else if (!/^\d{3,4}$/.test(formInput.cvv)) {
            errors.cvv = "cvv is invalid";
            isValid = false
        }
       
        setErrors(errors);
        return isValid;
    };

    const addCard = async () => {
        setLoading(true);

        if (!validateCardInput()) {
            setLoading(false); 
            return;
        }
        try {
            if (formInput.cardNum.trim() === '' || formInput.expiryDate.trim() === '' || formInput.cvv.trim() === '') {
                alert("please fill out all fields");    
                setLoading(false);             
                return;
            }

            const resp = await fetch(url1, {
                method: 'POST',
                headers: { "content-Type": "application/json"},
                body: JSON.stringify(formInput)
            })

            if (resp) {
                const updateCard = [...card, formInput].slice(0, 1); // Ensure only one card
                setCard(updateCard);
                setFormInput({
                    cardNum: '',
                    expiryDate: '',
                    cvv: '',

                })
                setLoading(false); 
                setShowCard(!showCard)
            } else {
                alert("error in Firebase");    
                setLoading(false);         
            }
            
        } catch(error) {
            console.error('Error adding wallet:', error)
        }

    };


    const addAddress = async () => {
        setLoading(true);
        try {
            if (formAddress.cryptoWallet.trim() === '' || formAddress.cryptoChannel.trim() === '' || formAddress.address.trim() === '') {
                alert("please fill out all fields");
                setLoading(false); 
                return;
            }

            const resp = await fetch(url2, {
                method: 'POST',
                headers: { "content-Type": "application/json"},
                body: JSON.stringify(formAddress)
            })

            if (resp) {
                const updateAddress = [...address, formAddress].slice(0, 3);  // Ensure only three addresses
                setAddress(updateAddress);
                setFormAddress({
                    cryptoWallet: '',
                    cryptoChannel: '',
                    address: '',

                })
                setLoading(false); 
                setShowAddress(!showAddress)
            } else {
                alert("error in Firebase");
                setLoading(false); 
            }
        } catch(error) {
            console.error('Error adding wallet:', error)
        }
    };

    return (
        <div className='grid gap-6 '>
            
            <div className='grid items-center justify-center gap-6 md:grid-cols-2 max-w-screen-lg mx-auto'>

                <div className='grid  rounded-2xl  bg-[--transparent] w-[20rem] h-[15rem] md:w-[30rem] md:h-[20rem] outline-dashed outline-2 outline-offset-2'>
                <div onClick={toggleIcon} className='absolute m-2 '>
                        <img src={dots} alt='' className='w-[24px]'/>
                    </div>
                    {icon && (
                     <div className="absolute m-6 h-[3rem] rounded-lg bg-[#ededed] grid items-center justify-center  w-[8rem]">
                      <ul className='grid p-2 items-center cursor-pointer'>
                        <li onClick={() => setShowAddCardModal(true)} className="flex items-center gap-2 ">
                             <p className='text-lg '>+</p>
                            <p className='text-md '>Add Card</p>
                          
                        </li>
                      </ul>   
                    </div>
                        )}
                    
                    <div className='grid justify-center items-center gap-1'>
                        {showCard ? (
                            <div>
                                {card.map((item, index) => (
                            <div key={index} className='w-[25rem] h-[15rem] bg-[#131679] rounded-lg grid justify-center items-center' >
                                <div className='flex justify-end p-4 '>
                                    <img src={Logo} alt='' className='w-[4rem]'/>
                                </div>
                            <div className='w-[20rem] h-[10rem] grid justify-center items-center'>
                            <p className='font-bold text-xl text-white' > {item.cardNum}</p>
                            <div className='flex justify-between items-center'>
                                <div className='grid justify-between' >
                                <p className='text-sm text-white'> Expiry Date:</p>
                                <span className='font-semibold text-xl text-white'>{item.expiryDate}</span>
                                </div>
                                <div className='grid' >
                                <p className='text-sm text-white'> cvv:</p>
                                <span className='font-semibold text-xl text-white'>{item.cvv}</span>
                                </div>

                            </div>                            
                            </div>
                            </div>
                        ))}
                            </div>
                        ) :<h2 className='text-sm  text-center'>Add Card</h2>}
                    </div>
                </div>

                <div className='grid  rounded-2xl  bg-[--transparent] w-[20rem] h-[15rem] md:w-[30rem] md:h-[20rem] outline-dashed outline-2 outline-offset-2'>
                <div onClick={toggleAdd} className='absolute m-2 '>
                        <img src={dots} alt='' className='w-[24px]'/>
                    </div>
                    {add && (
                     <div className="absolute h-[3rem] m-6 rounded-lg bg-[#ededed] grid items-center justify-center  w-[8rem]">
                      <ul className='grid p-2 items-center cursor-pointer'>
                        <li onClick={() => setShowAddAddressModal(true)}  className="flex items-center gap-2 ">
                             <p className='text-lg '>+</p>
                            <p className='text-md '>Add Address</p>
                        </li>
                      </ul>   
                    </div>
                )}
                    <div className='grid justify-center items-center gap-1'>
                       {showAddress ? (
                       <div>
                        {address.map((item, index) => (
                            <div key={index} >
                                <div >
                                <p> Crypto Wallet : <span>{item.cryptoWallet}</span></p>
                                 <p> Crypto Channel :<span>{item.cryptoChannel}</span></p>
                                  <p> Wallet address :<span>{item.address}</span></p>
                                </div>
                            </div>
                        ))}
                       </div>
                       ): <h2 className='text-sm text-center'>Add wallet address</h2>}
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
                                        value={formAddress.cryptoWallet}
                                        onChange={(e) => setFormAddress({...formAddress, cryptoWallet: e.target.value})}
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
                                        value={formAddress.cryptoChannel}
                                        onChange={(e) => setFormAddress({...formAddress, cryptoChannel: e.target.value})}
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
                                            name='address'
                                            value={formAddress.address}
                                            onChange={(e) => setFormAddress({...formAddress, address: e.target.value})}
                                            className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                 />
                                                    
                                </div>
                                </div>                  
                    <button
                      type="submit"
                      onClick={addAddress}
                               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[--bg-color] bg-[--button-color] " >
                      {loading ? <Oval visible={true}  height="20"  width="20"  color="#ffff"  ariaLabel="oval-loading"  wrapperStyle={{}}  wrapperClass=""/> : 'Update Password'}
                     </button> 

                </div>
                </AddAddressModal>

                <AddCardModal loading={loading} onCvvChange={(e) => setFormInput({...formInput, cvv: e.target.value})} onExpiryDateChange={(e) => setFormInput({...formInput, expiryDate: e.target.value})} onCardNumChange={(e) => setFormInput({...formInput, cardNum: e.target.value})} addCard={addCard} errors={errors} showAddCardModal={showAddCardModal} onClose={() => setShowAddCardModal(false)}  cardNum={formInput.cardNum}   expiryDate={formInput.expiryDate}   cvv={formInput.cvv} />
              
               
        </div>
    );
}

export default WalletCard;
