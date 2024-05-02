import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormData {
    amount: string;
    accountType: string;
    paymentMethod: string;
    cryptoWallet: string;
    transactionPin: string;
}

const Withdraw = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        amount: '',
        accountType: '',
        paymentMethod: '',
        cryptoWallet: '',
        transactionPin: ''
    });
    const [accountSelected, setAccountSelected] = useState<boolean>(false);
    const [showPaymentMethod, setShowPaymentMethod] = useState<boolean>(false);
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
            setFormData(prevState => ({
                ...prevState,
                paymentMethod: '',
                cryptoWallet: '',
                transactionPin: ''
            }));
            setShowPaymentMethod(true);
            setShowTransactionPin(true);
        } else if (name === 'paymentMethod') {
            setShowTransactionPin(true);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/overview');
    };

    return (
        <section className="relative  min-h-[30rem] w-screen flex md:flex-row  grid-cols-2 items-center justify-center">
            <div className=" grid justify-between ">
                <div className="max-w-[120rem] grid justify-between py-10 gap-6 mx-4">
                    <div>
                        <div className="grid items-center justify-center ">
                            <div className="">
                                <h2 className="mb-6 text-start text-2xl font-semibold text-gray-900">Withdraw</h2>
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
                                                    <option>Cash withdrawal</option>
                                                    <option>Card withdrawal</option>
                                                    <option>Crypto withdrawal</option>
                                                </select>
                                            </div>
                                        )}

                                        {formData.paymentMethod === 'Card withdrawal' && (
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Withdraw;
