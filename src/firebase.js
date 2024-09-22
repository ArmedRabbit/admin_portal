// Import the Firebase SDK for Cloud Firestore
import {
    collection,
    onSnapshot,
    query,
    where,
    addDoc,
} from 'firebase/firestore';

import { db } from "./firebase-config";

export const signup = async (email, password) => {

}

export const login = async (email, password) => {
    try {
        const userRef = collection(db, 'user');
        const loginUser = new Promise((resolve) => {
            onSnapshot(
                query(userRef, where('email', '==', email)),
                async (querySnapshot) => {
                    if (querySnapshot.empty) {
                        await addDoc(userRef, { email, password, created_at: new Date().toDateString(), updated_at: new Date().toDateString() })
                            .then(() => {
                                console.log('Success login');
                                resolve({ code: 200, message: 'Success login' });
                            })
                            .catch(() => {
                                console.log('Register is failed');
                                resolve({ code: 400, message: 'Register is failed' });
                            });
                    } else {
                        onSnapshot(
                            query(userRef,
                                where('email', '==', email),
                                where('password', '==', password)
                            ),
                            (querySnapshot1) => {
                                if (querySnapshot1.empty) {
                                    console.log('Password is not matched');
                                    resolve({ code: 400, message: 'Password is not matched' });
                                } else {
                                    console.log('Success login');
                                    resolve({ code: 200, message: 'Success login' });
                                }
                            });    
                    }
                });
        });
        return loginUser;
    } catch (err) {
        return err;
    }
}