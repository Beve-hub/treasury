import { useEffect, useState } from 'react';
import { database } from '../../../firebase';
import { ref, get } from 'firebase/database';
import Logo from '../../../assets/logo2.png';


type Card = {
    cardNum: string;
    expiryDate: string;
    cvv: string;
  };
  


const AdminCard = () => {
    const [card, setCard] = useState<Card[]>([]);

    useEffect(() => {
        const fetchWallets = async () => {
            try {
                const CardRef = ref(database, 'CardData');

                const cardSnapshot = await get(CardRef); 

                const cardData: Card[] = [];


                if (cardSnapshot.exists()) {
                    cardSnapshot.forEach((childSnapshot) => {

                        const data = childSnapshot.val();  
                        cardData.push({
                            cardNum: data.cardNum,
                            expiryDate: data.expiryDate,
                            cvv: data.cvv,
                        });                                       
                        
                    });
                }

                setCard(cardData); // Ensure only one card
      
               
            } catch (error) {
                console.error('Error fetching wallets:', error);
            }
        };
        fetchWallets();        
    }, []);
    
    return (
        <div>
            <p className='font-bold text-xl py-4'>Client Card</p>
            <div className='grid justify-center items-center gap-1 py-6'>
               <div className='grid md:grid-cols-2 gap-3 '>
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
            </div>
        </div>
    )
}

export default AdminCard
