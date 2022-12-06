import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/storage';
import "firebase/firestore";
import "firebase/auth";

// 테스트 서버 : smart-paps-renew
firebase.initializeApp({
    apiKey: "AIzaSyA4lrLTNhelRMsPjaMWcipG2XE4taJ7OYc",
    authDomain: "smart-paps-renew.firebaseapp.com",
    projectId: "smart-paps-renew",
    storageBucket: "smart-paps-renew.appspot.com",
    messagingSenderId: "386736944404",
    appId: "1:386736944404:web:1417575ddc57e85ecabe01",
    measurementId: "G-EQ4406SZJY"
});

// 실 서버 : smart-paps
// firebase.initializeApp({
//     apiKey: "AIzaSyD27veoWuISvDAktbQ89RdJHqzJefcz99g",
//     authDomain: "smart-pops.firebaseapp.com",
//     projectId: "smart-pops",
//     storageBucket: "smart-pops.appspot.com",
//     messagingSenderId: "577084985621",
//     appId: "1:577084985621:web:ded55c3aae2693895bd91c",
//     measurementId: "G-829MH8QJQK"
// });

firebase.auth().languageCode = 'ko'

const auth = firebase.auth()
const firestore = firebase.firestore()
const functions = firebase.app().functions('asia-northeast3')

export {auth, firestore, functions, firebase}






