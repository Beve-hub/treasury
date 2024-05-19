// src/components/Action.tsx
import React, { useEffect} from "react";
import { useLocation } from "react-router-dom";
import {  applyActionCode, checkActionCode,  } from "firebase/auth";
import { auth } from "../../../firebase";
import {  useNavigate } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner'


const Action: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const mode = queryParams.get("mode");
    const oobCode = queryParams.get("oobCode");
   
    
  

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
                    alert("Please enter your new password.");
                } else if (mode === "verifyEmail") {
                    // Apply the email verification code
                    await applyActionCode(auth, oobCode);
                    navigate('/amount');
                    alert("Your email has been verified!");
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
                <div className="grid justify-center items-center">
                {mode === "resetPassword" && (
                <div className="flex justify-center items-center">
                    <Triangle  visible={true}  height="150"  width="150"  color="#2631fc"  ariaLabel="triangle-loading"  wrapperStyle={{}}  wrapperClass=""  />
                </div>
                 )}
                </div>
            
                 <div className="grid justify-center items-center ">
                 {mode === "verifyEmail" && (
                <div className="flex justify-center items-center">
                <Triangle  visible={true}  height="150"  width="150"  color="#2631fc"  ariaLabel="triangle-loading"  wrapperStyle={{}}  wrapperClass=""  />
                 </div>
                 )}
                 </div>
           
            
            </div>
            
        </section>
    );
};

export default Action;
