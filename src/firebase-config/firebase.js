// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "my-birthday-bash.firebaseapp.com",
  projectId: "my-birthday-bash",
  storageBucket: "my-birthday-bash.firebasestorage.app",
  messagingSenderId: "493226083713",
  appId: "1:493226083713:web:2a2de878ef50d84b9b5480",
  measurementId: "G-MV7K9333JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);