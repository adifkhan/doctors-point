// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9JwGfiugOGINw9gXJ-QhEmV26W929bqk",
    authDomain: "doctors-point-e48d6.firebaseapp.com",
    projectId: "doctors-point-e48d6",
    storageBucket: "doctors-point-e48d6.appspot.com",
    messagingSenderId: "286583986485",
    appId: "1:286583986485:web:42734f860fffad4f05147c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;