let sTime, mTime, hTime, dTime;
let myTime, countTime = 0;
let tStart, tStop, is_stop = "", totalSecond = "";

let timeStart, timeStop;
document.getElementById('btnPay').addEventListener('click', myButton);
var localTime = setInterval(() => {
  var timer = new Date();
  var Hours = timer.getHours() < 10 ? '0' + timer.getHours() : timer.getHours();
  var Minutes = timer.getMinutes() < 10 ? '0' + timer.getMinutes() : timer.getMinutes();
  var Seconds = timer.getSeconds() < 10 ? '0' + timer.getSeconds() : timer.getSeconds();
  if (countTime == 1 && myTime.getHours() == timer.getHours() && myTime.getMinutes() == timer.getMinutes() && myTime.getSeconds() == timer.getSeconds()) {
    countTime = 0;
    clickStop();
  }
}, 1000);

function myButton() {
  var getBtnValue = document.getElementById('btnPay').value;
  if (getBtnValue == 'Start') {
    clickStart();
    document.getElementById('btnPay').value = "Stop";
    document.getElementById('btnPay').innerHTML = `<i class="fas fa-stop"> Stop</i>`;
  }
  else if (getBtnValue == 'Stop') {
    clickStop();

  }
  else if (getBtnValue = 'Reset') {
    Reset();
  }
}
function clickStart() {

  tStart = new Date();
  sTime = tStart.getSeconds();
  mTime = tStart.getMinutes();
  hTime = tStart.getHours();
  var myStartS = sTime < 10 ? '0' + sTime : sTime;
  var myStartM = mTime < 10 ? '0' + mTime : mTime;
  var myStartH = hTime < 10 ? '0' + hTime : hTime;
 
  document.getElementById('startT').innerHTML = ` <i class="far fa-clock"> Start at ${myStartH + ":" + myStartM}</i> `;
}
function clickStop() {

  if (!is_stop) {
    is_stop = true;
    tStop = new Date()
    let duration = (tStop.getTime() - tStart.getTime()) /(1000*60); //duration in minute

    // var bHoursInMinutes = (Math.floor(bHours) * 60 )+ ((bHours - Math.floor(bHours)) * 100); 

    sTime = tStop.getSeconds();
    mTime = tStop.getMinutes();
    hTime = tStop.getHours();
    var myStopS = sTime < 10 ? '0' + sTime : sTime;
    var myStopM = mTime < 10 ? '0' + mTime : mTime;
    var myStopH = hTime < 10 ? '0' + hTime : hTime;

    document.getElementById('stopT').innerHTML = `<i class="far fa-clock"> Stop at ${myStopH + ":" + myStopM}</i>`;
    document.getElementById('minT').innerHTML = `<i class="far fa-bell"> Minutes ${duration}</i>`;
    document.getElementById('payT').innerHTML = `<i class="fas fa-money-check-alt"> ${(Payment(duration)) + '\u17DB'}</i>`;
    document.getElementById('btnPay').value = "Reset";
    document.getElementById('btnPay').innerHTML=`<i class="fas fa-trash"> Reset</i>`;
    // Math.ceil(duration);
    // console.log(Math.ceil(duration));
  }

}
function Reset() {
    is_stop=false;
    document.getElementById('startT').innerHTML = `<i class="far fa-clock"> Start at 00:00</i>`;
    document.getElementById('stopT').innerHTML = `<i class="far fa-clock"> Stop at 00:00</i>`;
    document.getElementById('minT').innerHTML = `<i class="far fa-bell"> Minutes</i>`;
    document.getElementById('payT').innerHTML = `<i class="fas fa-money-check-alt"> Riel</i>`;
    document.getElementById('btnPay').value = "Start";
    document.getElementById('btnPay').innerHTML = `<i class="fas fa-play"> Start</i>`;

}

function Payment(duration) {
  if (duration < 1) {
    return 0;
  } else if (duration <= 5) {
    return 500;
  }
  else if (duration <= 30) {
    return 1500;
  }
  else if (duration <= 60) {
    return 2000;
  }
  else {
    alert('No money');
  }
}
const formatter = new Intl.NumberFormat('km-KH', {
  style: 'currency',
  currency: 'KHR',
  minimumFractionDigits: 0
});

