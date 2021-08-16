import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FB_API,
  authDomain: 'blog-f2478.firebaseapp.com',
  projectId: 'blog-f2478',
  storageBucket: 'blog-f2478.appspot.com',
  messagingSenderId: '135716132578',
  appId: '1:135716132578:web:31dc371fcf164fd77470bb',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
