// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlTAPdKdwZetcHXZa7i8KUE0sVmQncVRA",
    authDomain: "dragon-news-660f4.firebaseapp.com",
    projectId: "dragon-news-660f4",
    storageBucket: "dragon-news-660f4.appspot.com",
    messagingSenderId: "534304327192",
    appId: "1:534304327192:web:6aa6030796c848c0c4a56d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;