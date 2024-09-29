import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB2WyCgyls36BDKZlH1Hhhro7gCbiAhWBM",
    authDomain: "prime-3bd71.firebaseapp.com",
    projectId: "prime-3bd71",
    storageBucket: "prime-3bd71.appspot.com",
    measurementId: "G-728490LSLR"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp;