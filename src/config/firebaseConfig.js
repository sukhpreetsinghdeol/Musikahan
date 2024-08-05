// src/config/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Ensure this import

const firebaseConfig = {
  apiKey: "AIzaSyAZNJWk1TPFi4ZkmTGf0M7soDjo5jID1gM",
  authDomain: "musikahan-44b5f.firebaseapp.com",
  projectId: "musikahan-44b5f",
  storageBucket: "musikahan-9adbe.appspot.com",
  messagingSenderId: "598891582865",
  appId: "1:598891582865:web:52e15ea3176cb6c081f630",
};

const app = initializeApp(firebaseConfig);
// Configure auth persistence
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });

export { auth };