// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//const REACT_APP_FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

const firebaseConfig = {
	apiKey: "AIzaSyBS9mIzvodbzXnqNZirN35eo02uIvYinPA",
	authDomain: "redo-newfilx.firebaseapp.com",
	projectId: "redo-newfilx",
	storageBucket: "redo-newfilx.appspot.com",
	messagingSenderId: "986290777404",
	appId: "1:986290777404:web:3610bc72594fb882448239",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
