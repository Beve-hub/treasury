import { useEffect, useState } from 'react';
import notification from '../../../../assets/notification.svg';
import user from '../../../../assets/user.svg';
import down from '../../../../assets/down.svg';
import right from '../../../../assets/right.svg';
import { useAuth } from '../../../../context/AuthProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import { firestore } from "../../../../firebase";
import { doc, getDoc } from 'firebase/firestore';




const Top = () => {
    const [icon, setIcon] = useState<boolean>(false);
    const [firstName, setFirstName] = useState<string>(() => {
        return localStorage.getItem('firstName') || '';
    });
    const [lastName, setLastName] = useState<string>(() => {
        return localStorage.getItem('lastName') || '';
    });
    const [accountNumber, setAccountNumber] = useState<string>(() => {
        return localStorage.getItem('accountNumber') || '';
    });

    const { state } = useLocation();
    const userId = state?.userId || '';
   

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userDocRef = doc(firestore, 'users', userId);
                const snapshot = await getDoc(userDocRef);
                if (snapshot.exists()) {
                    const userDetails = snapshot.data();
                    const newFirstName = userDetails?.firstName || '';
                    const newLastName = userDetails?.lastName || '';
                    const newAccountNumber = userDetails?.accountNumber || '';
                   
                    setFirstName(newFirstName); 
                    setLastName(newLastName); 
                    setAccountNumber(newAccountNumber);   

                    localStorage.setItem('firstName', newFirstName);
                    localStorage.setItem('lastName', newLastName);
                    localStorage.setItem('accountNumber', newAccountNumber);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [userId]);

   

    const { logout } = useAuth();
    const navigate = useNavigate();

    const toggleIcon = (): void => {
        setIcon(!icon);
    }

    const logoutAndNavigate = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('firstName');
        logout();
        navigate('/');
    };

    return (
        <div className='flex justify-between pb-[3rem] max-w-screen'>
            <div className='flex gap-2'>
                <p className='text-2xl font-bold'>Welcome,</p>
                <div>
                    <p className='text-2xl font-semibold'>{firstName}{lastName}</p> 
                    <p  className='text-md flex items-center justify-center '>Acct/Num: <span className='font-bold'>{accountNumber}</span></p>
                                
                </div>
            </div>

            <div className='items-center gap-6 md:flex hidden'>
                <div className='bg-[--layer-color] p-2 rounded-3xl'>
                    <img src={notification} alt='Notification' className='w-[20px]' />
                </div>
                <div onClick={toggleIcon} className='flex items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <img src={user} alt='User' className='w-[40px]' />
                        <p className='text-lg'>{firstName}</p>
                    </div>
                    {!icon ? <img src={right} alt='Expand' className='w-[24px]' /> : <img src={down} alt='Collapse' className='w-[24px]' />}
                    {icon && (
                        <div className="absolute top-[6rem] rounded-lg bg-[#ededed] grid items-center justify-center w-[8rem]">
                            <ul className='grid p-2 items-center cursor-pointer'>
                                <li className="flex items-center gap-2 p-1 hover:bg-[--button-color] rounded-lg">
                                    <button onClick={logoutAndNavigate}>Log Out</button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Top;
