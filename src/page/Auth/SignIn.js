import React from "react";
import SignInForm from "../../component/SignInForm";
import "../../assests/css/auth.css";

export default function SignIn() {

    return (
        <div className="container">
            <div className="overlay-container">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>
                        To keep connected with us please login with your personal info
                    </p>
                </div>
                <div className="overlay-panel overlay-right">
                    <SignInForm />
                </div>
            </div>
        </div>
    );
}
