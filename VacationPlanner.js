var nameInput = document.getElementById("greeting");
var person = window.prompt("Please enter your name: ");
var errorElement = document.getElementById("error");
if (person != null) {
    nameInput.innerHTML += ", " + person;
} 
var enterButton = document.getElementById("enterDays");
enterButton.addEventListener("click", clickEnter);
function clickEnter(){
    var daysInput = document.getElementById("days").value;
    if (daysInput.length > 0){
        var hoursText = document.createElement("p");
        var hours = daysInput * 24;
        hoursText.innerHTML = "That means you'll be traveling for " + hours + "hours";
        var minutesText = document.createElement("p");
        var minutes = hours * 60;
        minutesText.innerHTML = "Which means you'll be traveling for " + minutes + "minutes!";
    }
    else {
        errorElement.innerHTML = "You have to input something";
    }
}