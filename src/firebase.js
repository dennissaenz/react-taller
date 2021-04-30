import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 const firebaseConfig = {
    apiKey: "AIzaSyAMW-ffOzWwQtwhGq3dhzssuDrMwl2T5X8",
    authDomain: "react-demo-46346.firebaseapp.com",
    projectId: "react-demo-46346",
    storageBucket: "react-demo-46346.appspot.com",
    messagingSenderId: "999131440762",
    appId: "1:999131440762:web:2f13ac212a1aaa73f23dc3"
  };
  // Initialize Firebase
  app.initializeApp(firebaseConfig);

const db    = app.firestore();
const auth  = app.auth();

export {db, auth}