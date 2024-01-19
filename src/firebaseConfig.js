import { initializeApp } from "firebase/app";

// import getFireStore from "firebase/firestore";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_f9mG5v257St4wiFy9YUWEDXZxPPv6X4",
  authDomain: "clinic-9a451.firebaseapp.com",
  projectId: "clinic-9a451",
  storageBucket: "clinic-9a451.appspot.com",
  messagingSenderId: "927046501321",
  appId: "1:927046501321:web:13330d0f7db56078d4de18",
};

// Initialize Firebase
initializeApp(firebaseConfig);
//init FireStore

const db = getFirestore();
export default db;
