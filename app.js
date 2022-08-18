import { MandP_attack,strongPA,PHeal } from './vendor.js';
import { W_attack,S_attack } from './vendor.js';
import { P_Attack, M_Attack, Heal } from './vendor.js';
import { attack,P_Heal, checkwinner } from './vendor.js';

Heal.addEventListener('click', function(){
    let random = attack(PHeal.max,PHeal.Min)
    let M = P_Heal(random)
    let p = M_Attack(random)
    checkwinner(M,p)
})

W_attack.addEventListener('click', function(){
    let random = attack(MandP_attack.max,MandP_attack.Min)
   let M = P_Attack(random)
   let p = M_Attack()
   checkwinner(M,p)
})


S_attack.addEventListener('click', function(){
    
    let random = attack(strongPA.max,strongPA.Min)
    let M = P_Attack(random)
   let p = M_Attack()
   checkwinner(M,p)
})