let currThing;
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
    thing.src = "./thing.jpeg";
    
    let num = getRandomTile();
    currThing = document.getElementById(num);
    currThing.appendChild(thing);
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
}

function showMenu() {
    document.getElementById("shadow").classList.add("off_target");
    document.getElementById("game").classList.remove("off_target");
}