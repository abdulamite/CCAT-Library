var config = {
  apiKey: "AIzaSyDevXt8xK7P0Sbt3dCnffN9JYaKJZMebAU",
  authDomain: "quick-tutorial.firebaseapp.com",
  databaseURL: "https://quick-tutorial.firebaseio.com",
  storageBucket: "quick-tutorial.appspot.com",
  messagingSenderId: "352144981390"
};
firebase.initializeApp(config);

// Use this to add the database items to the page
// var Title = document.getElementById('Title');
// var auth = document.getElementById('auth');
// var TitleRef = firebase.database().ref().child('Books').child('0001').child('Title');
// var authRef = firebase.database().ref().child('Books').child('0001').child('Author');
// TitleRef.on('value', snap => Title.innerText = snap.val());
// authRef.on('value', snap => auth.innerText = snap.val());

//This is where the angular starts
var app = angular
          .module("myModule",[])
          .controller("myController",function($scope){

            //array containing the json objects, this will be replaced with a link to the database
            // this will show the info it in firebug console
            $scope.books = bound;
          });
