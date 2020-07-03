import * as firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCkfK03fvaeff_c3LOvghtMb9Yib1MoQCY",
    authDomain: "prova-fumaca.firebaseapp.com",
    databaseURL: "https://prova-fumaca.firebaseio.com",
    projectId: "prova-fumaca",
    storageBucket: "prova-fumaca.appspot.com",
    messagingSenderId: "293081513950",
    appId: "1:293081513950:web:35f80e788ca17833dc274f",
    measurementId: "G-ENGYJBMELW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();