import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
// import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWZkHllhxHIuuBTr4VHFNKOEjxfE48Gqs",
  authDomain: "shopping-cart-e6c0f.firebaseapp.com",
  projectId: "shopping-cart-e6c0f",
  storageBucket: "shopping-cart-e6c0f.appspot.com",
  messagingSenderId: "658399099316",
  appId: "1:658399099316:web:4559efcb8b0acc4e1e1ae1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const productsRef = collection(db, "products");

ReactDOM.render(<App/>, document.getElementById('root'));