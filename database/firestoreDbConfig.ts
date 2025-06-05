import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.FS_API_KEY,
  authDomain: process.env.FS_AUTH_DOMAIN,
  projectId: process.env.FS_PROJECT_ID,
  storageBucket: process.env.FS_STORAGE_BUCKET,
  messagingSenderId: process.env.FS_MESSAGING_SENDER_ID,
  appId: process.env.FS_APP_ID,
  measurementId: process.env.FS_MEASUREMENT_ID,
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
