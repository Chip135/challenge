import { getLocalStorage } from "./utils.mjs";

export async function cpuCardTable() {
    const playerOneCards = getLocalStorage("PlayerOne-Hand");
    console.log(playerOneCards);
    if (!playerOneCards) {
        const cardItems = "Your hand is empty";
        document.querySelector(".cpu-table").innerHTML = cardItems;
    } else {
        const cardItems = playerOneCards.cards.map((item) => cardTemplate(item));
        document.querySelector(".cpu-table").innerHTML = cardItems.join("");
    }
};

export async function playerCardTable() {
    const playerTwoCards = getLocalStorage("PlayerTwo-Hand");
    console.log(playerTwoCards);
    if (!playerTwoCards) {
        const cardItems = "Your hand is empty";
        document.querySelector(".player-table").innerHTML = cardItems;
    } else {
        const cardItems = playerTwoCards.cards.map((item) => cardTemplate(item));
        document.querySelector(".player-table").innerHTML = cardItems;
    }
}

function cardTemplate(card){
    const newCard = `<li class="playing-card">
    <img
        src="${card.image}"
        alt="${card.value} ${card.suit}">
    </li>`;
    
    return newCard;
}