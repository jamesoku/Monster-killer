import { attack1 } from './vendor.js';
import { original_width } from './vendor.js';
import { monbar } from './vendor.js';

var next = original_width

attack.addEventListener('click', function(){
    
    let random = attack1()

    next = next - random
    console.log(next)
    if(next <= 0){
        monbar.style.width  = "0vw"
    }

    monbar.style.width  = next+"vw"
    


})