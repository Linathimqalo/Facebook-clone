// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAxdxYQRDHGygv2Zqef_I9kZJWfZ3-x438",
  authDomain: "facebook-clone-2c293.firebaseapp.com",
  projectId: "facebook-clone-2c293",
  storageBucket: "facebook-clone-2c293.appspot.com",
  messagingSenderId: "118093332025",
  appId: "1:118093332025:web:0dd83a05c42e9f57d017e8",
  measurementId: "G-JRVTD8S1ZJ",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
