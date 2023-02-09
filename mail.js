const firebaseConfig = {
  apiKey: "AIzaSyBKKvsicsU3G__KMNGXE0Wm6vCvdvAz_jQ",
  authDomain: "bsnl-complaint-portal.firebaseapp.com",
  databaseURL: "https://bsnl-complaint-portal-default-rtdb.firebaseio.com",
  projectId: "bsnl-complaint-portal",
  storageBucket: "bsnl-complaint-portal.appspot.com",
  messagingSenderId: "579404248414",
  appId: "1:579404248414:web:c664f19a395fa1a5364bcf"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var phoneNo = getElementVal("phoneNo");
  var connectionNo = getElementVal("connectionNo");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, phoneNo,connectionNo, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, phoneNo, connectionNo, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    phoneNo: phoneNo,
    connectionNo:connectionNo,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
