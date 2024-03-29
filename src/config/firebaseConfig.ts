import { initializeApp, FirebaseOptions } from "firebase/app";

// const firebaseConfig: FirebaseOptions = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDZtAeDJ9AIAaoVc14_Ql2YB6bF3MWxAS0",
  authDomain: "meeting-scheduler-88546.firebaseapp.com",
  projectId: "meeting-scheduler-88546",
  storageBucket: "meeting-scheduler-88546.appspot.com",
  messagingSenderId: "481092984504",
  appId: "1:481092984504:web:625f0f8c2dc6d34cb75e4d",
  measurementId: "G-11DD7Q1SQJ",
};

export const app = initializeApp(firebaseConfig);
