import * as firebase from 'firebase';

require('@firebase/firestore');
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC4BMeH0hMK3Q1T6CefH89WEj9dFRm10zc",
  authDomain: "hwits-d9ee4.firebaseapp.com",
  projectId: "hwits-d9ee4",
  storageBucket: "hwits-d9ee4.appspot.com",
  messagingSenderId: "513515367872",
  appId: "1:513515367872:web:7736a770f932401ccfec25",
  measurementId: "G-437NS9S7JZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

/*// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4BMeH0hMK3Q1T6CefH89WEj9dFRm10zc",
  authDomain: "hwits-d9ee4.firebaseapp.com",
  projectId: "hwits-d9ee4",
  storageBucket: "hwits-d9ee4.appspot.com",
  messagingSenderId: "513515367872",
  appId: "1:513515367872:web:7736a770f932401ccfec25",
  measurementId: "G-437NS9S7JZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/

/*import * as firebase from 'firebase';

require('@firebase/firestore');
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAoDWKYhtcLgl2tDHH16Ib0mzPPyasBHTc',
  authDomain: 'wily-542f0.firebaseapp.com',
  databaseURL: 'https://wily-542f0-default-rtdb.firebaseio.com',
  projectId: 'wily-542f0',
  storageBucket: 'wily-542f0.appspot.com',
  messagingSenderId: '133623016673',
  appId: '1:133623016673:web:6a5d612dbf464a90f09ba0',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();*/

// https://github.com/firebase/firebase-ios-sdk