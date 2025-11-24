let myName= "Krish"
let chips= 1000
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
const inputBtn=document.getElementById("input-btn")
playerEl.textContent = myName + ": $" + chips
let bet=0

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    if(isAlive==true)
    {
        alert("Complete the game first")
        return

    }
    const input=Number(inputBtn.value)
    if(input===0||(Number.isNaN(input))||input>chips)
    {
        alert("Enter Valid Number")
        return
    }
    bet=input
    inputBtn.value=""
    isAlive = true
    hasBlackJack=false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 17) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!!"
        hasBlackJack = true
        chips+=bet+bet
    } else if(sum>21){
        message = "You're out of the game!"
        isAlive = false
        chips-=bet
    }else{
        message="You have won!"
        chips+=bet
        isAlive=false
    }
    messageEl.textContent = message
    playerEl.textContent = myName + ": $" + chips
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
    else
    {
        alert("Game is over. Click Start Game")
        return
    }
}
