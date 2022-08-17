import { MandP_attack,strongPA,PHeal } from './vendor.js';
import { W_attack,S_attack } from './vendor.js';
import { P_Attack, M_Attack, Heal } from './vendor.js';
import { attack,P_Heal } from './vendor.js';

Heal.addEventListener('click', function(){
    let random = attack(PHeal.max,PHeal.Min)
    P_Heal(random)
    M_Attack()
})

W_attack.addEventListener('click', function(){
    let random = attack(MandP_attack.max,MandP_attack.Min)
    P_Attack(random)
    M_Attack()
})


S_attack.addEventListener('click', function(){
    
    let random = attack(strongPA.max,strongPA.Min)
    P_Attack(random)
    M_Attack()
})