// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCPE3gyCqhfAyWHmTI7mgszSxemael1gPU",
  authDomain: "contactform-5d507.firebaseapp.com",
  databaseURL: "https://contactform-5d507.firebaseio.com",
  projectId: "contactform-5d507",
  storageBucket: "contactform-5d507.appspot.com",
  messagingSenderId: "178641176889",
  appId: "1:178641176889:web:5eb9e7610988e0d4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');


// Create event listener for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){

  e.preventDefault;
  var name = getFormVal('name');
  var phone = getFormVal('phone');
  var message = getFormVal('message');

  saveMessage(name, phone, message);

  document.querySelector('.alert').style.display = 'block';
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 2000);

  document.getElementById('contactForm').reset();
}

function getFormVal (id) {
  return document.getElementById(id).value;
}

function saveMessage (name, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    phone: phone,
    message: message
  });
}