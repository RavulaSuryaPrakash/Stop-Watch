var seconds =00;
var tens =00;
var hours=00;




var Tens = document.getElementById("tens");
var Seconds = document.getElementById("seconds");
var Hours = document.getElementById("hours")
var start = document.getElementById("start");
var stops = document.getElementById("stop");
var reset = document.getElementById("reset");
var interval;


function startTimer(){
    tens++;

    if(tens<9){
        Tens.innerHTML= "0" + tens;
    };
    if(tens>9){
        Tens.innerHTML = tens;

    };
    if(tens>99){
        seconds++;
        Seconds.innerHTML="0"+ seconds;
        tens=0;
        Tens.innerHTML ="0"+0;

    };
    if(seconds>9){
        Seconds.innerHTML = seconds;
    };
    if(seconds>59){
        hours++;
        Hours.innerHTML="0"+ hours;
        seconds=0;
        Seconds.innerHTML="0"+0;

        
    };
    if(hours>9){
        Hours.innerHTML= hours;
    };


};
startTimer.currenttimer=0;

start.onclick = function(){
    interval = setInterval(startTimer, 10);
};
stops.onclick= function(){
    clearInterval(interval);
};
reset.onclick = function(){
    clearInterval( interval);
    tens="00";
    seconds="00";
    hours="00";
    Tens.innerHTML=tens;
    Seconds.innerHTML=seconds;
    Hours.innerHTML= hours;
}




