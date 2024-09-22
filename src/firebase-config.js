// Import the Firebase SDK for Cloud Firestore
import { initializeApp } from "firebase/app";
import {
    getFirestore,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAj4vzS6_TEHPiJwMM5kuB3F9yfTLe44PA",
  authDomain: "workspace-3a2d2.firebaseapp.com",
  projectId: "workspace-3a2d2",
  storageBucket: "workspace-3a2d2.appspot.com",
  messagingSenderId: "282175928167",
  appId: "1:282175928167:web:d83168ee8d9a4f956fa1c2",
  measurementId: "G-NPV91M53B3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
export const db = getFirestore(app);