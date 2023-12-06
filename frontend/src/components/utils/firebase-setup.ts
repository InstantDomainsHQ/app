import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics, isSupported } from "firebase/analytics";
import {offlineMode} from "@/src/components/utils/headerConfig";

const firebaseConfig = {
  apiKey: "AIzaSyCnH6nua7dw5oQBhf7Hy-Xd4JonlzfkXis",
  authDomain: "instantdomainshq.firebaseapp.com",
  projectId: "instantdomainshq",
  storageBucket: "instantdomainshq.appspot.com",
  messagingSenderId: "913323147181",
  appId: "1:913323147181:web:ec8689f434069bb47eeb24",
  measurementId: "G-H5WKF04SNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = offlineMode ? null : getAuth(app);
const analyticsByEnv = process.env.NODE_ENV !== 'production' ? null :  isSupported().then(yes => yes ? getAnalytics(app) : null)
export const analytics =  analyticsByEnv
