let joke = document.querySelector('button');
let claims = document.querySelector('h3');
let header = document.getElementsByClassName('header')[0];
let questions = document.getElementsByClassName('questions')[0];
let ulist = document.querySelector('ul');
let moan = document.querySelector('audio');
let gullible = document.querySelector('h4')
let main = document.getElementById('main')

function changeBackground(){
    document.body.style.backgroundImage = "url(/interactive/resources/images/Barry.png)";
    gullible.innerHTML = "YOU'RE GULLIBLE!";
    gullible.style.fontWeight = '900';
    gullible.style.fontSize = 'xx-large';
    gullible.style.marginTop = '20rem';
    gullible.style.color = 'gold';
    main.style.display = 'none';
    moan.play();
};

joke.onclick = changeBackground;