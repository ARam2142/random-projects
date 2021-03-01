const numberVal = document.getElementById('num');
const addBtn = document.getElementById('increase');
const subtractBtn = document.getElementById('decrease');
let count = 0

function countUp() {
    if(count == 0) {
        count++;
    } 
    if(count > 0) {
        numberVal.style.color = 'green'
    }
    numberVal.innerHTML = count++;
}

function countDown() {
    if(count == 0) {
        count--;
    }

    if(count< 0) {
        numberVal.style.color = 'red'
    }
    numberVal.innerHTML = count--;
}

addBtn.addEventListener('click', countUp)
subtractBtn.addEventListener('click', countDown)