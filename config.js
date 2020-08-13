import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBophUMjN8_2yutLhZW5ffxmtvSwUcht_k",
    authDomain: "library-management-9c615.firebaseapp.com",
    databaseURL: "https://library-management-9c615.firebaseio.com",
    projectId: "library-management-9c615",
    storageBucket: "library-management-9c615.appspot.com",
    messagingSenderId: "793416895927",
    appId: "1:793416895927:web:b331acc9b9c2549a522c32"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
