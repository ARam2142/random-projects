const button = document.getElementById('color');
const body = document.getElementById('change');
let colorArr = ['red', 'blue', 'green', 'orange', 'yellow', 'violet'];

function changeColor() {
    let randomColor = Math.round(Math.random() * colorArr.length);
    console.log(randomColor);

    body.style.backgroundColor = colorArr[randomColor]
}

button.addEventListener('click', function() {
    changeColor()
})