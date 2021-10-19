import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// const provider = new GoogleAuthProvider();
// // const app = firebase.initializeApp({
// //     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// //     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// //     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
// //     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// //     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// //     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// //     appId: process.env.REACT_APP_FIREBASE_APP_ID
// //   })



// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
//   };

// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);


// const auth = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });


// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

const app = firebase.initializeApp({
  apiKey: "AIzaSyA47rt-dBAdeVVVbCqPxtgfbcWmUv3zOAE",
  authDomain: "c470chatapp.firebaseapp.com",
  databaseURL: "https://c470chatapp-default-rtdb.firebaseio.com",
  projectId: "c470chatapp",
  storageBucket: "c470chatapp.appspot.com",
  messagingSenderId: "539063625518",
  appId: "1:539063625518:web:58080cf2b0ce8e81047cbf"
})

export const auth = firebase.auth();
export default app;