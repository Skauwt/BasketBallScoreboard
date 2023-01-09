let GuestScore = document.getElementById("contGuest")
let HomeScore = document.getElementById("contHome")
let PointGuest = 0
function PointForGuest(){
    PointGuest++
    GuestScore.innerText = PointGuest
}
let PointHome = 0 
function PointForHome(){
    PointHome++
    HomeScore.innerText = PointHome
}
function DobleForGuest(){
    PointGuest = PointGuest+2
    GuestScore.innerText = PointGuest   
}
function DobleForHome(){
    PointHome = PointHome+2
    HomeScore.innerText = PointHome
}
function TripleForGuest(){
    PointGuest = PointGuest +3
    GuestScore.innerText = PointGuest
}
function TripleForHome(){
    PointHome = PointHome+3
    HomeScore.innerText = PointHome
}
function ResetGame(){
    PointGuest = 0 
    PointHome = 0
    HomeScore.innerText = 0 
    GuestScore.innerText= 0
}