import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyCNpzIlAdhyfpVcngvspAozip-XOI__fKc",
    authDomain: "vuetify-playlist-ninja.firebaseapp.com",
    databaseURL: "https://vuetify-playlist-ninja.firebaseio.com",
    projectId: "vuetify-playlist-ninja",
    storageBucket: "vuetify-playlist-ninja.appspot.com",
    messagingSenderId: "902382926148",
    appId: "1:902382926148:web:4af90c1a71180a1cb43f11",
    measurementId: "G-XGMMBSGSP1"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;

