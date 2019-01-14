import firebase from 'firebase';

  // Initialize Firebase
  const  config = {
    apiKey: "AIzaSyBl8h-28E6R5eMyxsvNgTR9_W8T3reluOo",
    authDomain: "manager-a9b08.firebaseapp.com",
    databaseURL: "https://manager-a9b08.firebaseio.com",
    projectId: "manager-a9b08",
    storageBucket: "manager-a9b08.appspot.com",
    messagingSenderId: "216528480444"
  };
  
  export const Firebase = firebase.initializeApp(config);