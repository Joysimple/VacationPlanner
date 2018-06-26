// Init section
function init() {
    var nameInput = document.getElementById("greeting");
    var person = window.prompt("Please enter your name: ");
    var errorElement = document.getElementById("error");
    if (person != null) {
        nameInput.innerHTML += ", " + person;
    } 
    var enterButton = document.getElementById("enterDays");
    enterButton.addEventListener("click", clickEnter);
    var nextButton = document.getElementById("timingNext");
    nextButton.addEventListener("click", clickNext);    
}

// Handlers
function clickEnter() {
    var daysInput = document.getElementById("days").value;
    if (daysInput.length > 0) {
        var daysText = document.getElementById("daysMessage");
        if (daysInput < 4) {
            daysText.innerHTML = "Short trips are always worth it!";
        } else if (daysInput < 7) {
            daysText.innerHTML = "Cool, you’ll be there for almost a week!";
        } else {
            daysText.innerHTML = "You’ll have plenty of time to relax and have fun!";
        }
        var hoursText = document.getElementById("hoursMessage");
        var hours = daysInput * 24;
        hoursText.innerHTML = "That means you'll be traveling for " + hours + " hours";
        var minutesText = document.getElementById("minutesMessage");
        var minutes = hours * 60;
        minutesText.innerHTML = "Which means you'll be traveling for " + minutes + " minutes!";
        var secondsText = document.getElementById("secondsMessage");
        var seconds = minutes * 60;
        secondsText.innerHTML = "Which means you'll be traveling for " + seconds + " seconds!";
    } else {
        errorElement.innerHTML = "You have to input something";
    }
}
function clickNext() {
    
}

// Main section
init();
