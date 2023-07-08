import { getLocalStorage } from "./utils.mjs";
import { playerWins, cpuWins, draw } from "./functionality.js";


export async function CardTable() {
    const CpuCards = getLocalStorage("Cpu-Hand");
    //console.log(CpuCards);
    if (!CpuCards) {
        const cardItems = "You WIN!!";
        document.querySelector(".cpu-table").innerHTML = cardItems;
    } else {
        const cardItems = CpuCards.cards.map((item) => cpuTemplate(item));
        document.querySelector(".cpu-table").innerHTML = cardItems[0];
    }
    const playerCards = getLocalStorage("Player-Hand");
    //console.log(playerCards);
    if (!playerCards) {
        const cardItems = "Better luck next time.";
        document.querySelector(".player-table").innerHTML = cardItems;
    } else {
        const cardItems = playerCards.cards.map((item) => playerTemplate(item));
        document.querySelector(".player-table").innerHTML = cardItems[0];
    }
    const curValCpu = CpuCards.cards[0].value;
    const curValPlay = playerCards.cards[0].value;
    if (curValCpu > curValPlay){
        cpuWins();
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }
    if (curValPlay > curValCpu){
        playerWins();
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }
    if (curValCpu == curValPlay){
        setTimeout(draw, 1000);
        setTimeout(() => {
            window.location.reload();
        }, 6000);
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

