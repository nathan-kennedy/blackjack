let firstCard = 4;
let secondCard = 9;
let newCard = 8;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
cardsEl = document.getElementById("cards-el");

function startGame() {
    if (sum <= 20) {
        message = "Would you like to draw a card?";
    } else if (sum === 21) {
        hasBlackjack = true;
        message = "You've got blackjack!";
    } else {
        isAlive = false;
        message = "You've lost the hand";
    }
    
    messageEl.textContent = message;
    cardsEl.textContent = "Cards: " + firstCard + " & " + secondCard;
    sumEl.textContent = "Sum: " + sum;
}

function drawNewCard() {
    cardsEl.textContent = "Cards: " + firstCard + " & " + secondCard + " & " + newCard;
    sum = sum + newCard;
    sumEl.textContent = "Sum: " + sum;
    messageEl.textContent = message;
}
