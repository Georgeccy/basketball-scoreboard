let homeScoresEl = document.getElementById("home-scores");
let guestScoresEl = document.getElementById("guest-scores")
let panelsEl = document.getElementById("panels")

function plus1(count) {
    return count + 1;
}

function plus2(count) {
    return count + 2;
}

function plus3(count) {
    return count + 3;
}

function compare() {
    let homeScore = Number(homeScoresEl.textContent);
    let guestScore = Number(guestScoresEl.textContent);
    return  homeScore > guestScore? 1 : homeScore < guestScore? 2 : homeScore !== 0? 3: 4;
}

function leader() {
    switch(compare()){
        case 1:
        panelsEl.style.setProperty("--home-color", "yellow"); 
        panelsEl.style.setProperty("--guest-color", "grey");                 
        break;
        case 2: 
        panelsEl.style.setProperty("--guest-color", "yellow");
        panelsEl.style.setProperty("--home-color", "grey");         
        break;    
        case 3:
        panelsEl.style.setProperty("--home-color", "grey"); 
        panelsEl.style.setProperty("--guest-color", "grey");         
        break;       
        case 4:
        panelsEl.style.setProperty("--home-color", "white"); 
        panelsEl.style.setProperty("--guest-color", "white");         
        break;  
        default:
        break;
    }
    }

function homePlus1() {
    console.log("The home team scores 1 !")
    let iniNum = Number(homeScoresEl.textContent);
    homeScoresEl.textContent = plus1(iniNum);
    leader();
}
function homePlus2() {
    console.log("The home team scores 2 !")
    let iniNum = Number(homeScoresEl.textContent);
    homeScoresEl.textContent = plus2(iniNum);
    leader();    
}
function homePlus3() {
    console.log("The home team scores 3 !")
    let iniNum = Number(homeScoresEl.textContent);
    homeScoresEl.textContent = plus3(iniNum);
    leader();
    
}

function guestPlus1() {
    console.log("The guest team scores 1 !")
    let iniNum = Number(guestScoresEl.textContent);
    guestScoresEl.textContent = plus1(iniNum);
    leader();
    
}
function guestPlus2() {
    console.log("The guest team scores 2 !")
    let iniNum = Number(guestScoresEl.textContent);
    guestScoresEl.textContent = plus2(iniNum);
    leader();
    
}
function guestPlus3() {
    console.log("The guest team scores 3 !")
    let iniNum = Number(guestScoresEl.textContent);
    guestScoresEl.textContent = plus3(iniNum);
    leader();
    
}

function newGame() {
    console.log("They've started a new game!");
    homeScoresEl.textContent = 0;
    guestScoresEl.textContent = 0;
    leader();
    
}


