// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi5EsiVloNXqVpTnQDVae0HMENDpQRfVE",
  authDomain: "fir-chat-617cd.firebaseapp.com",
  databaseURL: "https://fir-chat-617cd-default-rtdb.firebaseio.com",
  projectId: "fir-chat-617cd",
  storageBucket: "fir-chat-617cd.appspot.com",
  messagingSenderId: "1098447465947",
  appId: "1:1098447465947:web:6617d01a404fb6752c0bfe",
  measurementId: "G-839NLG2MVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export {database};