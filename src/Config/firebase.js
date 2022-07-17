import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAcMfhr0E58gb9CejKR0KPR3L4ucJnj-hg",
    authDomain: "guitar-shop-e5ed4.firebaseapp.com",
    projectId: "guitar-shop-e5ed4",
    storageBucket: "guitar-shop-e5ed4.appspot.com",
    messagingSenderId: "291520229972",
    appId: "1:291520229972:web:eb77be5da5ae87d391f3c1",
    measurementId: "G-QMWBK5EHHM"
};

firebase.initializeApp(firebaseConfig)
firebase.auth=firebase.auth()
firebase.db=firebase.firestore()
export default firebase
