import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDvQIujmjjV_pToILSyQHdHQSA3DQR78gc",
    authDomain: "linkedin-clone-81358.firebaseapp.com",
    projectId: "linkedin-clone-81358",
    storageBucket: "linkedin-clone-81358.appspot.com",
    messagingSenderId: "396170749011",
    appId: "1:396170749011:web:8bd08f05e74e671d9092a6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export  { db, auth }