import { useEffect, useState } from 'react';
import { database } from '../../../../firebase';
import { ref, get } from 'firebase/database';

interface UserData {
  amount: number;
  currency: string;
}

const TotalCards = () => {
  const [storedData, setStoredData] = useState<UserData[]>([]);
  const [totalBalance, setTotalBalance] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
  try {
    const currencies = ['BTC', 'ETH', 'USDT'];
    const dataPromise = currencies.map(async currency => {
      const usersRef = ref(database, `DepositData/${currency}`);
      const snapshot = await get(usersRef);
      if (snapshot.exists()) {
        const amount = snapshot.val().amount;
        return { amount, currency };
      } else {
        return { amount: 0, currency };
      }
    });
    const userData = await Promise.all(dataPromise);
    setStoredData(userData);

    const total = userData.reduce((acc, data) => acc + parseFloat(data.amount), 0);
    setTotalBalance(total);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

    fetchData();
  }, []);

  return (
    <div className='grid items-center justify-between gap-6 md:grid-cols-4'>
      <div className='grid justify-start p-4 rounded-2xl gap-8 bg-[--layer-color] w-[15rem]'>
        <div className='grid gap-1'>
          <h2 className='text-lg font-semibold'>Total Balance</h2>
          <p className='text-xs'>Checking account</p>
        </div>
        <div className='grid gap-2'>
          <div className='flex items-center gap-2'>
            <span className='font-bold text-2xl'>$</span>
            <h1 className='font-bold text-2xl'>{totalBalance.toFixed(2)}</h1>
          </div>
          <p className='text-sm'>Available Balance</p>
        </div>
      </div>
      {storedData.map((item, index) => (
        <div key={index} className='grid justify-start px-4 py-6 rounded-2xl gap-8 bg-[--layer-color] w-[15rem]'>
          <div className='grid gap-1'>
            <h2 className='text-lg font-semibold'>Total {item.currency} Balance</h2>
          </div>
          <div className='grid gap-2'>
            <div className='flex items-center gap-2'>
              <span className='font-bold text-2xl'>$</span>
              <h1 className='font-bold text-2xl'>{item.amount.toFixed(2)}</h1>
            </div>
            <p className='text-sm'>Available Balance</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TotalCards;
