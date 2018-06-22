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
        var daysText = document.getElementById("daysMessage");
        daysText.innerHTML = "That means you'll be traveling for " + daysInput + " days";
        var hoursText = document.getElementById("hoursMessage");
        var hours = daysInput * 24;
        hoursText.innerHTML = "That means you'll be traveling for " + hours + " hours";
        var minutesText = document.getElementById("minutesMessage");
        var minutes = hours * 60;
        minutesText.innerHTML = "Which means you'll be traveling for " + minutes + " minutes!";
        var secondsText = document.getElementById("secondsMessage");
        var seconds = minutes * 60;
        secondsText.innerHTML = "Which means you'll be traveling for " + seconds + " seconds!";
    }
    else {
        errorElement.innerHTML = "You have to input something";
    }
}