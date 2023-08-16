import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional.
const firebaseConfig = {
  apiKey: "AIzaSyDPHvKt678guNhzEyGD3s15ZrTALm7oyIM",
  authDomain: "ig-reels-fabdf.firebaseapp.com",
  projectId: "ig-reels-fabdf",
  storageBucket: "ig-reels-fabdf.appspot.com",
  messagingSenderId: "726802264268",
  appId: "1:726802264268:web:dc34b840f2fd2906625269",
  measurementId: "G-TQE9PXBNYS"
};

const firebaseApp = 
  firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;