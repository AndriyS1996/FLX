let reset = document.getElementsByClassName('reset')[0];

reset.onclick = () => {
    round = 0;
    yourPoints = 0;
    machinePoints = 0;
    histori.innerHTML = '';
    yourImg.innerHTML ='';
    machineImg.innerHTML = '';
}