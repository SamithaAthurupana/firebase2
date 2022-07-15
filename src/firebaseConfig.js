
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCRx1pjrtBFr4PTQPZSBMU7-bfvpr7yU4s",
    authDomain: "fir-frontend-96e87.firebaseapp.com",
    projectId: "fir-frontend-96e87",
    storageBucket: "fir-frontend-96e87.appspot.com",
    messagingSenderId: "716851977618",
    appId: "1:716851977618:web:30714f548ab73abaffb54b"

};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getFirestore(app);