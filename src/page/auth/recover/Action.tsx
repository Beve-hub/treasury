// src/components/Action.tsx
import React, { useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import {  applyActionCode, checkActionCode,  } from "firebase/auth";
import { auth } from "../../../firebase";
import {  useNavigate } from 'react-router-dom';
import Loaders from "../../../component/Loaders";


const Action: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const mode = queryParams.get("mode");
    const oobCode = queryParams.get("oobCode");
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous operation
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
   
    
  

    useEffect(() => {
        if (!mode || !oobCode) {
            alert("Invalid request.");
            return;
        }

        const handleAction = async () => {
            
            try {
                if (mode === "resetPassword") {

                    // Verify the password reset code is valid
                    await checkActionCode(auth, oobCode);
                    navigate('/passwordReset');         

                } else if (mode === "verifyEmail") {

                    // Apply the email verification code
                    await applyActionCode(auth, oobCode);
                    navigate('/amount');
                    
                } else {
                    alert("Invalid mode.");
                }
            } catch (error) {
                alert("Invalid request.");
            }
        };

        handleAction();
    }, [mode, oobCode]);

 

    return (
        <section className='h-screen w-screen grid bg-[--bg-color] -center items-center'>
            <div className="w-screen h-screen grid justify-center items-center">
                
                {mode === "resetPassword" && (
                <div className="flex justify-center items-center">
                   {loading ? <Loaders/> : '' }
                </div>
                 )}
               
            
                 {mode === "verifyEmail" && (
                <div className="flex justify-center items-center">
                {loading ? <Loaders/> : '' }
                 </div>
                 )}
             
           
            
            </div>
            
        </section>
    );
};

export default Action;
