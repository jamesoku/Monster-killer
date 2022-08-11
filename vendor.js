export var monbar = document.getElementById("Mon-bar")
export var attack = document.getElementById("attack") 
export const original_width = 40


export function attack1(){
    let theRandomNumber = (((Math.floor(Math.random() * (15 - 5 + 1)) + 5)/100) * original_width);
    return theRandomNumber

}
// attack 2 will be used by both player(Strong attack) and monster.
function attack2(){
    let theRandomNumber = (((Math.floor(Math.random() * (25 - 5 + 1)) + 5)/100) * original_width);
    return theRandomNumber

}