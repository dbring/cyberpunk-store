import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCr6yDE90qkP8AXT5m35Pv2-De4pN_JtX4",
  authDomain: "cyberstore-db.firebaseapp.com",
  projectId: "cyberstore-db",
  storageBucket: "cyberstore-db.appspot.com",
  messagingSenderId: "555434057218",
  appId: "1:555434057218:web:b89f12ea1c27a01e12d11b",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(firebaseApp);
