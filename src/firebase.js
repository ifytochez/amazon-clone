import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyAlQiNZxzKLT0CG_Q5h0_I6jQdPCBzh66I",
    authDomain: "clone-136fa.firebaseapp.com",
    projectId: "clone-136fa",
    storageBucket: "clone-136fa.appspot.com",
    messagingSenderId: "137615776871",
    appId: "1:137615776871:web:51bcb243ea47a1533f88c2",
    measurementId: "G-XH7XSXHTSK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};

// db means database
// auth means authentication