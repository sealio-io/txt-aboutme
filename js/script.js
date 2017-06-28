$( document ).ready(function() {

  var lightSwitch = document.getElementById('lightSwitch');
  var lightBulb = document.getElementById('lightBulb');
  var wandImg = document.getElementById('wandImage');
  wandImg.style.display = "none";
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

  $(lightBulb).mouseenter(
    function(){
    wandImg.style.display = "block";
    $('#wandImage').animate({
    width: "50%",
    transform: 'rotate(' + 100 + 'deg)',
  }, 1000 );
    lightBulb = document.getElementById('lightBulb');
    lightBulb.src="../images/lightOn.png";
   }
  )
  $(lightBulb).mouseleave(
    function(){
    $('#wandImage').animate({
    width: "100px",
    opacity: 1,
  }, 1000 );
    lightBulb = document.getElementById('lightBulb');
    lightBulb.src="../images/lightOff.png";
    }

    )

});