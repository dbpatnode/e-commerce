// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyABG16KVUw3Ikl0zMvYcvW9lgEeiHRbQpE",
    authDomain: "e-commerce-db-33ce4.firebaseapp.com",
    projectId: "e-commerce-db-33ce4",
    storageBucket: "e-commerce-db-33ce4.appspot.com",
    messagingSenderId: "981051354863",
    appId: "1:981051354863:web:9985bf29db049bc884b51a",
    measurementId: "G-S3VPMH7MZN"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase
