// Get Time
let ScounterS, ScounterM, ScounterH, ScounterD, ScounterMonth;
let myTime, countDown = 0;
let tStart;

//Changing Button Name
document.getElementById('payment').addEventListener('click',myChanging);

var localTime = setInterval(()=>{
  var timer = new Date();
  const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  let formatted_date = months[timer.getMonth()] +' '+ timer.getDate() + ', ' + timer.getFullYear();
  var Hours = timer.getHours()<10?'0'+timer.getHours():timer.getHours();
  var Minutes = timer.getMinutes()<10?'0'+timer.getMinutes():timer.getMinutes();
  var Seconds = timer.getSeconds()<10?'0'+timer.getSeconds():timer.getSeconds();
  let formatted_time = Hours + ' : ' + Minutes + ' : ' + Seconds;
  document.getElementById('clock').innerHTML= `<i>${formatted_date} <br> ${formatted_time}</i>`;
  if(countDown == 1 && myTime.getHours() == timer.getHours() && myTime.getMinutes() == timer.getMinutes() && myTime.getSeconds() == timer.getSeconds()){
    countDown = 0;
    clickStop();
    alert("On Time");
  }
});

function myChanging(){
  var getBtnValue = document.getElementById('payment').value;
  if(getBtnValue == 'Start'){
    clickStart();
    document.getElementById('payment').value = "Stop";
    document.getElementById('payment').innerHTML=`<i class="fas fa-stop"> Stop</i>`;
    try{
      if(document.getElementById('pickup-H').value == '') document.getElementById('pickup-H').value = 0;
      if(document.getElementById('pickup-M').value == '') document.getElementById('pickup-M').value = 0;
      
      myTime = new Date();      
      var pickupH = document.getElementById('pickup-H').value;
      var pickupM = document.getElementById('pickup-M').value;
      var curH = myTime.getHours();
      var curM = myTime.getMinutes();

      myTime.setHours(parseInt(pickupH) + curH);

      if(pickupM != 0) 
        myTime.setMinutes(parseInt(pickupM)+curM);

      countDown = 1;
    }catch(Error){}
  }
  else if(getBtnValue == 'Stop'){
    clickStop();
  }
  else if(getBtnValue = 'Reset'){
    clickReset();
  }
}

function clickStart(){
  tStart = new Date();
  // tStart.setDate(7); //ប្តូរថ្ងៃទី
  // tStart.setHours(15,30,00); // ប្តូរ ម៉ោង​ នាទី វិនាទី
  ScounterS = tStart.getSeconds();
  ScounterM = tStart.getMinutes();
  ScounterH = tStart.getHours();
  ScounterD = tStart.getDate();
  ScounterMonth = tStart.getMonth();
  console.log(ScounterMonth);
  var myStrS = ScounterS<10?'0'+ScounterS:ScounterS;
  var myStrM = ScounterM<10?'0'+ScounterM:ScounterM;
  var myStrH = ScounterH<10?'0'+ScounterH + ':' + myStrM :ScounterH + ':' + myStrM ;
  document.getElementById('start').innerHTML = ` <i class="far fa-clock"> Start at ${myStrH}</i> `;
}

function clickStop(tStop = new Date()){
  console.log(tStart);
  console.log(tStop);
  if(countDown == 1) tStop = new Date();

  var EcounterD, EcounterH, EcounterM, EcounterS;
  EcounterS = tStop.getSeconds();
  EcounterM = tStop.getMinutes();
  EcounterH = tStop.getHours();
  EcounterD = tStop.getDate();

  var totalD, totalH, totalM, totalS;
  totalD = EcounterD-ScounterD;
  totalH = EcounterH-ScounterH;
  totalM = EcounterM-ScounterM;
  totalS = EcounterS-ScounterS;
  
  var myStrS = EcounterS<10?'0'+EcounterS:EcounterS;
  var myStrM = EcounterM<10?'0'+EcounterM:EcounterM;
  var myStrH = EcounterH<10?'0'+EcounterH + ':' + myStrM :EcounterH + ':' + myStrM ;

  var myCounter = (EcounterD-ScounterD)*24*60*60 + (EcounterH-ScounterH)*60*60 + (EcounterM-ScounterM)*60 + (EcounterS-ScounterS);

  if(totalS<0){totalM = totalM - 1; totalS = 60 + totalS;}
  if(totalM<0){totalH = totalH - 1; totalM = 60 + totalM;}
  if(totalH<0){totalD = totalD - 1; totalH = 24 + totalH;}

  var myToM = totalM<10? '0' + totalM + ' M ' : totalM + ' M ';
  var myToH = totalH<10? '0' + totalH + ' H ' + myToM : totalH +' H ' + myToM ;
  var myToD = totalD>0 ? totalD<10?'0'+totalD+' D '+myToH:totalD+ ' D '+totalD : myToH;

  document.getElementById('stop').innerHTML = `<i class="far fa-clock"> Stop at ${myStrH}</i>`;
  document.getElementById('time').innerHTML = `<i class="far fa-bell"> Using Time ${myToD}</i>`;
  document.getElementById('money').innerHTML =`<i class="fas fa-money-check-alt"> ${formatter.format(Money(myCounter))+'\u17DB'}</i>`;

  document.getElementById('payment').value = "Reset";
  document.getElementById('payment').innerHTML=`<i class="fas fa-trash"> Reset</i>`;
}

function clickReset(){
 
  document.getElementById('start').innerHTML = `<i class="far fa-clock"> Start at 00:00</i>`;
  document.getElementById('stop').innerHTML = `<i class="far fa-clock"> Stop at 00:00</i>`;
  document.getElementById('time').innerHTML = `<i class="far fa-bell"> Using Time</i>`;
  document.getElementById('money').innerHTML =`<i class="fas fa-money-check-alt"> Payment</i>`;
  document.getElementById('payment').value = "Start";
  document.getElementById('payment').innerHTML=`<i class="fas fa-play"> Start</i>`;
  $('a[data-toggle="pill"]').on('shown.bs.tab');
}

function Money(usedSecond){
  if(usedSecond < 0) return 0;
  else if(usedSecond < 15*60+1) return 500;
  else if(usedSecond < 30*60+1) return 1000;
  else if (usedSecond < 60*60+1) return 1500;
  else if(usedSecond > 60*60) return 1500 + Money(usedSecond - 60*60);
}

const formatter = new Intl.NumberFormat('km-KH', {
  style: 'currency',
  currency: 'KHR',
  minimumFractionDigits: 0
});

// $('a[data-toggle="pill"]').on('shown.bs.tab',function (e) {
//   var target = $(e.target).attr("id"); // activated tab
//   if(target == "pills-profile-tab"){
//     document.getElementById('stop').innerHTML=
//     `<i class="far fa-clock"> Stop at 00:00 
//       <input type="number" min="0" max="23" placeholder="23" id="pickup-H">:
//       <input type="number" min="0" max="59" placeholder="00" id="pickup-M">
//     </i>
//     `;
//   }
 
//   else if(target == "pills-home-tab"){
//     document.getElementById('stop').innerHTML=
//     `
//     <i class="far fa-clock"> Stop at 00:00</i>
//     `;
//   }
// });

// // Animations init
// new WOW().init();