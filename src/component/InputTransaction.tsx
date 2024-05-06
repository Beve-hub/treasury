import  { useState } from 'react'
import copy from '../assets/copy.svg'
interface FormInput {
    amount: string;
    accountType: string;
    paymentMethod: string;
    cryptoWallet: string;
    cryptoChannel: string;
    walletAddress: string;
}

const InputTransaction = () => {
    const [formInput, setFormInput] = useState<FormInput>({
        amount: '',
        accountType: '',
        paymentMethod: '',
        cryptoWallet: '',
        cryptoChannel: '',
        walletAddress: '',
    });
    const [accountSelected, setAccountSelected] = useState<boolean>(false);
    const [walletAddress, setWalletAddress] = useState<string>('');
    const [cryptoChannel, setCryptoChannel] = useState<string>('');
    const [cryptoChannelSelected, setCryptoChannelSelected] = useState<boolean>(false);
    
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const handleCryptoChannelChange = (value: string) => {
        setFormInput({ ...formInput, cryptoChannel: value });
    
        if (value) {
            setCryptoChannelSelected(true);    
            
            switch (value) {
                case 'BTC':
                    setWalletAddress('BTC Wallet Address');
                    break;
                case 'ETH':
                    setWalletAddress('ETH Wallet Address');
                    break;
                case 'USDT':
                    setWalletAddress('USDT Wallet Address');
                    break;
                default:
                    setWalletAddress('');
            }
        } else {
            setCryptoChannelSelected(false);
            setWalletAddress(''); 
            setCryptoChannel('');
        }
    };

    const handleCopyAddress = () => {        
        navigator.clipboard.writeText(walletAddress);
        alert('Copied to clipboard');
    };
    return (
        <div className=" w-screen grid items-center justify-center bg-gray-50 sm:px-6 lg:px-8">
                <div className="w-full">
                    
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="grid gap-4">
                            <div>
                                <label htmlFor="amount">Amount</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-700">$</span>
                                    <input
                                        id="amount"
                                        name="amount"
                                        type="number"
                                        className="pl-10 block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                                        className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        onChange={handleInputChange}
                                    >
                                        <option>Choose Account Type</option>
                                        <option>Savings Account</option>
                                        <option>Checking Account</option>
                                        <option>Investment Account</option>
                                    </select>
                                </div>
                            )}

                            {formInput.accountType && (
                                <div>
                                    <label htmlFor="paymentMethod">Payment method</label>
                                    <select
                                        id="paymentMethod"
                                        name="paymentMethod"
                                        className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                                <p className='max-w-[20rem]'>Visit United Treasury Bank near you and make your deposit</p>
                            )}

                            {formInput.paymentMethod === 'Card Deposit' && (
                                <>
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

                            {formInput.paymentMethod === 'Crypto Deposit' && (
                                <div>
                                    <label htmlFor="cryptoWallet">Crypto Wallet</label>
                                    <select
                                        id="cryptoWallet"
                                        name="cryptoWallet"
                                        className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        onChange={(e) => handleCryptoChannelChange(e.target.value)}
                                    >
                                        <option>Choose crypto wallet</option>
                                        <option>BTC</option>
                                        <option>ETH</option>
                                        <option>USDT</option>
                                    </select>
                                    {cryptoChannelSelected && (
                                        
                                        <div className='py-2'>
                                            <div className="grid py-2 items-center">
                                        <label htmlFor='cryptoAddress'>Network Channel:</label>
                                        <div className='flex items-center space-x-2 py-1'>
                                            <input
                                                type="text"
                                                id="cryptoAddress"
                                                value={cryptoChannel}
                                                placeholder={formInput.cryptoChannel}
                                                readOnly
                                                className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            />
                                            <div
                                                                                                  className="flex items-center justify-center"
                                                onClick={handleCopyAddress}
                                            >
                                                <img src={copy} alt='' className='w-[24px]'/>
                                            </div>     
                                        </div>
                                    </div>

                                    <div className="grid py-2 items-center">
                                    <label htmlFor='address'>Wallet Address:</label>
                                    <div className='flex items-center space-x-2 py-1'>
                                        <input
                                            type="text"
                                            id='address'
                                            value={walletAddress}
                                            placeholder={formInput.walletAddress}
                                            readOnly
                                            className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        />
                                        <div
                                                                                              className="flex items-center justify-center"
                                            onClick={handleCopyAddress}
                                        >
                                            <img src={copy} alt='' className='w-[24px]'/>
                                        </div>     
                                    </div>
                                </div>
                                        </div>
                                    )}
                                    
                                </div>
                            )}
                        </div>
                        
                    </form>
                </div>
            </div>
    )
}

export default InputTransaction
