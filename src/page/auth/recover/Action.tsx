// src/components/Action.tsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { confirmPasswordReset, applyActionCode, checkActionCode,  } from "firebase/auth";
import { auth } from "../../../firebase";
import {  useNavigate } from 'react-router-dom';


const Action: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const mode = queryParams.get("mode");
    const oobCode = queryParams.get("oobCode");
    const [message, setMessage] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const navigate = useNavigate();
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
        <div>
            <h1>Action</h1>
            {mode === "resetPassword" && (
                <div>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                    />
                    <button onClick={handlePasswordReset}>Reset Password</button>
                </div>
            )}
            <p>{message}</p>
        </div>
    );
};

export default Action;
