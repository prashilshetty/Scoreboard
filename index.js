let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function addOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function addTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function addOneG() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function addTwoG() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function addThreeG() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}