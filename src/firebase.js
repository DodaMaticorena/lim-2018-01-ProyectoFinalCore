var appFireBase = {};
(() => {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDIkZRLuu5vCWxShzlq6f63PrOS0HlPytE",
    authDomain: "viewwork-2c46a.firebaseapp.com",
    databaseURL: "https://viewwork-2c46a.firebaseio.com",
    projectId: "viewwork-2c46a",
    storageBucket: "viewwork-2c46a.appspot.com",
    messagingSenderId: "360928018323"
  };
  firebase.initializeApp(config);

  appFireBase = firebase;
  // appFireBase.prototype.setData = ()
})()