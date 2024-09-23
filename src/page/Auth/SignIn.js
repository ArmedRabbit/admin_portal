import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignInForm from "../../component/SignInForm";
import LoadingPage from "../../component/loading";
import "../../assests/css/auth.css";

export default function SignIn() {
    const navigate = useNavigate();
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (!email || !password) {
            navigate('/login');
        } else {
            navigate('/home');
        }
    }, [navigate]);

    return (
        <div className="container">
            {isLoading ?
                <LoadingPage /> : <></>
            }
            <div className="overlay-container">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>
                        To keep connected with us please login with your personal info
                    </p>
                </div>
                <div className="overlay-panel overlay-right">
                    <SignInForm setLoading={setLoading} />
                </div>
            </div>
        </div>
    );
}
