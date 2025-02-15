// background color changer 

let orangeButton = document.getElementById('orange');
let blueButton = document.getElementById('blue');
let greenButton = document.getElementById('green');
let yellowButton = document.getElementById('yellow');

orangeButton.addEventListener('click', function() {
    document.body.style.backgroundColor = '#F9B572';
});

blueButton.addEventListener('click', function() {
    document.body.style.backgroundColor = '#8EA7E9';
});

greenButton.addEventListener('click', function() {
    document.body.style.backgroundColor = '#729762';
});

yellowButton.addEventListener('click', function() {
    document.body.style.backgroundColor = '#FFF89A';
});