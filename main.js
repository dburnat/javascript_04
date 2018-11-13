let ball   = document.querySelector('.ball');
let garden = document.querySelector('.garden');
let output = document.querySelector('.output');
let basket = document.querySelector('.basket');
let ballinfo = document.querySelector('.ballinfo');
let basketinfo = document.querySelector('.basketinfo');

function getCssProperty(elmId, property){
    var elem = document.getElementById(elmId);
    return window.getComputedStyle(elem,null).getPropertyValue(property);
 }

let maxX = garden.clientWidth  - ball.clientWidth;
let maxY = garden.clientHeight - ball.clientHeight;

function handleOrientation(event) {
  let x = event.beta;  // In degree in the range [-180,180]
  let y = event.gamma; // In degree in the range [-90,90]
  let c = getCssProperty('ball' , "top");
  let d = getCssProperty('ball' , 'left');
  let e = getCssProperty('basket' , 'top');

  output.innerHTML  = "beta : " + x + "\n";
  output.innerHTML += "gamma: " + y + "\n";
  ballinfo.innerHTML  = "top : " + c + "\n";
  ballinfo.innerHTML += "left: " + d + "\n";

  basketinfo.innerHTML  = "top : " + e + "\n";


  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (x >  90) { x =  90};
  if (x < -90) { x = -90};

  // To make computation easier we shift the range of 
  // x and y to [0,180]
  x += 90;
  y += 90;

  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
  ball.style.top  = (maxX*x/180 - 5 ) + "px";
  ball.style.left = (maxY*y/180 - 5) + "px";

   if(ball.style.top >  160 + 'px') {
     console.log("colision");
   }
}

window.addEventListener('deviceorientation', handleOrientation);
