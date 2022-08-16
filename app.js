import { attack1 } from './vendor.js';
import { attack2 } from './vendor.js';
import { W_attack } from './vendor.js';
import { S_attack } from './vendor.js';
import { P_Attack } from './vendor.js';

W_attack.addEventListener('click', function(){
    let random = attack1()
    P_Attack(random)
})


S_attack.addEventListener('click', function(){
    
    let random = attack2()
    P_Attack(random)
})