// 
"use strict"

let result = document.querySelector('.result');
let randomForm = document.querySelector('#myForm');

randomForm.onsubmit = ()=> {
  
    let countNumber = 0;
    let setTime = setInterval(function(){
        countNumber++;
        if (countNumber > 100){
            clearTimeout(setTime);
        }
      let mathRandom =  Math.floor(Math.random() * (countNumber - 50) ) + 50;
      result.innerHTML = mathRandom + '%';
     
    },30);
    return false;
}