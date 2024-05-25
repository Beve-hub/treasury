import { useState } from 'react';
import { database } from '../../../firebase';
import { ref } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import Loaders from '../../../component/Loaders';
import Arrow from '../../../assets/arrow-left.svg'


interface FormData {
    amount: string;
    accountType: string;
    paymentMethod: string;
    cryptoWallet: string;    
    walletAddress: string;
    transactionPin: string;
    accountName: string;
    accountNumber: string;
    bankName: string,
    currency: string,
    currencyWallet: string,
    
}

const Withdraw = () => {
    const [formData, setFormData] = useState<FormData>({
        amount: '',
        accountType: '',
        paymentMethod: '',
        cryptoWallet: '',
        transactionPin: '',       
        walletAddress: '',
        accountNumber: '',
        accountName: '',
        bankName: '',
        currency: '',
        currencyWallet: '',

    });

    const [accountSelected, setAccountSelected] = useState<boolean>(false);
    const [showPaymentMethod, setShowPaymentMethod] = useState<boolean>(false);
    const [showChannel, setShowChannel] = useState<boolean>(false);
    const [showWalletAddress, setShowWalletAddress] = useState<boolean>(false);
    const [showTransactionPin, setShowTransactionPin] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        if (name === 'amount' && value) {
            setAccountSelected(true);
        } else if (name === 'accountType') {
            setFormData(prevState => ({
                ...prevState,
                paymentMethod: '',
                cryptoWallet: '',
                channel: '',
                walletAddress: '',
                transactionPin: '',
                accountName: '',
                accountNumber: '',
                bankName: '',
                currencyWallet: '',
            }));
            setShowPaymentMethod(true);
            setShowTransactionPin(true);           
        } else if (name === 'cryptoWallet') {
            setShowChannel(true);
            setShowWalletAddress(true);
        }
        
    };

    const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData(prevState => ({
            ...prevState,
            currency: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const currentDate = new Date().toISOString();
        const serialId = Math.floor(Math.random() * 1000000);        
        const status = 'Pending'
        const userId = sessionStorage.getItem('userId')
       
        try {
            const url = "https://anthstone-default-rtdb.firebaseio.com/WithdrawData.json";
            const resp = await fetch(url, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({...formData, date: currentDate, serialId: serialId, status, userId  })
            });

            if (formData.cryptoWallet.trim() !== '' && formData.paymentMethod.trim() !== '' && formData.accountType.trim() !== '') {
                const usersRef = ref(database, 'WithdrawData');
               console.log('withdraw', usersRef)
            }
            setFormData({
                amount: '',
                accountType: '',
                currency: '',
                currencyWallet: '',
                paymentMethod: '',
                cryptoWallet: '',
                transactionPin: '',               
                walletAddress: '',
                accountName: '',
                accountNumber: '',
                bankName: '',
            });

            if (resp) {                
                navigate('/overview');
                alert("Successful");
            } else {
                alert("Please fill in all required fields.");
            }
        } catch (error) {
            console.error('Error adding wallet:', error);
            alert("Error storing details. Please try again.");
        }     
        setLoading(false);
    };

    return (
        <section   className='w-screen md:mt-20 bg-[--text-extra] min-h-[30rem] top-0  overflow-x-hidden overflow-y-auto '>
        {loading ? <Loaders/> : (
        <div className='grid   w-screen'>
            <div onClick={() => navigate('/overview')} className='p-6'>
                <img src={Arrow} alt='' className='w-[3rem] bg-[--layer-color] p-3 rounded-3xl' />
            </div>
             <div className="grid justify-center items-center h-[10rem]">
           <h2 className="mb-6 text-start text-2xl font-semibold text-gray-900">Withdraw</h2>
           <form className="space-y-6" onSubmit={handleSubmit}>
               <input type="hidden" name="remember" defaultValue="true" />
               <div className="grid gap-4">
                   <div>
                       <label htmlFor="amount">Amount</label>
                       <div className="relative">
                           <span id="sign" className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-700">
                           <select  id="currency"
                   name="currency"
                   onChange={handleCurrencyChange}
                   value={formData.currency} >
                                <option value="€">€</option>
                                <option value="$">$</option>
                                <option value="Kr">Kr</option>               
                            </select>
                          </span>
                          <input
                              id="amount"
                              name="amount"
                              type="number"
                              className="pl-20 block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                              placeholder="0.00"
                              value={formData.amount}
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
                              className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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

                                        {showPaymentMethod && (
                                            <div>
                                                <label htmlFor="paymentMethod">Payment method</label>
                                                <select
                                                    id="paymentMethod"
                                                    name="paymentMethod"
                                                    className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                    onChange={handleInputChange}
                                                >
                                                    <option>Choose payment method</option>
                                                    <option>Bank withdrawal</option>
                                                    <option>Card withdrawal</option>
                                                    <option>Crypto withdrawal</option>
                                                </select>
                                            </div>
                                        )}
                                        {formData.paymentMethod === 'Bank withdrawal' && (
                                            <>
                                            <div>
                                                <label htmlFor="currencyWallet">Currency Wallet</label>
                                                <select
                                                    id="currencyWallet"
                                                    name="currencyWallet"
                                                    className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                    onChange={(e) => handleInputChange(e)}
                                                >
                                                    <option>Choose currency wallet</option>
                                                    <option>Euro</option>
                                                    <option>Dollar</option>
                                                    <option>Krona</option>                                                   
                                                </select>
                                            </div>
                                                <div>
                                                    <label htmlFor="bankName">Bank Name</label>
                                                    <input
                                                        type="text"
                                                        id="bankName"
                                                        name="bankName"
                                                        className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                        placeholder="Enter bank name"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="accountNumber">Account Number</label>
                                                    <input
                                                        type="text"
                                                        id="accountNumber"
                                                        name="accountNumber"
                                                        className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                        placeholder="Enter account number"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="accountName">Account Name</label>
                                                    <input
                                                        type="text"
                                                        id="accountName"
                                                        name="accountName"
                                                        className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                        placeholder="Enter account name"
                                                    />
                                                </div>
                                            </>
                                        )}
                                        {formData.paymentMethod === 'Card withdrawal' && (
                                            <>
                                            <div>
                                                <label htmlFor="currencyWallet">Crypto Wallet</label>
                                                <select
                                                    id="currencyWallet"
                                                    name="currencyWallet"
                                                    className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                    onChange={(e) => handleInputChange(e)}
                                                >
                                                    <option>Choose currency wallet</option>
                                                    <option>Euro</option>
                                                    <option>Dollar</option>
                                                    <option>Krona</option>                                                   
                                                </select>
                                            </div>
                                                <div>
                                                    <label htmlFor="cardNumber">Card Number</label>
                                                    <input
                                                        type="text"
                                                        id="cardNumber"
                                                        name="cardNumber"
                                                        className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                        placeholder="Enter card number"
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
                                                    />
                                                </div>
                                            </>
                                        )}

                                        {formData.paymentMethod === 'Crypto withdrawal' && (
                                            <div>
                                                <label htmlFor="cryptoWallet">Crypto Wallet</label>
                                                <select
                                                    id="cryptoWallet"
                                                    name="cryptoWallet"
                                                    className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                    onChange={(e) => handleInputChange(e)}
                                                >
                                                    <option>Choose crypto wallet</option>
                                                    <option>BTC</option>
                                                    <option>ETH</option>
                                                    <option>USDT</option>                                                   
                                                </select>
                                            </div>
                                        )}
                                            {showChannel && (
                                            <div>
                                            <label htmlFor="cryptoChannel">Network</label>
                                            <select
                                                id="cryptoChannel"
                                                name="cryptoChannel"
                                                className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                onChange={(e) => handleInputChange(e)}
                                            >
                                                 <option>Choose crypto channel</option>
                                                 <option>Bitcoin</option>
                                                 <option>TRC20</option>
                                                 <option>ERC20</option>
                                                 <option>BEP20</option>                                                  
                                            </select>
                                        </div>
                                        )}
                                        {showWalletAddress && (
                                            <div>
                                                <label htmlFor="walletAddress">Wallet Address</label>
                                                <input
                                                    type="text"
                                                    id="walletAddress "
                                                    name="walletAddress"
                                                    className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                    placeholder="Enter wallet address"
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        )}
                                        {showTransactionPin && (
                                            <div>
                                                <label htmlFor="transactionPin">Transaction Pin</label>
                                                <input
                                                    type="password"
                                                    id="transactionPin"
                                                    name="transactionPin"
                                                    className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                    placeholder="Enter transaction pin"
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center  py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[--text-extra] bg-[--button-color]"
                                        disabled={!accountSelected} >
                                         Submit
                                    </button>

                                    </div>
                                </form>
        </div>
        </div>       
    )}
        </section>
    );
}

export default Withdraw;