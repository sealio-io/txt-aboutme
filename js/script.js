var lightSwitch = document.getElementById('lightSwitch');
var lightBulb = document.getElementById('lightBulb');
var clicks = 0;

lightSwitch.onclick = function(){
  clicks++;
  var clicksQuery = clicks%2;
  console.log(clicksQuery);

  if (clicksQuery == 0){
    lightSwitch.src="../images/onSwitch.png";
    lightBulb.src="../images/lightOn.png"
  }

  else{
    lightSwitch.src="../images/offSwitch.png";
    lightBulb.src="../images/lightOff.png"
  }
}
