const homeScoresEl = document.getElementById("home-scores");
const guestScoresEl = document.getElementById("guest-scores");
const panelsEl = document.getElementById("panels");
const messageEl = document.getElementById("message");
let scores = {
    "homeScore": 0,
    "guestScore": 0,
}

// To update the score according to which button the user presses.
function updateScore(team, points){
    messageEl.textContent = `The ${team} team scores ${points}`;
    setTimeout(() => {
    messageEl.textContent = "Press any "+" button to continue~"
    }, 3000);
    newScore = scores[`${team}Score`] += points;
    team === 'home' ? homeScoresEl.textContent = newScore : guestScoresEl.textContent = newScore;
};

// To compare the current scores of the home team and the guest team.
function compare() {
    const homeScore = scores["homeScore"];
    const guestScore = scores["guestScore"];
    return  homeScore > guestScore? 1 : homeScore < guestScore? 2 : homeScore !== 0? 3: 4;
};

// To change the color value of a certain variable
function changeColor(variable, color) {
    panelsEl.style.setProperty(variable, color)
}

// To adjust the color of the home or guest heading, which indicates which team takes the lead.
function whoIsLeader() {
    switch(compare()){
        case 1:
        changeColor("--home-color", "yellow"); 
        changeColor("--guest-color", "grey");           
        break;
        case 2: 
        changeColor("--guest-color", "yellow");
        changeColor("--home-color", "grey");         
        break;    
        case 3:
        changeColor("--home-color", "red"); 
        changeColor("--guest-color", "red");         
        break;       
        case 4:
        changeColor("--home-color", "white"); 
        changeColor("--guest-color", "white");         
        break;  
        default:
        break;
    };
};

// To update the score and the heading color of each team.
function update(team, points) {
    updateScore(team, points);
    whoIsLeader();
};


// To refresh the values of all relevant values to start a new game.
function newGame() {
    messageEl.textContent = "They've started a new game!"
    setTimeout(() => {
    messageEl.textContent = "Press any '+' button to start!"
    }, 3000);
    scores["homeScore"] = scores["guestScore"] = 0;
    homeScoresEl.textContent = 0;
    guestScoresEl.textContent = 0;
    whoIsLeader();
};
