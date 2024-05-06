import {  useState} from "react";
import edit from '../../../assets/edit.svg';
import remove from '../../../assets/delete.svg';
import AddWallet from "./AddWallet";

interface Wallet {
    cryptoWallet: string;
    walletAddress: string;
    cryptoChannel: string;
}

const RecentCard = () => {
    const [formInput, setFormInput] = useState<Wallet>({
        cryptoWallet: '',
        walletAddress: '',
        cryptoChannel: '',
    });

    const [wallet, setWallet] = useState<Wallet[]>([]);
    const [icon, setIcon] = useState(false);

    const toggleIcon = () => {
        setIcon(!icon);
    };

    
    
    const addWallet = () => {
        if (formInput.cryptoWallet.trim() !== '' && formInput.walletAddress.trim() !== '' && formInput.cryptoChannel.trim() !== '') {
            console.log('updatedWallet')
            const updatedWallet = [...wallet, formInput];
            setWallet(updatedWallet);
            setFormInput({
                cryptoWallet: '',
                walletAddress: '',
                cryptoChannel: '',
            });         
            
        }
    };
    
   



    const removeWallet = (index: number) => {
        const updatedWallet = wallet.filter((_, i) => i !== index);
        setWallet(updatedWallet);
    };

    const editWallet = (index: number, editedWallet: Wallet) => {
        const updatedWallet = [...wallet];
        updatedWallet[index] = editedWallet;
        setWallet(updatedWallet);
    };

   
    return (
        <div>
            <div className="flex justify-between">
                <p className="font-semibold text-lg">Add Wallet Address</p>
                <button onClick={toggleIcon} className="bg-[--bg-color] w-[7rem] p-2 text-[--text-extra] rounded-md">
                    + Add
                </button>
            </div>

            <div className=' bg-[--layer-color] my-8 overflow-x-auto rounded-lg p-4'>
                <ul>
                    {wallet.map((walletItem, index) => (
                        <li key={index} className="grid gap-4">
                            <div className="w-[60rem] py-2 justify-between flex gap-2 items-center">
                                <p>{walletItem.cryptoWallet}</p>
                                <p>{walletItem.cryptoChannel}</p>
                                <p>{walletItem.walletAddress}</p>
                                <div className="flex gap-3">
                                <p onClick={() => editWallet(index, formInput)}>
                                    <img src={edit} alt="" className="w-[24px]"/>
                                </p>
                                <p onClick={() => removeWallet(index)}>
                                    <img src={remove} alt="" className="w-[24px]"/>
                                </p>
                                </div>                                
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <AddWallet toggleIcon={icon} onClose={() => setIcon(false)}>
                <div>
                    <div>
                        <label htmlFor="cryptoWallet">Crypto Wallet</label>
                        <select
                            id="cryptoWallet"
                            name="cryptoWallet"
                            className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            value={formInput.cryptoWallet}
                            onChange={(e) => setFormInput({ ...formInput, cryptoWallet: e.target.value })}
                        >
                            <option>Choose crypto wallet</option>
                            <option>BTC</option>
                            <option>ETH</option>
                            <option>USDT</option>
                         </select>
                    </div>
                    
                    <div>
                        <label htmlFor="cryptoChannel">Crypto Channel</label>
                        <select
                            id="cryptoChannel"
                            name="cryptoChannel"
                            className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            value={formInput.cryptoChannel}
                            onChange={(e) => setFormInput({ ...formInput, cryptoChannel: e.target.value })}
                        >
                            <option>Choose crypto channel</option>
                            <option>Bitcoin</option>
                            <option>TRC20</option>
                            <option>ERC20</option>
                            <option>BEP20</option>
                            
                        </select>
                    </div>

                    <div>
                        <label htmlFor="walletAddress">Wallet Address</label>
                        <input
                            id="walletAddress"
                            name="walletAddress"
                            type="text"
                            className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            value={formInput.walletAddress}
                            onChange={(e) => setFormInput({ ...formInput, walletAddress: e.target.value })}
                        />
                    </div>
                    <button
                type="submit"
                onClick={addWallet}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[--text-extra] bg-[--bg-color]" >
                Update
              </button>
                </div>
            </AddWallet>
        </div>
    );
};

export default RecentCard;
