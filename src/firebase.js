import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-yu9sfGDb9IwEpz75F8fvKQiKjK3SK78",
  authDomain: "slack-clone-bf95e.firebaseapp.com",
  projectId: "slack-clone-bf95e",
  storageBucket: "slack-clone-bf95e.appspot.com",
  messagingSenderId: "861862508835",
  appId: "1:861862508835:web:aee2dee77219d11cb93496",
  measurementId: "G-SQ3BDEBLG6",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
