import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormData {
    amount: string;
    accountType: string;
    cryptoWallet: string;
    transactionPin: string;
}

const Transfer = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        amount: '',
        accountType: '',
        cryptoWallet: '',
        transactionPin: ''
    });
    const [accountSelected, setAccountSelected] = useState<boolean>(false);
    const [showCryptoWallet, setShowCryptoWallet] = useState<boolean>(false);
    const [showTransactionPin, setShowTransactionPin] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        if (name === 'amount' && value) {
            setAccountSelected(true);
        } else if (name === 'accountType') {
            setShowCryptoWallet(true);
        }  else if (name === 'cryptoWallet') {
            setShowTransactionPin(true);
        }       
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/overview');
    };

    return (
        <section   className='md:mt-20  min-h-[30rem] top-0  overflow-x-hidden overflow-y-auto '>
        <div className="grid justify-center items-center">
           <h2 className="mb-6 text-start text-2xl font-semibold text-gray-900">Transfer</h2>
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

                                       

                                        

                                        

                                        {showCryptoWallet  && (
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
                                                    <option>XRP</option>
                                                </select>
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
                                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[--bg-color] bg-[--button-color]"
                                            disabled={!accountSelected}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>               
        </section>
    );
}

export default Transfer
