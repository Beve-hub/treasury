import { useEffect, useState } from 'react';
import notification from '../../../../assets/notification.svg';
import user from '../../../../assets/user.svg';
import down from '../../../../assets/down.svg';
import right from '../../../../assets/right.svg';
import { useAuth } from '../../../../context/AuthProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import { firestore } from "../../../../firebase"
import { doc, getDoc } from 'firebase/firestore';


const CompanyTop = () => {
    const [icon, setIcon] = useState<boolean>(false);
    const [firstName, setFirstName] = useState<string>(() => {        
        return localStorage.getItem('firstName') || '';
    });
    
    const { state } = useLocation();
    console.log('users', state);  
    const userId = state?.userId || '';

    useEffect(() => {
        const fetchData = async () => {
            try {                
                const userDocRef = doc(firestore, 'users', userId);
                console.log('userId', userId);
                const snapshot = await getDoc(userDocRef);
                if (snapshot.exists()) {
                    console.log('userdetails', snapshot.data());
                    const userDetails = snapshot.data();
                    setFirstName(userDetails?.firstName);                    
                    localStorage.setItem('firstName', userDetails?.firstName || '');
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
        localStorage.removeItem('firstName'); // Remove firstName from localStorage on logout
        logout();
        navigate('/login');
    };

    return (
        <div className='flex justify-between pb-[3rem] max-w-screen'>
            <div className='flex gap-2'>
                <p className='text-2xl font-bold'>Company</p>
               
            </div>

            <div className=' items-center gap-6 md:flex hidden'>

                <div className='bg-[--layer-color] p-2 rounded-3xl'>
                    <img src={notification} alt='Notification' className='w-[20px]' />
                </div>
                <div onClick={toggleIcon} className='flex items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <img src={user} alt='User' className='w-[40px]' />
                        <p className='text-2xl'>{firstName}</p>
                    </div>
                    {!icon ? <img src={right} alt='Expand' className='w-[24px]' /> : <img src={down} alt='Collapse' className='w-[24px]' />}
                    {icon && (
                        <div className="absolute top-[6rem] rounded-lg bg-[#ededed] grid items-center justify-center  w-[8rem]">
                            <ul className='grid p-2 items-center cursor-pointer'>
                                <li className="flex items-center gap-2  p-1 hover:bg-[--button-color] rounded-lg">
                                    <a href='/settings'>Settings</a>
                                </li>
                                <li className="flex items-center gap-2 p-1 hover:bg-[--button-color] rounded-lg">
                                    <button onClick={logoutAndNavigate}>Log out</button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default CompanyTop
