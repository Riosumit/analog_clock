setInterval(a_clock, 1000);
function a_clock(){
    let time = new Date();
    hour = time.getHours();
    minute = time.getMinutes();
    second = time.getSeconds();
    sechand_rotate = second*6;
    minhand_rotate = minute*6;
    hourhand_rotate = (hour*30)+(minute/2);
    document.getElementsByClassName('hand')[0].style.transform= "rotate(" + ((hour*30)+(minute/2)) + "deg)";
    document.getElementsByClassName('hand')[1].style.transform= "rotate(" + minute*6 + "deg)";
    document.getElementsByClassName('hand')[2].style.transform= "rotate(" + second*6 + "deg)";
    if(hour<10){
        hour="0"+hour;
    }
    if(minute<10){
        minute="0"+minute;
    }
    if(second<10){
        second="0"+second;
    }
    let time1 = hour + ':' + minute + ':' + second;
    document.getElementById("time").innerHTML = time1;
}
