// 1. Grab the save-el paragrah and store it in a variable called saveEl

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    count -= 1
    countEl.textContent = count
}

let saveEl = document.getElementById("save-el")

function save() {
    
    savedLogs = count + " - "

    saveEl.textContent += savedLogs

    countEl.textContent = 0;
    
    count = 0

    
}




