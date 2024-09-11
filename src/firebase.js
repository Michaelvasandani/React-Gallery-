// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDucrA34zdFTNDTi1uCNDY2jEhubQm7UDg",
  authDomain: "uploading-try.firebaseapp.com",
  projectId: "uploading-try",
  storageBucket: "uploading-try.appspot.com",
  messagingSenderId: "1098287719082",
  appId: "1:1098287719082:web:2e780692bcc6c46e2d66d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
