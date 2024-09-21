// import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { notification } from 'antd';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null);

//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged((user) => {
//             setCurrentUser(user);
//         });

//         return () => unsubscribe();
//     }, []);

export const register = async (email, password) => {
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        notification.success({
            description: "User profile created successfully!",
            duration: 1
        });
        return res;
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            notification.info({
                description: "This email is already in use.",
                duration: 1
            });
        } else {
            notification.error({
                description: "Error creating user profile: " + error.message,
                duration: 1
            });
        }
        return error;
    }
};

export const login = async (email, password) => {
    try {
        const res = await auth.signInWithEmailAndPassword(email, password);
        notification.success({
            description: "User logged in successfully!",
            duration: 1
        });
        return res;
    } catch (error) {
        if (error.code === 'auth/user-not-found') {
            notification.error({
                description: "No user found with this email.",
                duration: 1
            });
        } else if (error.code === 'auth/wrong-password') {
            notification.error({
                description: "Incorrect password.",
                duration: 1
            });
        } else {
            notification.info({
                description: "This email is already in use.",
                duration: 1
            });
        }
        return error;
    }
};

export const logout = async () => {
    try {
        await auth.signOut();
        notification.success({
            description: "User logged out successfully!",
            duration: 1
        });
        return true;
    } catch (error) {
        notification.success({
            description: "Error logging out:" + error.message,
            duration: 1
        });
        return false;
    }
};

//     return (
//         <AuthContext.Provider value={{ currentUser, register, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };