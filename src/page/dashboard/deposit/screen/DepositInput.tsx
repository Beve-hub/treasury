import { useState } from 'react';
import copy from '../../../../assets/copy.svg';
import { useNavigate } from 'react-router-dom';


interface FormData {
    amount: string;
    accountType: string;
    paymentMethod: string;
    cryptoWallet: string;
    cryptoChannel: string;
}

const DepositInput = () => {
    const [formData, setFormData] = useState<FormData>({
        amount: '',
        accountType: '',
        paymentMethod: '',
        cryptoWallet: '',
        cryptoChannel: ''
    });
    const [accountSelected, setAccountSelected] = useState<boolean>(false);
    const [walletAddress, setWalletAddress] = useState<string>('');
    const [cryptoChannelSelected, setCryptoChannelSelected] = useState<boolean>(false);
    
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
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
        navigate('/overview');
    };

    const handleCryptoChannelChange = (value: string) => {
        setFormData({ ...formData, cryptoChannel: value });
    
        if (value) {
            setCryptoChannelSelected(true);    
            
            switch (value) {
                case 'Bitcoin':
                    setWalletAddress('Bitcoin Wallet Address');
                    break;
                case 'ERC20':
                    setWalletAddress('ERC20 Wallet Address');
                    break;
                case 'TRC20':
                    setWalletAddress('TRC20 Wallet Address');
                    break;
                case 'BEP20':
                    setWalletAddress('BEP20 Wallet Address');
                    break;
                case 'BEP2':
                    setWalletAddress('BEP2 Wallet Address');
                    break;
                default:
                    setWalletAddress('');
            }
        } else {
            setCryptoChannelSelected(false);
            setWalletAddress(''); 
        }
    };

    const handleCopyAddress = () => {
        // Logic to copy wallet address to clipboard
        navigator.clipboard.writeText(walletAddress);
        alert('Copied to clipboard');
    };
    return (
        <div>           

            <div className="grid items-center justify-center ">
                <div className="">
                <h2 className="mb-6 text-start text-2xl font-semibold text-gray-900">Deposit</h2>
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
                                        <option>Checking Account</option>
                                        <option>Investment Account</option>
                                    </select>
                                </div>
                            )}

                            {formData.accountType && (
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

                            {formData.paymentMethod === 'Cash Deposit' && (
                                <p className='max-w-[20rem]'>Visit United Treasury Bank near you and make your deposit</p>
                            )}

                            {formData.paymentMethod === 'Card Deposit' && (
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

                            {formData.paymentMethod === 'Crypto Deposit' && (
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
                                        <option>XRP</option>
                                    </select>
                                    {cryptoChannelSelected && (
                                        <div className='py-2'>
                                            <label htmlFor="cryptoChannel">Network Channel</label>
                                            <select
                                                id="cryptoChannel"
                                                name="cryptoChannel"
                                                className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                onChange={(e) => handleCryptoChannelChange(e.target.value)}
                                            >
                                                <option>Choose Network Channel</option>
                                                <option>Bitcoin</option>
                                                <option>ERC20</option>
                                                <option>TRC20</option>
                                                <option>BEP20</option>
                                                <option>BEP2</option>
                                            </select>
                                        </div>
                                    )}
                                    {walletAddress && (
                                        <div className="grid py-2 items-center">
                                            <label>Wallet Address:</label>
                                            <div className='flex items-center space-x-2 py-1'>
                                                <input
                                                    type="text"
                                                    value={walletAddress}
                                                    readOnly
                                                    className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                />
                                                <button
                                                    type="button"
                                                    className="flex items-center justify-center"
                                                    onClick={handleCopyAddress}
                                                >
                                                    <img src={copy} alt='' className='w-[24px]'/>
                                                </button>     
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[--bg-color] bg-[--button-color]"
                                disabled={!accountSelected}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
    )
}

export default DepositInput
