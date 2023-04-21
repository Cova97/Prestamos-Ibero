// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiO8_OyU8ATmMHBF6uAIfvTWrirYfcvMk",
    authDomain: "depto-ingenierias-ibero.firebaseapp.com",
    projectId: "depto-ingenierias-ibero",
    storageBucket: "depto-ingenierias-ibero.appspot.com",
    messagingSenderId: "176490921912",
    appId: "1:176490921912:web:e72e65f36c81c5b0a7994d",
    measurementId: "G-HXN4RTYYCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}

