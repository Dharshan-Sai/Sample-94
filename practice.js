
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAKKpJsgljZwZdRLRhwM3z4PBr6WewHeZA",
    authDomain: "dhap-uxpr.firebaseapp.com",
    databaseURL: "https://dhap-uxpr-default-rtdb.firebaseio.com",
    projectId: "dhap-uxpr",
    storageBucket: "dhap-uxpr.appspot.com",
    messagingSenderId: "538615952622",
    appId: "1:538615952622:web:9ff853e9960cd01f092fff"
  };

firebase.initializeApp(firebaseConfig);

function addUser() 
{
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update ({
    purpose : "adding user"
});
}