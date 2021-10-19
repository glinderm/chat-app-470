import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/database";

const app = firebase.initializeApp({
  apiKey: "AIzaSyA47rt-dBAdeVVVbCqPxtgfbcWmUv3zOAE",
  authDomain: "c470chatapp.firebaseapp.com",
  databaseURL: "https://c470chatapp-default-rtdb.firebaseio.com",
  projectId: "c470chatapp",
  storageBucket: "c470chatapp.appspot.com",
  messagingSenderId: "539063625518",
  appId: "1:539063625518:web:58080cf2b0ce8e81047cbf"
})


export const chatsRef = firebase.database().ref("chats");
export const auth = firebase.auth();
export default app;