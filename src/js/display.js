import { getLocalStorage } from "./utils.mjs";
import { playerWins, cpuWins, draw } from "./functionality.js";

const CARD_VALUE_MAP = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "JACK": 11,
    "QUEEN": 12,
    "KING": 13,
    "ACE": 14,
}

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
    if (CARD_VALUE_MAP[curValCpu] > CARD_VALUE_MAP[curValPlay]){
        cpuWins();
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }
    if (CARD_VALUE_MAP[curValPlay] > CARD_VALUE_MAP[curValCpu]){
        playerWins();
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }
    if (CARD_VALUE_MAP[curValCpu] == CARD_VALUE_MAP[curValPlay]){
        setTimeout(draw, 1000);
        setTimeout(() => {
            window.location.reload();
        }, 4000);
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

