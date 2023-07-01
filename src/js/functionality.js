import { getLocalStorage, setLocalStorage } from "./utils.mjs";


export function playerWins (){
    const cpuCards = getLocalStorage("Cpu-Hand");
    const playCards = getLocalStorage("Player-Hand");

    const losCard = cpuCards.cards[0];
    const winCard = playCards.cards[0];
    playCards.cards.push(losCard);
    playCards.cards.push(winCard);
    cpuCards.cards.splice(0, 1);
    playCards.cards.splice(0, 1);

    setLocalStorage("Player-Hand", playCards);
    setLocalStorage("Cpu-Hand", cpuCards);
   
}

export function cpuWins (){
    const cpuCards = getLocalStorage("Cpu-Hand");
    const playCards = getLocalStorage("Player-Hand");

    const losCard = playCards.cards[0];
    const winCard = cpuCards.cards[0];
    cpuCards.cards.push(losCard);
    cpuCards.cards.push(winCard);
    playCards.cards.splice(0, 1);
    cpuCards.cards.splice(0, 1);

    setLocalStorage("Player-Hand", playCards);
    setLocalStorage("Cpu-Hand", cpuCards);
   
}