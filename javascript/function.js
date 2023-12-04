// HTML tugmani olamiz
let button = document.getElementById("submitButton");

// Tugmani bosilganda ishlayacak funktsiyani yaratamiz
function displayInput() {
  // Inputdan malumotni olib olamiz
  let usernameInput = document.getElementById("nameInput").value;
  let userEmailInput = document.getElementById("emailInput").value;
  let usercoment = document.getElementById("coment").value;

  // Malumotni console oynasiga chiqaramiz
  console.log("user name:", usernameInput);
  console.log("user email:", userEmailInput);
  console.log("user comment:", usercoment);
}

// Tugmani bosilganda displayInput funktsiyasini chaqiramiz
button.addEventListener("click", displayInput);

// 

// HTML tugmani olamiz
let btnSendMessage = document.getElementById("sendMessage");

// Tugmani bosganda yangi sahifa ochish
btnSendMessage.addEventListener('click', function() {
  window.open('https://mail.google.com','_blank');
});

// Email pochtaga habar yozish
btnSendMessage.addEventListener('click', function() {
    window.location.href = 'mailto:akobirxushvaqtov2605@gmail.com';
});

