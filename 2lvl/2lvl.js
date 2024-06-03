let currThing;
let currnotGosling;
let score = 0;
let gameOver = false;

document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('music').play();
    document.removeEventListener('click', musicPlay);
}

window.onload = function() {
    setupBoard();
};

function setupBoard() {
    for (let i = 0; i< 16; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(SetThing, 1000); 
    setInterval(SetnotGosling, 1000);
}

function getRandomTile() {
    let num = Math.floor(Math.random()*16);
    return num.toString();
}

function SetThing(){
    if (gameOver) {
        return;
    }
    if (currThing) {
        currThing.innerHTML = "";
    }

    let thing = document.createElement("img");
    thing.src = "../1lvl/thing.jpeg";
    
    let num = getRandomTile();
    if (currnotGosling && currThing.id == num) {
        return;
    }
    currThing = document.getElementById(num);
    currThing.appendChild(thing);
}

function SetnotGosling(){
    if (gameOver) {
        return;
    }
    if (currnotGosling) {
        currnotGosling.innerHTML = "";
    }

    let not_Gosling = document.createElement("img");
    not_Gosling.src = "./not_gosling.jpg";
    
    let num = getRandomTile();
    if (currnotGosling && currThing.id == num) {
        return;
    }

    currnotGosling = document.getElementById(num);
    currnotGosling.appendChild(not_Gosling);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currThing) {
        score += 1;
        document.getElementById("score").innerText = "Вы поймали Гослингов: " + score.toString(); //update score html
    }
    if (score == 10){
        document.getElementById("score").innerText = score.toString() + "! Оп, столько хватит!";
        gameOver = true;
        document.getElementById("shadow_end_lvl").classList.remove("off_target");
        document.getElementById("game").classList.add("off_target");
    }
    if (this == currnotGosling) {
        document.getElementById("score").innerText = "Не тот Райан!";
        gameOver = true;
        document.getElementById("shadow_failed_lvl").classList.remove("off_target");
        document.getElementById("game").classList.add("off_target");
    }
}

function showMenu() {
    document.getElementById("shadow").classList.add("off_target");
    document.getElementById("game").classList.remove("off_target");
}