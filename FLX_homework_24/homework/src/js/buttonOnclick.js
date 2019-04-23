import { finalResultPrint } from './finalResult';

let rock = document.getElementsByClassName('rock')[0];
let paper = document.getElementsByClassName('paper')[0];
let scissors = document.getElementsByClassName('scissors')[0];
export let histori = document.getElementsByClassName('history-text')[0];
let yourImg = document.getElementsByClassName('image-1')[0];
let machineImg = document.getElementsByClassName('image-2')[0];
let choices = ['Rock', 'Paper', 'Scissors'];
let round = 0;
let yourPoints = 0;
let machinePoints = 0;
let yourChoice = '';
let machineChoice = '';
let roundResult = '';
let reset = document.getElementsByClassName('reset')[0];


export function setClickRock(){
    rock.onclick = function(){
        machineChoice = choices[Math.floor(Math.random() * 3)]
        yourChoice = 'Rock';
        yourImg.innerHTML = `<h4>Your move</h4>
                            <img src="img/${yourChoice}.jpg" alt="foto">` 
        machineImg.innerHTML = `<h4>Machine move</h4>
                                <img src="img/${machineChoice}.jpg" alt="foto">`
        round++;
        switch (machineChoice) {
            case 'Rock':
                roundResult = 'Draw';
                break;
            case 'Scissors':
                roundResult = 'You`ve WON';
                yourPoints++;
                break;
            case 'Paper':
                roundResult = 'You`ve LOST';
                machinePoints++;
        }

        histori.innerHTML += `<p>Round ${round}, ${yourChoice} vs ${machineChoice}, ${roundResult}</p>`;
        if (round === 3){
            finalResultPrint(yourPoints, machinePoints);
            round = 0;
            yourPoints = 0;
            machinePoints = 0;
        }
    }
}

export function setClickPaper(){
    paper.onclick = function(){
        machineChoice = choices[Math.floor(Math.random() * 3)]
        yourChoice = 'Paper';
        yourImg.innerHTML = `<h4>Your move</h4>
                            <img src="img/${yourChoice}.jpg" alt="foto">` 
        machineImg.innerHTML = `<h4>Machine move</h4>
                                <img src="img/${machineChoice}.jpg" alt="foto">`
        round++;
        switch (machineChoice) {
            case 'Rock':
                roundResult = 'You`ve WON';
                yourPoints++;
                break;
            case 'Scissors':
                roundResult = 'You`ve LOST';
                machinePoints++;
                break;
            case 'Paper':
                roundResult = 'Draw';
        }

        histori.innerHTML += `<p>Round ${round}, ${yourChoice} vs ${machineChoice}, ${roundResult}</p>`;
        if (round === 3){
            finalResultPrint(yourPoints, machinePoints);
            round = 0;
            yourPoints = 0;
            machinePoints = 0;
        }
    }
}

export function setClickScissors(){
    scissors.onclick = function(){
        machineChoice = choices[Math.floor(Math.random() * 3)]
        yourChoice = 'Scissors';
        yourImg.innerHTML = `<h4>Your move</h4>
                            <img src="img/${yourChoice}.jpg" alt="foto">` 
        machineImg.innerHTML = `<h4>Machine move</h4>
                                <img src="img/${machineChoice}.jpg" alt="foto">`
        round++;
        switch (machineChoice) {
            case 'Rock':
                roundResult = 'You`ve LOST';
                machinePoints++;
                break;
            case 'Scissors':
                roundResult = 'Draw';
                break;
            case 'Paper':
                roundResult = 'You`ve WON';
                yourPoints++;
        }

        histori.innerHTML += `<p>Round ${round}, ${yourChoice} vs ${machineChoice}, ${roundResult}</p>`;
        if (round === 3){
            finalResultPrint(yourPoints, machinePoints);
            round = 0;
            yourPoints = 0;
            machinePoints = 0;
        }
    }
}

export function setClickReset(){
    reset.onclick = () => {
        round = 0;
        yourPoints = 0;
        machinePoints = 0;
        histori.innerHTML = '';
        yourImg.innerHTML ='';
        machineImg.innerHTML = '';
    }
}
