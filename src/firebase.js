// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { useEffect, useState } from "react";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA_6v7_7eghJrZbfHYy-XUKcHKIZ6XaQsA",
  authDomain: "kyak-polo.firebaseapp.com",
  projectId: "kyak-polo",
  storageBucket: "kyak-polo.appspot.com",
  messagingSenderId: "360441140823",
  appId: "1:360441140823:web:99de66299d6a0ebbd03512",
  measurementId: "G-8NQLQN43E6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const bd = getFirestore(app);





export function signup(email, password, nom, prenom) {

  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      if (userCredentials.user) {
        updateProfile(userCredentials.user, {
          displayName: nom + " " + prenom,
        })
      }

    })
    .catch((err) => {
      console.log(err)
    });
};

//custom hook

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])
  return currentUser;
}

export function logout() {
  return signOut(auth);
}

export function login(email, password) {

  return signInWithEmailAndPassword(auth, email, password);

}