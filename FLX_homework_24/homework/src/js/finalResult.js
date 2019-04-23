import { histori } from './buttonOnclick';

export function finalResultPrint(yourPoints, machinePoints){
    if (yourPoints > machinePoints){
        histori.innerHTML += `<h4>Final result: You have won</h4>`
    }
    if (yourPoints < machinePoints){
        histori.innerHTML += `<h4>Final result: You have lost</h4>`
    }
    if (yourPoints === machinePoints){
        histori.innerHTML += `<h4>Final result: Draw</h4>`
    }
}