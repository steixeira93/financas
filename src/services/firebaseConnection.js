import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyBrFCJLA-GbHtn8GBawV_oSnMRW6LHi320",
    authDomain: "finapp-e0c71.firebaseapp.com",
    projectId: "finapp-e0c71",
    storageBucket: "finapp-e0c71.appspot.com",
    messagingSenderId: "279907122398",
    appId: "1:279907122398:web:868a351640b48f48c5164f",
    measurementId: "G-FVZQJ1FXKM"
  };

  if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;