// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOUkYlJwSB3GyH46hH1ceBZhTnKVjhVPk",
  authDomain: "leetcode-93882.firebaseapp.com",
  projectId: "leetcode-93882",
  storageBucket: "leetcode-93882.firebasestorage.app",
  messagingSenderId: "41275038280",
  appId: "1:41275038280:web:29964a6b161efcf8a0167d",
  measurementId: "G-DPSSV2RT7L"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
