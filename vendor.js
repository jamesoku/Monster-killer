export let monbar = document.getElementById("Mon-bar")
export let P_bar = document.getElementById("P_bar")
export let W_attack = document.getElementById("attack") 
export let S_attack = document.getElementById("S-attack") 
export let Heal = document.getElementById("Heal")
export const original_width = 40
let next_p = original_width
let next_M = original_width
export const MandP_attack = { max: 23, Min: 7}
export const strongPA = {max: 20, Min: 10}
export const PHeal = {max: 27,Min: 10}

export function attack(max,min){
    let theRandomNumber = (((Math.floor(Math.random() * (max - min + 1)) + min)/100) * original_width);
    return theRandomNumber
}
export function checkwinner(next_p,next_M){
    console.log("-M",next_M)
    console.log("-P",next_p)
    if (next_p <= 0 && next_M > 0){
        alert("Player won")
    } 
    else if (next_M <= 0 && next_p > 0){
        alert("Monster won")
    }
    else if(next_M <= 0 && next_p <= 0) {
        alert("Draw")

    }


}

export function M_Attack(){
    let random = attack(MandP_attack.max,MandP_attack.Min)
    next_M = next_M - random
    // console.log("-M",next_M)
    if(next_M <= 0){
        next_M = 0
        P_bar.style.width  = "0vw"
    }

    P_bar.style.width  = next_M+"vw"
    return next_M
}

export function P_Attack(random){
    next_p = next_p - random
    // console.log("-P",next_p)
    if(next_p <= 0){
        next_p = 0
        monbar.style.width  = "0vw"
    }

    monbar.style.width  = next_p+"vw"
    return next_p
}

export function P_Heal(random){
    next_M = next_M + random
    // console.log("-P",next_M)
    if (next_M >= 40){
        next_M = 40
    }
    if(next_M <= 0){
        P_bar.style.width  = "0vw"
    }
    P_bar.style.width  = next_M+"vw"
    return next_M
}