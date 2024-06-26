import { useEffect, useState } from 'react';
import { database, firestore } from '../firebase';
import { ref, get, push } from 'firebase/database';
import Copy from '../assets/copy.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { doc, getDoc } from 'firebase/firestore';
import LiveChat from '../page/LandingPage/chat/LiveChat';

interface UserData {
    cryptoWallet: string;
    cryptoChannel: string;
    walletAddress: string;
    status: string;
}

const InputTransaction = () => {
    const [formInput, setFormInput] = useState({
        amount: '',
        currency: '',
        accountType: '',
        paymentMethod: '',
        cryptoWallet: '',
        cryptoChannel: '',
        walletAddress: '',  
        currencyWallet: '',      
    });

    const navigate = useNavigate();
    const [accountSelected, setAccountSelected] = useState<boolean>(false);
    const [CurrencySelected, setCurrencySelected] = useState<boolean>(false);
    const [cryptoChannelSelected, setCryptoChannelSelected] = useState<boolean>(false);
    const [storedData, setStoredData] = useState<UserData[]>([]);
    const [loading, setLoading] = useState(false);    
    const [firstName, setFirstName] = useState<string>(() => {        
        return localStorage.getItem('firstName') || '';
    });

    const [lastName, setLastName] = useState<string>(() => {        
        return localStorage.getItem('lastName') || '';
    });
    const [accountNumber, setAccountNumber] = useState<string>(() => {
        return localStorage.getItem('accountNumber') || '';
    });
    
    const { state } = useLocation();
    console.log('users', state);  
    const userId = state?.userId || '';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userDocRef = doc(firestore, 'users', userId);
                const snapshot = await getDoc(userDocRef);
                if (snapshot.exists()) {
                    const userDetails = snapshot.data();
                    const newFirstName = userDetails?.firstName || '';
                    const newLastName = userDetails?.lastName || '';
                    const newAccountNumber = userDetails?.accountNumber || '';
                   
                    setFirstName(newFirstName); 
                    setLastName(newLastName); 
                    setAccountNumber(newAccountNumber);   

                    localStorage.setItem('firstName', newFirstName);
                    localStorage.setItem('lastName', newLastName);
                    localStorage.setItem('accountNumber', newAccountNumber);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [userId]);

    
    const url = "https://anthstone-default-rtdb.firebaseio.com/DepositData.json"
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const usersRef = ref(database, 'AdminData');
                const snapshot = await get(usersRef);
                if (snapshot.exists()) {
                    const userData: UserData[] = [];
                    snapshot.forEach((childSnapshot) => {
                        const data = childSnapshot.val();
                        userData.push({
                            cryptoWallet: data.cryptoWallet,
                            cryptoChannel: data.cryptoChannel,
                            walletAddress: data.walletAddress,
                            status: data.status,
                        });
                    });
                    setStoredData(userData);
                } else {
                    console.log('No data available');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

   

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            [name]: value
        });
       

        if (name === 'amount' && value) {
            setAccountSelected(true);
        } else {
            setAccountSelected(true);
        }
    };
    const handleCurrencySelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setCurrencySelected(value !== 'Choose currency wallet');        
        setFormInput({ ...formInput, currencyWallet: value }); // Corrected: set cryptoWallet in formInput
    };

    const handleCryptoWalletSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setCryptoChannelSelected(value !== 'Choose crypto wallet');        
        setFormInput({ ...formInput, cryptoWallet: value }); // Corrected: set cryptoWallet in formInput
    };

    const handleCopyWalletAddress = (walletAddress: string) => {
        navigator.clipboard.writeText(walletAddress)
        .then(() => {
            alert("copied!");
        })
        .catch((error) => {
            alert("Failed to copy address to clipboard: " + error);
        });
    };

    const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormInput(prevState => ({
            ...prevState,
            currency: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();  
        setLoading(true);
        // Get current date and time
        const currentDate = new Date().toISOString();
        const serialId = Math.floor(Math.random() * 1000000);
        const status = 'Pending'
        const userId = sessionStorage.getItem('userId')
       
    
        try {
            const resp = await fetch(url, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({...formInput, date: currentDate, serialId: serialId, status, userId,   }) // Include dateTime in the formInput object
            });
    
            if (formInput.cryptoWallet.trim() !== '' && formInput.walletAddress.trim() !== '' && formInput.cryptoChannel.trim() !== '') {
                const usersRef = ref(database, 'DepositData');
                push(usersRef, { ...formInput, date: currentDate, serialId: serialId, status , userId,  }); // Include dateTime in the pushed data
                setFormInput({
                    amount: '',
                    currency: '',
                    accountType: '',
                    paymentMethod: '',
                    cryptoWallet: '',
                    cryptoChannel: '',
                    walletAddress: '',   
                    currencyWallet: '',                  
                });   
                           
            } 

            if (resp) {
                navigate('/overview')  
                alert("Successful")
            }
            else {
                alert("Please fill in all required fields.");
            }
        } catch (error) {
            console.error('Error adding wallet:', error);
            alert("Error storing details. Please try again.");
        }     
        setLoading(false);
    };
    

    return (
        <div className="w-screen grid items-center justify-center bg-gray-50 sm:px-6 lg:px-8">
            <div className="w-full">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="grid gap-4">
                        <div>
                            <label htmlFor="currency">Amount</label>
                            <div className="relative">
                                <span id="sign" className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-700">
                                <select
                                id="currency"
                                name="currency"
                                onChange={handleCurrencyChange}
                                value={formInput.currency} 
                                >
                                <option value="€">€</option>
                                    <option value="$">$</option>
                                    <option value="Kr">Kr</option>               
                                </select>
                                </span>
                                <input
                                    id="amount"
                                    name="amount"
                                    type="number"
                                    className="border-l-4 border-l-[--bg-color]  pl-20 block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="0.00"
                                    value={formInput.amount}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {accountSelected && (
                            <div>
                                <label htmlFor="account">Account Type</label>
                                <select
                                    id="account"
                                    name="accountType"
                                    className="border-l-4 border-l-[--bg-color]  block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    onChange={handleInputChange}
                                >
                                    <option>Choose Account Type</option>
                                    <option>Savings Account</option>
                                    <option>Fixed Account</option>
                                    <option>Business Account</option>
                                    <option>Retirement Account</option>
                                </select>
                            </div>
                        )}

                        {formInput.accountType && (
                            <div>
                                <label htmlFor="paymentMethod">Payment method</label>
                                <select
                                    id="paymentMethod"
                                    name="paymentMethod"
                                    className="border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    onChange={handleInputChange}
                                >
                                    <option>Choose payment method</option>
                                    <option>Cash Deposit</option>
                                    <option>Card Deposit</option>
                                    <option>Crypto Deposit</option>
                                </select>
                            </div>
                        )}

                        {formInput.paymentMethod === 'Cash Deposit' && (
                            <>
                                 <div>
                                                <label htmlFor="currencyWalle">Currency Wallet</label>
                                                <select
                                                    id="currencyWalle"
                                                    
                                                    name="currencyWallet"
                                                    className="border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 mt-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                    onChange={(e) => handleCurrencySelection(e)}
                                                >
                                                    <option>Choose currency wallet</option>
                                                    <option>Euro</option>
                                                    <option>Dollar</option>
                                                    <option>Krona</option>                                                   
                                                </select>
                                            </div>
                                            {CurrencySelected && (
                                                <>
                                                  <div  className='grid gap-4 '>
                                                <div className='flex items-center justify-between'>
                                               <p className='text-sm' >Account Number:</p> <p className='font-semibold'>{accountNumber}</p>
                                                </div>
                                                <div className='flex items-center justify-between'>
                                                <p className='text-sm'>Account Name: </p> 
                                                <p className='font-semibold'>{firstName} {lastName}</p>
                                                </div>
                                                
                                                
                                                
                                            </div>
                                                </>
                                            )}
                                             
                            <p className='max-w-[20rem]'>Visit Anthstone bank  near you and make your deposit</p>
                            </>
                        )}

                        {formInput.paymentMethod === 'Card Deposit' && (
                            <>
                            <div>
                                                <label htmlFor="currencyWallet">Currency Wallet</label>
                                                <select
                                                    id="currencyWallet"
                                                    name="currencyWallet"
                                                    className="border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 mt-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                    onChange={(e) => handleCurrencySelection(e)}
                                                >
                                                    <option>Choose currency wallet</option>
                                                    <option>Euro</option>
                                                    <option>Dollar</option>
                                                    <option>Krona</option>                                                   
                                                </select>
                                            </div>

                                {CurrencySelected && (
                                   <>
                                    <div>
                                    <label htmlFor="cardNumber">Card Number</label>
                                    <input
                                        type="text"
                                        id="cardNumber"
                                        name="cardNumber"
                                        className="border-l-4 border-l-[--bg-color]  block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Enter card number"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="expiryDate">Expiry Date</label>
                                    <input
                                        type="text"
                                        id="expiryDate"
                                        name="expiryDate"
                                        className="border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="MM/YY"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cvv">CVV</label>
                                    <input
                                        type="text"
                                        id="cvv"
                                        name="cvv"
                                        className="border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="123"
                                    />
                                </div>
                                   </> 
                                )}            
                               
                            </>
                        )}

                        {formInput.paymentMethod === 'Crypto Deposit' && (
                            <div>
                                <label htmlFor="cryptoWallet">Crypto Wallet</label>
                                <select
                                    id="cryptoWallet"
                                    name="cryptoWallet"
                                    className="border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    onChange={handleCryptoWalletSelection}
                                >
                                    <option>Choose crypto wallet</option>
                                    <option>BTC</option>
                                    <option>ETH</option>
                                    <option>USDT</option>
                                </select>
                                {cryptoChannelSelected && (
                                    <div className='py-2 '>
                                        {storedData
                                            .filter(item => item.cryptoWallet === formInput.cryptoWallet)
                                            .map((item, index) => (
                                                <div key={index} className='grid gap-4 '>
                                                    <div className='flex items-center justify-between'>
                                                        <p className='text-sm'>Wallet Name: </p> <p className='font-semibold'>{item.cryptoWallet}</p>
                                                    </div>
                                                    <div className='flex items-center justify-between'>
                                                    <p className='text-sm'>Network: </p> 
                                                    <p className='font-semibold'>{item.cryptoChannel}</p>
                                                    </div>
                                                    
                                                    <div className='flex items-center justify-between'>
                                                    <p className='text-sm'>Wallet Address: </p>
                                                       <p className='flex gap-2 font-semibold'>{item.walletAddress} <img src={Copy} alt='' className='w-[24px]' onClick={() => handleCopyWalletAddress(item.walletAddress)}/>  </p>                                                     
                                                                                                             
                                                    </div>
                                                    
                                                </div>
                                            ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <div className='grid items-center justify-center py-3'>
                            <button
                                type="submit"
                                className="w-[20rem] flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[--bg-color] bg-[--button-color]"   
                                disabled={!accountSelected}                         
                            >
                               {loading ? <Oval  visible={true}  height="20" width="20" color="#ffff"  ariaLabel="oval-loading"  wrapperStyle={{}}  wrapperClass=""  />  : 'Submit'}
                            </button>
            </div>
                </form>
                <LiveChat/>
            </div>
        </div>
    )
}

export default InputTransaction;
