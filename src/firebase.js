import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4EWxYyqfGKotx8qclauv7a2Q0x2e5Nco",
  authDomain: "linkedin-clone-b08f5.firebaseapp.com",
  projectId: "linkedin-clone-b08f5",
  storageBucket: "linkedin-clone-b08f5.appspot.com",
  messagingSenderId: "359204881211",
  appId: "1:359204881211:web:2528ed1ba4d1c14cfdad1e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
