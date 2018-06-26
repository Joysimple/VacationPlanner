// Init section
function init() {
    var nameInput = document.getElementById("greeting");
    var person = window.prompt("Please enter your name: ");
    var timingError = document.getElementById("timingError");
    if (person != null) {
        nameInput.innerHTML += ", " + person;
    } 
    var enterButton = document.getElementById("enterDays");
    enterButton.addEventListener("click", clickEnter);
    var nextButton = document.getElementById("timingNext");
    nextButton.addEventListener("click", clickNext);  
    var enterBudget = document.getElementById("enterBudget");
    enterBudget.addEventListener("click", clickBudget);
    var budgetError = document.getElementById("budgetError");  
    
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
        var timingNext = document.getElementById("timingNext");
        timingNext.removeAttribute("hidden");
    } else {
        timingError.innerHTML = "You have to input something";
    }
}
function clickNext() {
    var budgetPage = document.getElementById("budgetSection");
    budgetPage.removeAttribute("hidden");
}
function clickBudget() {
    var tripBudget = document.getElementById("tripBudget").value;
    var exchangeRate = 0.86;
    if (tripBudget > 0) {
        var exchangeMsg = document.getElementById("tripExchangeMsg");
        var exchange = tripBudget * exchangeRate;
        exchangeMsg.innerHTML = "That means you'll need " + exchange + " EUR for your trip."
        var daysInput = document.getElementById("days").value;
        var dailyExchangeMsg = document.getElementById("dailyExchangeMsg");
        var dailyExchange = exchange / daysInput;
        dailyExchangeMsg.innerHTML = "That means you can spend " + dailyExchange + " EUR per day."
        var exchange10Msg = document.getElementById("exchange10Msg");
        var exchange10 = exchangeRate * 10;
        exchange10Msg.innerHTML = "You'll need " + exchange10 + " EUR for an item that would cost you 10 USD."
        var exchange500Msg = document.getElementById("exchange500Msg");
        var exchange500 = exchangeRate * 500;
        exchange500Msg.innerHTML = "You'll need " + exchange500 + " EUR for an item that would cost you 500 USD."
    }
    else {
        budgetError.innerHTML = "You have to input digits";
    }
}
var images = ["images/image1", "images/image2", "images/image3", "images/image4" ];
var currentImage = 0;
setInterval(changeImage, 3000);
function changeImage(){
    currentImage++;
    if(currentImage > images.length - 1){
        currentImage = 0;
    }
    document.body.style.backgroundImage = "url(" + images[currentImage] + ")";
}
// Main section
init();
