// position is between 10px to 300px
let num = 150;
let mvright = () => {

  const pos = document.getElementById('ship');

  if (num <= 300) {
    pos.style.left = (num + 'px');
    num = num + 15;


  } else {
    num = 300;
  }





}

let mvleft = () => {

  const posr = document.getElementById('ship');


  if (num >= 0) {
    num = num - 15;
    posr.style.left = (num + 'px');
  } else {
    num = 0;
  }
 

}

// stone drop from 10px to 300px



let ran1 = 30;

setInterval(() => {
  var ran = (max, min) => {

    return Math.round((Math.random() * (max - min) + min)/15)*15;
  }
  
  
  ran1 = ran(300, 10);
  

  let chaval = document.getElementById('stone');
  chaval.style.left = (`${ran1}px`);
  
  
  
  
  
 
}, 2000);

// time to distory.....
// we have position of plane num
// but not of stone 
// plane value in multiplication of 15

setInterval( () => {
  
    if (num == ran1) {
      alert("game over")
      location.reload();
    }
   
  

  
} , 700);
    
    
 
  

