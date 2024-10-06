// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import the authentication module

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJPVc2OgWQCPuU7YSVTXnPttnHLFG3AQI",
  authDomain: "tangotaste-4765e.firebaseapp.com",
  projectId: "tangotaste-4765e",
  storageBucket: "tangotaste-4765e.appspot.com",
  messagingSenderId: "45701102119",
  appId: "1:45701102119:web:e7808be61e58e9b0c8ac02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Export the auth object for use in other parts of your app
export { auth };
