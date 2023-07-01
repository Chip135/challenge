import { getDeck, getCards } from "./drawCards.js";
import { setLocalStorage, getLocalStorage} from "./utils.mjs";
import { CardTable } from "./display.js";


let playerEventListener = document.querySelector(".player-hand");

async function getHands() {
    const deck = getLocalStorage("deck");
    //if (!deck) {
    getDeck();
    const deckId = deck.deck_id;
    //console.log(deckId);
    let cpuHand = await getCards(26, deckId);
    setLocalStorage("Cpu-Hand", cpuHand);
    //console.log(deckId)
    let playerHand = await getCards(26, deckId);
    setLocalStorage("Player-Hand", playerHand);
    //} else {}
}

getHands();

playerEventListener.addEventListener("click", CardTable);