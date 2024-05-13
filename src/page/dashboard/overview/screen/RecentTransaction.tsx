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
  userId: string
}

const RecentTransaction = () => {
  const [storedData, setStoredData] = useState<UserData[]>([]);


  useEffect(() => {
    const fetchData = async () => {
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
            depositData.push({
              amount: data.amount,
              accountType: data.accountType,
              paymentMethod: data.paymentMethod,
              date: formatDate(data.date), // Format the date here
              cryptoWallet: data.cryptoWallet,
              serialId: data.serialId,
              status: data.status,
              userId: data.userId
            });
          });         
      } 

      if (withdrawalSnapshot.exists()) {        
        withdrawalSnapshot.forEach((childSnapshot) => {
          const data = childSnapshot.val();
          withdrawalData.push({
            amount: data.amount,
            accountType: data.accountType,
            paymentMethod: data.paymentMethod,
            date: formatDate(data.date), // Format the date here
            cryptoWallet: data.cryptoWallet,
            serialId: data.serialId,
            status: data.status,
            userId: data.userId
          });
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
        <div className='h-[13rem] bg-[--layer-color] my-8 overflow-x-auto rounded-lg p-4' >                     
            <p className='font-bold text-lg'>Recent Transaction</p>    
            <table className="table-auto w-[60rem]  items-center mt-2">
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
        <tbody className='border-t-2 mt-4'>
          {storedData.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="px-4 py-2">{item.serialId}</td>
              <td className="px-4 py-2">${item.amount}</td>
              <td className="px-4 py-2">{item.accountType}</td>    
              <td className="px-4 py-2">{item.paymentMethod}</td>         
              <td className="px-4 py-2">{item.cryptoWallet}</td>              
              <td className="px-4 py-2">{item.date}</td>
              <td className="px-4 py-2" style={{ color: item.status === 'Successful' ? 'green' : 'red' }}>{item.status}</td>              
            </tr>
          ))}
        </tbody>
            </table>
    </div>
       
    )
}

export default RecentTransaction
