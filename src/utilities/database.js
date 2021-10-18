import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import * as rtdb from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA47rt-dBAdeVVVbCqPxtgfbcWmUv3zOAE",
  authDomain: "c470chatapp.firebaseapp.com",
  databaseURL: "https://c470chatapp-default-rtdb.firebaseio.com",
  projectId: "c470chatapp",
  storageBucket: "c470chatapp.appspot.com",
  messagingSenderId: "539063625518",
  appId: "1:539063625518:web:58080cf2b0ce8e81047cbf"
};

// Initialize Firebase
const chatApp = initializeApp(firebaseConfig);
let db = rtdb.getDatabase(chatApp);
let titleRef = rtdb.ref(db, "/");
let peopleRef = rtdb.child(titleRef, "people");
let adminRef = rtdb.child(titleRef, "admins");
let person0Ref = rtdb.child(peopleRef, "person0");
let nameRef = rtdb.child(person0Ref, "name");
let chatsRef = rtdb.child(titleRef, "chats");

let list = document.getElementById('chatlog');

let newObj = {"airplane": true};
rtdb.push(peopleRef, newObj);