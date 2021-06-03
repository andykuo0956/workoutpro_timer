var btn1 = window.document.getElementById("button_start")
var btn2 = window.document.getElementById("button_stop")
//two ways to define?
var clock = document.querySelector("#clock")
var clock_round = document.querySelector("#clock_round")
/*
btn1.onclick = function(){
  countDownPause()
}

//下面抄別人ㄉ

function countDownPause() {
	counter.replaceData(0,counter.nodeValue.length,pauseLength);
	pauseLength--;
}

function setRoundCounter() {
	roundCounter.replaceData(0,roundCounter.nodeValue.length,roundNumberCurrent+"/"+roundNumber);
	roundNumberCurrent++;
}

counter = clock.childNodes[0];
*/
/* test
function display(){
  if(btn1.style.display=="none"){
    btn1.style.display="block"
  }else{
    btn1.style.display="none"
  }
}
*/
function closeWindow(){
  window.close();
}