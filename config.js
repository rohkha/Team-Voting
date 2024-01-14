import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {


    apiKey: "AIzaSyCeC8-FFalpuRBeslANCKjxootRdz5gB6s",

    authDomain: "team-voting-app-17ed5.firebaseapp.com",

    databaseURL: "https://team-voting-app-17ed5-default-rtdb.firebaseio.com",

    projectId: "team-voting-app-17ed5",

    storageBucket: "team-voting-app-17ed5.appspot.com",

    messagingSenderId: "703925715659",

    appId: "1:703925715659:web:32f1e5244681a24df4114e"



};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();