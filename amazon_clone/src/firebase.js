import firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7SHdxGneaISjmSmfbQRbwVOC24AVRadE",
    authDomain: "clone-c2567.firebaseapp.com",
    projectId: "clone-c2567",
    storageBucket: "clone-c2567.appspot.com",
    messagingSenderId: "122093869938",
    appId: "1:122093869938:web:36e862abc6854df0c71beb",
    measurementId: "G-1K4893FV32"
  };


  const firebaseApp= firebase.initializeApp(firebaseConfig)

  const db= firebaseApp.firestore();
  const auth = firebase.auth();


  export {db, auth};