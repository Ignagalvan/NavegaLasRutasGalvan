
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCm6u7uxd2xkzurl9i1wUTCkUZpx-R1NGvc",
  authDomain: "tiendatechstore-92285.firebaseapp.com",
  projectId: "tiendatechstore-92285",
  storageBucket: "tiendatechstore-92285.appspot.com",
  messagingSenderId: "263027606141",
  appId: "1:263027606141:web:c183fdf604a9a1f7f16714",
  measurementId: "G-NYTY95F0T5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

