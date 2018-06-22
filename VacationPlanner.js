var nameInput = document.getElementById("greeting");
var person = prompt("Please enter your name: ");

if (person != null) {
    nameInput.innerHTML += ", " + person;
} 