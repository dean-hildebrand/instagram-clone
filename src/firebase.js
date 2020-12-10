import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC4BkBh0Zwi18uw9gEafjH2Mm6nXgBeKKo",
  authDomain: "instagram-clone-501e1.firebaseapp.com",
  projectId: "instagram-clone-501e1",
  storageBucket: "instagram-clone-501e1.appspot.com",
  messagingSenderId: "239314294932",
  appId: "1:239314294932:web:1a2235b69b5de6702f3c81",
  measurementId: "G-6E174V2J3W",
});

//services from firebase
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
