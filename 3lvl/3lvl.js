let currThing;
let currnotGosling;
let currfakeGosling;
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
    for (let i = 0; i< 25; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(SetThing, 1000); 
    setInterval(SetnotGosling, 1000);
    setInterval(SetfakeGosling, 1000);
}

function getRandomTile() {
    let num = Math.floor(Math.random()*25);
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
    thing.src = "./gosling_fr.jpg";
    
    let num = getRandomTile();
    if (currnotGosling && currfakeGosling && currThing.id  == num) {
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
    not_Gosling.src = "../2lvl/not_gosling.jpg";
    
    let num = getRandomTile();
    if (currnotGosling && currfakeGosling && currThing.id  == num) {
        return;
    }

    currnotGosling = document.getElementById(num);
    currnotGosling.appendChild(not_Gosling);
}

function SetfakeGosling(){
    if (gameOver) {
        return;
    }
    if (currfakeGosling) {
        currfakeGosling.innerHTML = "";
    }

    let fake_Gosling = document.createElement("img");
    fake_Gosling.src = "../3lvl/fake_gosling.jpg";
    
    let num = getRandomTile();
    if (currnotGosling && currfakeGosling && currThing.id  == num) {
        return;
    }

    currfakeGosling = document.getElementById(num);
    currfakeGosling.appendChild(fake_Gosling);
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
    if (this == currfakeGosling) {
        document.getElementById("score").innerText = "Вообще не Гослинг!";
        gameOver = true;
        document.getElementById("shadow_failed_lvl_fake_gos").classList.remove("off_target");
        document.getElementById("game").classList.add("off_target");
    }
}

function showMenu() {
    document.getElementById("shadow").classList.add("off_target");
    document.getElementById("game").classList.remove("off_target");
}