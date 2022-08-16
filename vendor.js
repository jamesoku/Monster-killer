export let monbar = document.getElementById("Mon-bar")
export let W_attack = document.getElementById("attack") 
export let S_attack = document.getElementById("S-attack") 
export const original_width = 40
let next = original_width

export function attack1(){
    let theRandomNumber = (((Math.floor(Math.random() * (15 - 5 + 1)) + 5)/100) * original_width);
    return theRandomNumber

}
// attack 2 will be used by both player(Strong attack) and monster.
export function attack2(){
    let theRandomNumber = (((Math.floor(Math.random() * (25 - 5 + 1)) + 5)/100) * original_width);
    return theRandomNumber

}

export function P_Attack(random){
    next = next - random
    console.log(next)
    if(next <= 0){
        monbar.style.width  = "0vw"
    }

    monbar.style.width  = next+"vw"
}