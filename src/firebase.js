import { initializeApp } from 'firebase/app';
import {
    getFirestore
} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import {
    API_KEY,
    APP_ID,
    AUTH_DOMAIN,
    MEASUREMENT_ID,
    MESSAGING_SENDER_ID,
    PROJECT_ID,
    STORAGE_BUCKET
} from './constants';

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };