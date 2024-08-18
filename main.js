let Choose = document.querySelector(".game")
let Result = document.querySelector("#result")
let myWins = document.querySelector(".me")
let cmpWins = document.querySelector(".cmp")
let cmpMove = document.querySelector("#cmpMove")


let computer = ["Rock", "Paper", "Siccors"]

let CmpChoose = ""
let myChoose = ""
let myWinsCount = 0
let cmpWinsCount = 0



Choose.addEventListener("click", (e) => {
    myChoose = e.target.className
    const random = Math.floor(Math.random() * computer.length);
    CmpChoose = computer[random]

    
    cmpMove.innerText = `Computer choose : ${CmpChoose}`

    result(myChoose, CmpChoose)

})

function result(me, cmp) {

    if (me == cmp) {
        Result.innerText = "YOU BOTH CHOOSE SAME"
    }
    if (me == "Rock" && cmp == "Paper" || me == "Siccors" && cmp == "Rock" || me == "Paper" && cmp == "Siccors") {
        Result.innerText = "YOU LOSE THIS TIME"
        cmpWinsCount++
        cmpWins.children[0].innerText = cmpWinsCount
    }
    if (me == "Rock" && cmp == "Siccors" || me == "Paper" && cmp == "Rock" || me == "Siccors" && cmp == "Paper") {
        Result.innerText = "YOU WIN THIS TIME"
        myWinsCount++
        myWins.children[0].innerText = myWinsCount
    }

}


