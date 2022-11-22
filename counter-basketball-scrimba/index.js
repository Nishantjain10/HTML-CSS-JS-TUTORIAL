let count = 0;
let secCount = 0;
let scoreCount = document.getElementById("score-el-primary")
let scoreSecCount = document.getElementById("score-el-secondary")

function addOne() {
    count += 1;
    scoreCount.innerText = count;
}

function addTwo() {
    count += 2;
    scoreCount.innerText = count;
}

function addThree() {
    count += 3;
    scoreCount.innerText = count;
}

function reset() {
    count = 0;
    scoreCount.innerText = count;
}




function addSecOne() {
    secCount += 1;
    scoreSecCount.innerText = secCount;
}

function addSecTwo() {
    secCount += 2;
    scoreSecCount.innerText = secCount;
}

function addSecThree() {
    secCount += 3;
    scoreSecCount.innerText = secCount;
}

function secReset() {
    secCount = 0;
    scoreSecCount.innerText = secCount;
}

