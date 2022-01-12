import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  apiKey: 'AIzaSyDv9S_xankbXibDMfWH17NtMHiTch72Uf4',
  authDomain: 'wishlist-4bacd.firebaseapp.com',
  databaseURL: 'https://wishlist-4bacd-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'wishlist-4bacd',
  storageBucket: 'wishlist-4bacd.appspot.com',
  messagingSenderId: '316119292625',
  appId: '1:316119292625:web:45c6f7600359c3168d03f0',
});

export const auth = getAuth();
