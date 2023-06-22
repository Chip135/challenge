import { getLocalStorage, setLocalStorage } from "./utils.mjs";


async function convertToJson(res) {
    let jsonResponse = res.json();
    if (res.ok) {
      return jsonResponse;
    } else {
      throw { name: 'servicesError', message: jsonResponse};
    }
  }

export async function getDeck() {
    const deck = getLocalStorage("deck");
    if (!deck) {
        const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', options).then(convertToJson);
    setLocalStorage("deck", response);
    } else if (deck.remaining <= 0) {
        const reshuffledDeck = reshuffle(deckId);
        setLocalStorage("deck", reshuffledDeck);
    }
}
export async function drawCards(amount, shuffle = false) {
    const deck = getLocalStorage("deck");
    const deckId = deck.deck_id;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${amount}`, options).then(convertToJson);
    return response;
}

export async function reshuffle(){
    const deck = getLocalStorage("deck");
    const deckId = deck.deck_id;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
    setLocalStorage("deck", response);
    return response;
}

getDeck();
// console.log(drawCards(7, reshuffle()));