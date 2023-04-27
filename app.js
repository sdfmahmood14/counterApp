const decBtn = document.getElementById('dec-btn');
const resetBtn = document.getElementById("reset-btn");
const incBtn = document.getElementById("inc-btn");
const counterDisp = document.querySelector('p');
let counter = 0;

console.log(counterDisp);
const colorChange = () => {
  if(counter == 0){
    counterDisp.style.color = 'black';
  }
  else if (counter > 0){
    counterDisp.style.color = "green";
    //console.log(counterDisp.style.color);
  }
  else {
    counterDisp.style.color = "red";
  }
}

decBtn.addEventListener('click',() => {
    counter-=1;
    counterDisp.innerHTML = counter;
    console.log(counterDisp.innerHtml);
    colorChange();
})
resetBtn.addEventListener('click',() => {
    counter = 0;
    counterDisp.innerHTML = counter;
    colorChange();
})
incBtn.addEventListener('click',() => {
    counter = counter + 1;
    counterDisp.innerHTML = counter;
    colorChange();
})