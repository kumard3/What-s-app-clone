import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmJKGTmlopSN43xtlKWpDVzihSUbmpgGU",
  authDomain: "what-s-app-877db.firebaseapp.com",
  databaseURL: "https://what-s-app-877db.firebaseio.com",
  projectId: "what-s-app-877db",
  storageBucket: "what-s-app-877db.appspot.com",
  messagingSenderId: "890680094066",
  appId: "1:890680094066:web:f676a930fd74f0aa5c01eb",
  measurementId: "G-K6H1YXFHX5"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;