let homeTeamScore = 0
let awayTeamScore = 0
homeTeamEl = document.getElementById("home-el")
awayTeamEl = document.getElementById("away-el")
leadingEl= document.getElementById("leading-el")

function add1Home() {
    homeTeamScore += 1
    homeTeamEl.textContent = homeTeamScore
    leading()
}


function add2Home() {
    homeTeamScore += 2
    homeTeamEl.textContent = homeTeamScore
    leading()
}


function add3Home() {
    homeTeamScore += 3
    homeTeamEl.textContent = homeTeamScore
    leading()
}

function add1Away() {
    awayTeamScore += 1
    awayTeamEl.textContent = awayTeamScore
    leading()
}


function add2Away() {
    awayTeamScore += 2
    awayTeamEl.textContent = awayTeamScore
    leading()
}


function add3Away() {
    awayTeamScore += 3
    awayTeamEl.textContent = awayTeamScore
    leading()
}

function reset(){
    homeTeamScore = 0
    awayTeamScore = 0
    homeTeamEl.textContent = homeTeamScore
    awayTeamEl.textContent = awayTeamScore
    leading()
}

function leading(){
    if (homeTeamScore==awayTeamScore){
        leadingEl.textContent = "The game is tied!"
    }
    if (homeTeamScore>awayTeamScore){
        leadingEl.textContent = "Home team in the lead!"
    }
    if(homeTeamScore<awayTeamScore){
        leadingEl.textContent = "Away team in the lead!"
    }
}