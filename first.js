window.onload=function(){
    var seconds=0;
    var tens=0;
    var appendTens=document.getElementById("tens");
    var appendSeconds=document.getElementById("seconds");
    var buttonstart=document.getElementById("button-start")
    var buttonstop=document.getElementById("button-stop");
    var buttonreset=document.getElementById("button-reset")
    var interval;
    buttonstart.onclick=function(){
        clearInterval(interval);
        interval=setInterval(startTimer,10)
    };
    buttonstop.onclick=function(){
        clearInterval(interval);
    }
    buttonreset.onclick=function(){
        clearInterval(interval);
        tens="00"
        seconds="00"
        appendTens.innerHTML=tens;
        appendSeconds.innerHTML=seconds
    }
    function startTimer(){
        tens++;
        if(tens<=9){
            appendTens.innerHTML="0"+tens;
            
        }
        if(tens>9){
            appendTens.innerHTML=tens;
        }
        if(tens>99){
            console.log("seconds")
            seconds++;
            appendSeconds.innerHTML="0"+seconds;
            tens=0;
            appendTens.innerHTML="0"+0;

        }
        if(seconds>9){
            appendSeconds.innerHTML=seconds;
        }
    }
}