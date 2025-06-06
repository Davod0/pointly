import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_DB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_DB_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_DB_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_DB_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_DB_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_DB_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_DB_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


/*
   Data models in db

    /sessions
       /id
            createdAt: Timestamp
            createdBy: "uid of the user"
            isRevealed: boolean
            fibonacciLabel?: "string"
            status: "active" | "completed"
            currentIssue?: "string"
            id: "string"

            /participants
                /user_1
                    uid: "user_1"
                    name: "string"

                /user_2
                    uid: "user_2"
                    name: "string"

            /votes
                /user_1
                    uid: "user_1"
                    userName: "string"
                    point: "string"
                    isPicked: boolean

                /user_2
                    uid: "user_2"
                    userName: "string"
                    point: "string"
                    isPicked: boolean
*/