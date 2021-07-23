import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlIcvU9N0fOx6mvUhFku31DvRaR3ut4f0",
  authDomain: "linkedin-clone-a1ca2.firebaseapp.com",
  projectId: "linkedin-clone-a1ca2",
  storageBucket: "linkedin-clone-a1ca2.appspot.com",
  messagingSenderId: "143278339310",
  appId: "1:143278339310:web:aed685b02642866c6b6fff",
  measurementId: "G-DWKTVQ5DSY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};