//local time
const clock = document.getElementById('time');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

//stop watch 

let hr=0;
let min=0;
let sec=0;
let count=0;
let timer=false;

function Start(){
timer =true;
stopwatch();
}

function Stop(){
timer =false;
}

function Reset(){
timer=false;
hr=0;
min=0;
sec=0;
count=0;
document.getElementById("hr").innerHTML="00";
document.getElementById("min").innerHTML="00";
document.getElementById("Sec").innerHTML="00";
document.getElementById("count").innerHTML="00";
}

function stopwatch(){
    if(timer==true){
        count=count+1;
        if(count==100){
            sec= sec+1;
            count= 0;
        }
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hr=hr+1;
            min=0;
            sec=0;
        }
        document.getElementById("hr").innerHTML=hr;
        document.getElementById("min").innerHTML=min;
        document.getElementById("Sec").innerHTML=sec;
        document.getElementById("count").innerHTML=count;

    setTimeout( "stopwatch()",10);
    }
}

//generate a random color for background

const randomColor = function () {
    let hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    //   console.log(hex[Math.floor(Math.random() * 16)]);
    }
    return color;
};
  
  let intervalId;
  
  const startChangingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(function (){
          document.body.style.backgroundColor = randomColor(); 
        }, 1000);
    }
  
};
  
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  document.querySelector('#stop').addEventListener('click', stopChangingColor);