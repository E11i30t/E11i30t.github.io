let elliot = 0;
let ellie = 0;
let grace = 0;
let ricky = 0;

let q1b1 = document.getElementById('q1b1');
let q1b2 = document.getElementById('q1b2');
let q1b3 = document.getElementById('q1b3');
let q1b4 = document.getElementById('q1b4');

let q2b1 = document.getElementById('q2b1');
let q2b2 = document.getElementById('q2b2');
let q2b3 = document.getElementById('q2b3');
let q2b4 = document.getElementById('q2b4');

let q3b1 = document.getElementById('q3b1');
let q3b2 = document.getElementById('q3b2');
let q3b3 = document.getElementById('q3b3');
let q3b4 = document.getElementById('q3b4');

let q4b1 = document.getElementById('q4b1');
let q4b2 = document.getElementById('q4b2');
let q4b3 = document.getElementById('q4b3');
let q4b4 = document.getElementById('q4b4');

let q5b1 = document.getElementById('q5b1');
let q5b2 = document.getElementById('q5b2');
let q5b3 = document.getElementById('q5b3');
let q5b4 = document.getElementById('q5b4');

let q2 = document.getElementById('q2');
let q3 = document.getElementById('q3');
let q4 = document.getElementById('q4');
let q5 = document.getElementById('q5');

q2.style.display = "none";
q3.style.display = "none";
q4.style.display = "none";
q5.style.display = "none";

const nextButton = document.getElementById("toResults");
nextButton.hidden = true;

q1b1.onclick = function() {
    ellie += 1;
    q1b2.disabled = true;
    q1b3.disabled = true;
    q1b4.disabled = true;
    //nextButton.hidden = false;
    q2.style.display  = "grid";
    window.location.hash='q2';
}

q1b2.onclick = function() {
    grace += 1;
    q1b1.disabled = true;
    q1b3.disabled = true;
    q1b4.disabled = true;
    //nextButton.hidden = false;
    q2.style.display  = "grid";
    window.location.hash='q2';
}

q1b3.onclick = function() {
    elliot += 1;
    q1b2.disabled = true;
    q1b1.disabled = true;
    q1b4.disabled = true;
   // nextButton.hidden = false;
    q2.style.display  = "grid";
    window.location.hash='q2';
}

q1b4.onclick = function() {
    ricky += 1;
    q1b2.disabled = true;
    q1b3.disabled = true;
    q1b1.disabled = true;
   // nextButton.hidden = false;
    q2.style.display  = "grid";
    window.location.hash='q2';
}

q2b1.onclick = function() {
    elliot += 1;
    q2b2.disabled = true;
    q2b3.disabled = true;
    q2b4.disabled = true;
    //nextButton.hidden = false;
    q3.style.display  = "grid";
    window.location.hash='q3';
}

q2b2.onclick = function() {
    ellie += 1;
    q2b1.disabled = true;
    q2b3.disabled = true;
    q2b4.disabled = true;
    //nextButton.hidden = false;
    q3.style.display  = "grid";
    window.location.hash='q3';
}

q2b3.onclick = function() {
    grace += 1;
    q2b1.disabled = true;
    q2b2.disabled = true;
    q2b4.disabled = true;
    //nextButton.hidden = false;
    q3.style.display  = "grid";
    window.location.hash='q3';
}

q2b4.onclick = function() {
    ricky += 1;
    q2b1.disabled = true;
    q2b3.disabled = true;
    q2b2.disabled = true;
    //nextButton.hidden = false;
    q3.style.display  = "grid";
    window.location.hash='q3';
}

q3b1.onclick = function() {
    ellie += 1;
    q3b4.disabled = true;
    q3b3.disabled = true;
    q3b2.disabled = true;
    //nextButton.hidden = false;
    q4.style.display  = "grid";
    window.location.hash='q4';
}

q3b2.onclick = function() {
    grace += 1;
    q3b4.disabled = true;
    q3b3.disabled = true;
    q3b1.disabled = true;
    //nextButton.hidden = false;
    q4.style.display  = "grid";
    window.location.hash='q4';
}

q3b3.onclick = function() {
    elliot += 1;
    q3b4.disabled = true;
    q3b1.disabled = true;
    q3b2.disabled = true;
   // nextButton.hidden = false;
    q4.style.display  = "grid";
    window.location.hash='q4';
}

q3b4.onclick = function() {
    ricky += 1;
    q3b1.disabled = true;
    q3b3.disabled = true;
    q3b2.disabled = true;
   // nextButton.hidden = false;
    q4.style.display  = "grid";
    window.location.hash='q4';
}

q4b1.onclick = function() {
    elliot += 1;
    q4b4.disabled = true;
    q4b3.disabled = true;
    q4b2.disabled = true;
    //nextButton.hidden = false;
    q5.style.display  = "grid";
    window.location.hash='q5';
}

q4b2.onclick = function() {
    ricky += 1;
    q4b4.disabled = true;
    q4b3.disabled = true;
    q4b2.disabled = true;
    //nextButton.hidden = false;
    q5.style.display  = "grid";
    window.location.hash='q5';
}

q4b3.onclick = function() {
    grace += 1;
    q4b4.disabled = true;
    q4b1.disabled = true;
    q4b2.disabled = true;
   // nextButton.hidden = false;
    q5.style.display  = "grid";
    window.location.hash='q5';
}

q4b4.onclick = function() {
    ellie += 1;
    q4b1.disabled = true;
    q4b3.disabled = true;
    q4b2.disabled = true;
   // nextButton.hidden = false;
    q5.style.display  = "grid";
    window.location.hash='q5';
}

q5b1.onclick = function() {
    elliot += 1;
    q5b4.disabled = true;
    q5b3.disabled = true;
    q5b2.disabled = true;
    nextButton.hidden = false;
    window.scrollTo(0, document.body.scrollHeight);
}

q5b2.onclick = function() {
    ricky += 1;
    q5b4.disabled = true;
    q5b3.disabled = true;
    q5b1.disabled = true;
    nextButton.hidden = false;
    window.scrollTo(0, document.body.scrollHeight);
}

q5b3.onclick = function() {
    grace += 1;
    q5b4.disabled = true;
    q5b1.disabled = true;
    q5b2.disabled = true;
    nextButton.hidden = false;
    window.scrollTo(0, document.body.scrollHeight);
}

q5b4.onclick = function() {
    ellie += 1;
    q5b1.disabled = true;
    q5b3.disabled = true;
    q5b2.disabled = true;
    nextButton.hidden = false;
    window.scrollTo(0, document.body.scrollHeight);
}

nextButton.onclick = function() {
    if (ricky >= elliot && ricky >= ellie && ricky >= grace) {
        location.href = "/QuizSite/ricky.html";
    }
    else if (ellie >= ricky && ellie >= elliot && ellie >= grace) {
        location.href = "/QuizSite/ellie.html";
    }
    else if (elliot >= ricky && elliot >= ellie && elliot >= grace) {
        location.href = "/QuizSite/elliot.html";
    }
    else {
        location.href = "/QuizSite/grace.html"
    }
}