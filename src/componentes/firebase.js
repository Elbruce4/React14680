import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA8PCtHbLAjChWpvskT8N-gaIJVJa5lEEA",
    authDomain: "pruebafirebase-1fab3.firebaseapp.com",
    projectId: "pruebafirebase-1fab3",
    storageBucket: "pruebafirebase-1fab3.appspot.com",
    messagingSenderId: "184560418321",
    appId: "1:184560418321:web:3c8a13a2c7c2d31941bbb0"
  };

  
const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore(app)