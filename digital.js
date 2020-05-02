var currentTime = document.getElementById("currentTime");

function padZero(n){
    return (parseInt(n,10) < 10 ? '0' : '')+n;
}

function updateCurrentTime(){
    var curTime = new Date();
    var hh = curTime.getHours();
    var mm = curTime.getMinutes();
    var ss = curTime.getSeconds();
    var formatAMPM = (hh >=12 ? 'PM' : 'AM');

    hh = hh % 12 || 12;

    currentTime.innerHTML = padZero(hh) + "<span>:</span>" + padZero(mm) + "<span>:</span>" + padZero(ss) + " " +formatAMPM;

    setTimeout(updateCurrentTime, 1000);

}

updateCurrentTime();