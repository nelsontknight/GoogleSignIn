var firebaseConfig = {
  apiKey: "AIzaSyAjCKPaytT8KgyD6N8enxPI8TysBePq2jQ",
  authDomain: "group8project1-cd703.firebaseapp.com",
  databaseURL: "https://group8project1-cd703.firebaseio.com",
  projectId: "group8project1-cd703",
  storageBucket: "",
  messagingSenderId: "98301800415",
  appId: "1:98301800415:web:41977ef82112f835579e6a",
  measurementId: "G-T74D3N65W8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });