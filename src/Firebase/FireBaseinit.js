// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsIsU-2ov5cigwgbwoKKZkrMLR2wtusVQ",
  authDomain: "endgame-fae3c.firebaseapp.com",
  projectId: "endgame-fae3c",
  storageBucket: "endgame-fae3c.appspot.com",
  messagingSenderId: "581045983623",
  appId: "1:581045983623:web:540b20fcf1b5cc1fdf1b22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
