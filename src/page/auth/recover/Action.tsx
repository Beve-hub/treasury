// src/components/Action.tsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { confirmPasswordReset, applyActionCode, checkActionCode,  } from "firebase/auth";
import { auth } from "../../../firebase";
import {  useNavigate } from 'react-router-dom';
import Loaders from "../../../component/Loaders";


const Action: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const mode = queryParams.get("mode");
    const oobCode = queryParams.get("oobCode");
    const [message, setMessage] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
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
                    alert("Please enter your new password.");
                } else if (mode === "verifyEmail") {
                    // Apply the email verification code
                    await applyActionCode(auth, oobCode);
                    navigate('/amount');
                    alert("Your email has been verified!");
                } else {
                    setMessage("Invalid mode.");
                }
            } catch (error) {
                alert("Invalid request.");
            }
        };

        handleAction();
    }, [mode, oobCode]);

    const handlePasswordReset = async () => {
        try {
            if (oobCode) {
                await confirmPasswordReset(auth, oobCode, newPassword);
                setMessage("Password has been reset successfully.");
            }
        } catch (error) {
           alert()
        }
    };

    return (
        <section className="bg-[--bg-color]">
            <h1>Action</h1>
            {mode === "resetPassword" && (
                <div>
                   {loading ? <Loaders/> : <h1 className="text-2xl text-center mt-8">Content Loaded!</h1>}
                    <button onClick={handlePasswordReset}>Reset Password</button>
                </div>
            )}
            <p>{message}</p>
        </section>
    );
};

export default Action;
