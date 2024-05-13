import { useEffect, useState } from "react"
import QuickAction from "./screen/QuickAction"
import RecentTransaction from "./screen/RecentTransaction"
import Top from "./screen/Top"
import TotalCards from "./screen/TotalCards"
import {useLocation} from "react-router-dom"
import {  firestore } from "../../../firebase"
import { doc, getDoc } from 'firebase/firestore';
 

const Overview = () => {
    const [firstName, setFirstName] = useState<string>('')
    const {state} = useLocation();
    console.log('users', state)
    const userId = state.userId
  


    useEffect(() => {
        const fetchData = async () => {
            try {
                const userDocRef = doc(firestore, 'users', `${userId}` );
                console.log('userId', userId)
                const snapshot = await getDoc(userDocRef);
                if(snapshot) {
                    console.log('userdetails', snapshot.data())
                    const userDetails = snapshot.data()
                    setFirstName(userDetails?.firstName)
                } 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    }, [])
    return (
        <section   className='md:pl-[16rem]   min-h-[30rem] top-0  overflow-x-hidden overflow-y-auto '>
            <div className=" grid justify-between ">
            <div className="max-w-[120rem] grid justify-between py-10 gap-6 mx-4">
                 <Top firstName={firstName}/> 
                 <TotalCards/> 
                 <QuickAction/>                                 
                 <RecentTransaction/>                          
                </div>
            </div>               

        </section>
    )
}

export default Overview
