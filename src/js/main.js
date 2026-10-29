let homeTeamScore = 0
let guestTeamScore = 0
homeTeamEl = document.getElementById("home-el")
guestTeamEl = document.getElementById("guest-el")
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

function add1Guest() {
    guestTeamScore += 1
    guestTeamEl.textContent = guestTeamScore
    leading()
}


function add2Guest() {
    guestTeamScore += 2
    guestTeamEl.textContent = guestTeamScore
    leading()
}


function add3Guest() {
    guestTeamScore += 3
    guestTeamEl.textContent = guestTeamScore
    leading()
}

function reset(){
    homeTeamScore = 0
    guestTeamScore = 0
    homeTeamEl.textContent = homeTeamScore
    guestTeamEl.textContent = guestTeamScore
    leading()
}

function leading(){
    if (homeTeamScore==guestTeamScore){
        leadingEl.textContent = "The game is tied!"
    }
    if (homeTeamScore>guestTeamScore){
        leadingEl.textContent = "Home team in the lead!"
    }
    if(homeTeamScore<guestTeamScore){
        leadingEl.textContent = "Guest team in the lead!"
    }
}