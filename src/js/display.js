import { getLocalStorage } from "./utils.mjs";
import { playerWins, cpuWins } from "./functionality.js";


export async function CardTable() {
    const CpuCards = getLocalStorage("Cpu-Hand");
    //console.log(CpuCards);
    if (!CpuCards) {
        const cardItems = "Computer hand is empty";
        document.querySelector(".cpu-table").innerHTML = cardItems;
    } else {
        const cardItems = CpuCards.cards.map((item) => cpuTemplate(item));
        document.querySelector(".cpu-table").innerHTML = cardItems[0];
    }
    const playerCards = getLocalStorage("Player-Hand");
    //console.log(playerCards);
    if (!playerCards) {
        const cardItems = "Your hand is empty";
        document.querySelector(".player-table").innerHTML = cardItems;
    } else {
        const cardItems = playerCards.cards.map((item) => playerTemplate(item));
        document.querySelector(".player-table").innerHTML = cardItems[0];
    }
    const curValCpu = CpuCards.cards[0].value;
    const curValPlay = playerCards.cards[0].value;
    if (curValCpu > curValPlay){
        cpuWins();
        //setTimeout(location.reload(), 50000);
    }
    if (curValPlay > curValCpu){
        playerWins();
        //setTimeout(location.reload(), 50000);
    }
};


function cpuTemplate(card){
    const newCard = `<li class="cpu-playing-card">
    <img class="card-image"
        src="${card.image}"
        alt="${card.value} of ${card.suit}">
    </li>`;
    
    return newCard;
}

function playerTemplate(card){
    const newCard = `<li class="player-playing-card">
    <img class="card-image"
        src="${card.image}"
        alt="${card.value} of ${card.suit}">
    </li>`;
    
    return newCard;
}

