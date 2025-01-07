import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCbfaUvvkYTyPCLPjONhSq7OcxybwMeQqc",
  authDomain: "somalicv-a7c85.firebaseapp.com",
  projectId: "somalicv-a7c85",
  storageBucket: "somalicv-a7c85.appspot.com",
  messagingSenderId: "615126548113",
  appId: "1:615126548113:web:0d416a6a6228ce8d588930",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Storage = getStorage(app);
