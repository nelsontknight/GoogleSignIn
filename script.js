var Config = {
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
firebase.initializeApp(Config);

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
};

<a href="#" onclick="signOut();">Sign out</a>

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
