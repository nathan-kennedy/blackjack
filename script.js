let cards = []
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
cardsEl = document.getElementById("cards-el");


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();
}

function drawNewCard() {
    if (isAlive) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
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
    sumEl.textContent = "Sum: " + sum;
}