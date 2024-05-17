import { useEffect, useState } from 'react';
import { database } from '../../../../firebase';
import { ref, get } from 'firebase/database';
   

interface UserData {
  amount: string,
  accountType: string,
  paymentMethod: string,
  cryptoWallet: string,
  date: string, 
  serialId: string,
  status: string,
  currency: string,
  currencyWallet: string
}

const PaymentRecent = () => {
  const [storedData, setStoredData] = useState<UserData[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      const userId = sessionStorage.getItem('userId')
      try {
        const depositRef = ref(database, 'DepositData' );
        const withdrawalRef = ref(database,  'WithdrawData');
        
        const depositSnapshot = await get(depositRef);
        const withdrawalSnapshot = await get(withdrawalRef)

        const depositData: UserData[] = [];
        const withdrawalData: UserData[] = [];

        if (depositSnapshot.exists()) {          
          depositSnapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();
            if (data.userId === userId) {
              depositData.push({
                amount: data.amount,
                accountType: data.accountType,
                paymentMethod: data.paymentMethod,
                date: formatDate(data.date), // Format the date here
                cryptoWallet: data.cryptoWallet,
                serialId: data.serialId,
                status: data.status,
                currency: data.currency,
                currencyWallet: data.currencyWallet
              });
            }
          });         
      } 

      if (withdrawalSnapshot.exists()) {        
        withdrawalSnapshot.forEach((childSnapshot) => {
          const data = childSnapshot.val();
          if (data.userId === userId) {
            depositData.push({
              amount: data.amount,
              accountType: data.accountType,
              paymentMethod: data.paymentMethod,
              date: formatDate(data.date), // Format the date here
              cryptoWallet: data.cryptoWallet,
              serialId: data.serialId,
              status: data.status,
              currency: data.currency,
              currencyWallet: data.currencyWallet
            });
          }
        });
      
    } 
    setStoredData([...withdrawalData, ...depositData]);

  }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Function to format the date
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is zero-based
    const year = date.getFullYear() % 100; // Get last two digits of year
    return `${day}/${month}/${year}`;
  };
    return (
        <div className='h-[20rem]   my-8 overflow-x-auto rounded-lg p-4' >                     
            <p className='font-bold text-lg text-[--layer-color] p-2 bg-[--bg-color] rounded-lg '>Recent Transaction</p>    
      <table className="table-auto  items-center w-[1000px] mt-2 bg-[--layer-color] rounded-lg ">
      <thead className='border-b-2'>
      <tr>
            <th className="px-4 py-2">Seria ID</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Account</th>            
            <th className="px-4 py-2">Method</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody >
        {storedData.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="px-4 py-2">{item.serialId}</td>
              <td className="px-4 py-2">{item.currency}{item.amount}</td>
              <td className="px-4 py-2">{item.accountType}</td>    
              <td className="px-4 py-2">{item.paymentMethod}</td>         
              <td className="px-4 py-2"><p>{item.cryptoWallet} {item.currencyWallet}</p></td>            
              <td className="px-4 py-2">{item.date}</td>
              <td style={{ color: item.status === 'Successful' ? 'green' : 'red' }}  className="px-4 py-2">{item.status}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
       
    )
}

export default PaymentRecent
