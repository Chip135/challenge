import { getDeck, getCards, addingToPiles } from "./drawCards.js";
import { setLocalStorage, getLocalStorage} from "./utils.mjs";
import { cpuCardTable, playerCardTable } from "./display.js";


let cpuEventListener = document.querySelector(".cpu-hand");
let playerEventListener = document.querySelector(".player-hand");

async function getHands() {
    getDeck();
    let deck = getLocalStorage("deck");
    const deckId = deck.deck_id;
    //console.log(deckId);
    let playerOneHand = await getCards(26, deckId);
    setLocalStorage("PlayerOne-Hand", playerOneHand);
    //console.log(deckId)
    let playerTwoHand = await getCards(26, deckId);
    setLocalStorage("PlayerTwo-Hand", playerTwoHand);
    console.log(getDeck());
}


cpuEventListener.addEventListener("click", cpuCardTable);

playerEventListener.addEventListener("click", playerCardTable);