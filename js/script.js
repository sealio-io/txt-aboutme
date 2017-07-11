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

 function initMap() {
        var uluru = {lat: 34.0209727, lng: -118.28557219999999};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }