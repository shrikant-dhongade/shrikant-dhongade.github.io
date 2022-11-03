// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC4_7tCTKxUJHIgB1CH-nxpYHLT4U1UIt0",
  authDomain: "fir-c9d6c.firebaseapp.com",
  databaseURL: "https://fir-c9d6c-default-rtdb.firebaseio.com",
  projectId: "fir-c9d6c",
  storageBucket: "fir-c9d6c.appspot.com",
  messagingSenderId: "576200590401",
  appId: "1:576200590401:web:bdfcbd521e541ab7c5f2c0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}

//mail from firebase to email
admin.firestore().collection('mail').add({
  to: 'codewithshrikant@gmail.com',
  message: {
    subject: 'Hello from Firebase!',
    html: 'This is an <code>HTML</code> email body.',
  },
})