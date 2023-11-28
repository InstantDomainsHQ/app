import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics, isSupported } from "firebase/analytics";
import {offlineMode} from "@/src/components/utils/headerConfig";

const firebaseConfig = {
  apiKey: "AIzaSyBzJKWNHl92Cfneo_nwxkOpmc6_mPIBQWM",
  authDomain: "functionhub-hq.firebaseapp.com",
  projectId: "functionhub-hq",
  storageBucket: "functionhub-hq.appspot.com",
  messagingSenderId: "595956390215",
  appId: "1:595956390215:web:8b59b04d33aee590279462",
  measurementId: "G-Y9QSC4FPVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = offlineMode ? null : getAuth(app);
const analyticsByEnv = process.env.NODE_ENV !== 'production' ? null :  isSupported().then(yes => yes ? getAnalytics(app) : null)
export const analytics =  analyticsByEnv
