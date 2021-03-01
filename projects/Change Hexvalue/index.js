const background = document.getElementById('transform');
const textValue = document.getElementById('value');
const button = document.getElementById('color');

let hexValues = ['#f71297', '#0477c2', '#87ceeb', '#6fa1f8', '#2931b3', '#b99f7b', '#eb4b85'];
background.style.backgroundColor = '#2E8B57';

function changeHexVal() {
    let randomVal = Math.floor(Math.random() * hexValues.length);

    textValue.innerHTML = hexValues[randomVal];

    background.style.background = hexValues[randomVal];
}

button.addEventListener('click', function() {
    changeHexVal();
});



