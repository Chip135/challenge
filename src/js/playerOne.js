import { getDeck, drawCards } from "./drawCards";
import { setLocalStorage } from "./utils.mjs";

getDeck();
async function getHand() {
    const playerOneHand = await drawCards(26);
    setLocalStorage("PlayerOne-Hand", playerOneHand);
}

getHand();
console.log(getHand());