import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDg5__NLbwnh5m1Y4i1zJyLTI2b37YR0lA",
  authDomain: "live-chat-f00a4.firebaseapp.com",
  projectId: "live-chat-f00a4",
  storageBucket: "live-chat-f00a4.appspot.com",
  messagingSenderId: "345314897908",
  appId: "1:345314897908:web:454e8aef332053f6a593a1",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
