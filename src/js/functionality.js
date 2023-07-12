import { getLocalStorage, setLocalStorage } from "./utils.mjs";


export function playerWins (){
    const cpuCards = getLocalStorage("Cpu-Hand");
    const playCards = getLocalStorage("Player-Hand");
    document.querySelector(".winner").innerText = "You Win the Hand"

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
    document.querySelector(".winner").innerText = "Computer Wins the Hand"

    const losCard = playCards.cards[0];
    const winCard = cpuCards.cards[0];
    cpuCards.cards.push(losCard);
    cpuCards.cards.push(winCard);
    playCards.cards.splice(0, 1);
    cpuCards.cards.splice(0, 1);

    setLocalStorage("Player-Hand", playCards);
    setLocalStorage("Cpu-Hand", cpuCards);

}

export function playerWinsDraw (){
    const cpuCards = getLocalStorage("Cpu-Hand");
    const playCards = getLocalStorage("Player-Hand");
    document.querySelector(".winner").innerText = "You Win the Hand"

    const losCard = cpuCards.cards[0];
    const winCard = playCards.cards[0];
    const losDrawCard = cpuCards.cards[1];
    const winDrawCard = playCards.cards[1];
    console.log(losDrawCard);
    console.log(winDrawCard);
    playCards.cards.push(losCard);
    playCards.cards.push(winCard);
    playCards.cards.push(losDrawCard);
    playCards.cards.push(winDrawCard);
    cpuCards.cards.splice(0, 2);
    playCards.cards.splice(0, 2);


    setLocalStorage("Player-Hand", playCards);
    setLocalStorage("Cpu-Hand", cpuCards);
   
}

export function cpuWinsDraw (){
    const cpuCards = getLocalStorage("Cpu-Hand");
    const playCards = getLocalStorage("Player-Hand");
    document.querySelector(".winner").innerText = "Computer Wins the Hand"

    const losCard = playCards.cards[0];
    const winCard = cpuCards.cards[0];
    const losDrawCard = playCards.cards[1];
    const winDrawCard = cpuCards.cards[1];
    console.log(losDrawCard);
    console.log(winDrawCard);
    cpuCards.cards.push(losCard);
    cpuCards.cards.push(winCard);
    cpuCards.cards.push(losDrawCard);
    cpuCards.cards.push(winDrawCard);
    playCards.cards.splice(0, 2);
    cpuCards.cards.splice(0, 2);

    setLocalStorage("Player-Hand", playCards);
    setLocalStorage("Cpu-Hand", cpuCards);
   
}

export function draw (){
    const cpuCards = getLocalStorage("Cpu-Hand");
    const playCards = getLocalStorage("Player-Hand");

    const playerItems = playCards.cards.map((item) => cpuWarTemplate(item));
    document.querySelector(".war-player").innerHTML = playerItems[1];

    const cpuItems = cpuCards.cards.map((item) => playerWarTemplate(item));
    document.querySelector(".war-cpu").innerHTML = cpuItems[1];

    const curValCpu = cpuCards.cards[1].value;
    const curValPlay = playCards.cards[1].value;
    if (curValCpu > curValPlay){
        cpuWinsDraw();
    }
    if (curValPlay > curValCpu){
        playerWinsDraw();
    }
    if (curValCpu == curValPlay){
        draw();
    }
}

function cpuWarTemplate(card){

    const newCard = `<li class="war-cards">
    <img class="card-image"
        src="${card.image}"
        alt="${card.value} of ${card.suit}">
    </li>`;
    
    return newCard;
}

function playerWarTemplate(card){

    const newCard = `<li class="war-cards">
    <img class="card-image"
        src="${card.image}"
        alt="${card.value} of ${card.suit}">
    </li>`;
    
    return newCard;
}