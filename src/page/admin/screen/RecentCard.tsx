import {  useState, useEffect } from "react";
import remove from '../../../assets/delete.svg';
import AddWallet from "./AddWallet";
import { database } from '../../../firebase';
import { ref, get, } from 'firebase/database';




interface WalletData {
    cryptoWallet: string;
    walletAddress: string;
    cryptoChannel: string;
    key: string;
}

const RecentCard = () => {
    const [formInput, setFormInput] = useState<WalletData>({
        cryptoWallet: '',
        walletAddress: '',
        cryptoChannel: '',
        key: '',
    });

    const [wallet, setWallet] = useState<WalletData[]>([]);
    const [icon, setIcon] = useState(false);

    const toggleIcon = () => {
        setIcon(!icon);
    };

  

    useEffect(() => {
        const fetchWallets = async () => {
            try {
                const usersRef = ref(database, 'AdminData');
                const snapshot = await get(usersRef); 
                const walletData: WalletData[] = [];
                if (snapshot.exists()) {
                    snapshot.forEach((childSnapshot) => {
                        const userKey = childSnapshot.key;
                        const data = childSnapshot.val();                                          
                        walletData.push({
                            cryptoWallet: data.cryptoWallet,
                            walletAddress: data.walletAddress,
                            cryptoChannel: data.cryptoChannel,
                            key: userKey,
                        });
                    });
                }
                setWallet(walletData);
            } catch (error) {
                console.error('Error fetching wallets:', error);
            }
        };
        fetchWallets();        
    }, []);

    const url = "https://unitedtreasury-bf323-default-rtdb.firebaseio.com/AdminData.json"
   
    
   
    const addWallet = async () => {
        try {
            if (formInput.cryptoWallet.trim() === '' || formInput.walletAddress.trim() === '' || formInput.cryptoChannel.trim() === '') {
                alert("Please fill out all fields");
                return; // Prevent further execution if inputs are empty
            }
    
            const resp = await fetch(url, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formInput)
            });
    
            if (resp.ok) {
                const updatedWallet = [...wallet, formInput];
                setWallet(updatedWallet);
                setFormInput({
                    cryptoWallet: '',
                    walletAddress: '',
                    cryptoChannel: '',
                    key: '',
                });
                alert("Successful");
            } else {
                alert("Error in Firebase");
            }
        } catch (error) {
            console.error('Error adding wallet:', error);
        }
    };
 



     const removeWallet = async (key: string) => {   
        console.log("wallet", key)
        const url1 = `https://unitedtreasury-bf323-default-rtdb.firebaseio.com/AdminData/${key}.json` 
        try {            
            const resp = await fetch(url1, {
                method: 'DELETE',
                headers: {"Content-Type": "application/json"},                
            });
         
            if (resp.ok) { 
                console.log('updatedWallet');                              
                const updatedWallets = wallet.filter(item => item.key !== key);
                setWallet(updatedWallets);             
                alert("Details removed");                
            } else {
                alert("Error in Firebase"); 
            }           
        
        } catch (error) {
            console.error('Error removing wallet:', error);
        }   

        
    };
   

   
    

   

   
    return (
        <div>
            <div className="w-full grid justify-between md:grid-cols-2">
                <p className="font-semibold text-lg">Add Wallet Address</p>

                <div className="grid justify-end">
                <button onClick={toggleIcon} className="bg-[--bg-color] w-[7rem] p-2 text-[--text-extra] rounded-md ">
                    + Add
                </button>
                </div>
                
            </div>
    
            <div className='bg-[--layer-color]  my-8 rounded-lg p-4'>
                <p className='font-bold text-lg'>Wallet Details</p>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full mt-2">
                        <thead className='border-b-2'>
                            <tr>
                                <th className="px-4 py-2">Crypto</th>
                                <th className="px-4 py-2">Network</th>
                                <th className="px-4 py-2">Address</th>  
                                <th className="px-4 py-2"> </th>   
                            </tr>
                        </thead>
                        <tbody className='border-t-2 mt-4'>
                            {wallet.map((item, index) => (
                                <tr key={index} className="text-center ">
                                    <td className="px-4 py-2 text-black">{item.cryptoWallet}</td>
                                    <td className="px-4 py-2 text-black">{item.cryptoChannel}</td>
                                    <td className="px-4 py-2 text-black">{item.walletAddress}</td>
                                    <td className="px-4 py-2">
                                        <div className="flex gap-3">
                                            <p onClick={() => removeWallet(item.key)} className="px-4 py-2">
                                                <img src={remove} alt="" className="w-[24px]"/>
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
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