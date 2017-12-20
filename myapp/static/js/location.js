window.google = window.google || {};
google.maps = google.maps || {};
(function() {
  
  function getScript(src) {
    document.write('<' + 'script src="' + src + '"><' + '/script>');
  }
  
  var modules = google.maps.modules = {};
  google.maps.__gjsload__ = function(name, text) {
    modules[name] = text;
  };
  
  google.maps.Load = function(apiLoad) {
    delete google.maps.Load;
    apiLoad([0.009999999776482582,[[["https://mts0.googleapis.com/vt?lyrs=m@305000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.googleapis.com/vt?lyrs=m@305000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"m@305000000",["https://mts0.google.com/vt?lyrs=m@305000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.google.com/vt?lyrs=m@305000000\u0026src=api\u0026hl=en-US\u0026"]],[["https://khms0.googleapis.com/kh?v=174\u0026hl=en-US\u0026","https://khms1.googleapis.com/kh?v=174\u0026hl=en-US\u0026"],null,null,null,1,"174",["https://khms0.google.com/kh?v=174\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=174\u0026hl=en-US\u0026"]],[["https://mts0.googleapis.com/vt?lyrs=h@305000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.googleapis.com/vt?lyrs=h@305000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"h@305000000",["https://mts0.google.com/vt?lyrs=h@305000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.google.com/vt?lyrs=h@305000000\u0026src=api\u0026hl=en-US\u0026"]],[["https://mts0.googleapis.com/vt?lyrs=t@132,r@305000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.googleapis.com/vt?lyrs=t@132,r@305000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"t@132,r@305000000",["https://mts0.google.com/vt?lyrs=t@132,r@305000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.google.com/vt?lyrs=t@132,r@305000000\u0026src=api\u0026hl=en-US\u0026"]],null,null,[["https://cbks0.googleapis.com/cbk?","https://cbks1.googleapis.com/cbk?"]],[["https://khms0.googleapis.com/kh?v=85\u0026hl=en-US\u0026","https://khms1.googleapis.com/kh?v=85\u0026hl=en-US\u0026"],null,null,null,null,"85",["https://khms0.google.com/kh?v=85\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=85\u0026hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=en-US\u0026","https://mts1.googleapis.com/mapslt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/ft?hl=en-US\u0026"]],[["https://mts0.googleapis.com/vt?hl=en-US\u0026","https://mts1.googleapis.com/vt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/loom?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/loom?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=en-US\u0026","https://mts1.googleapis.com/mapslt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/ft?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/loom?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/loom?hl=en-US\u0026"]]],["en-US","US",null,0,null,null,"https://maps.gstatic.com/mapfiles/","https://csi.gstatic.com","https://maps.googleapis.com","https://maps.googleapis.com",null,"https://maps.google.com","https://gg.google.com","https://maps.gstatic.com/maps-api-v3/api/images/","https://www.google.com/maps",0],["https://maps.gstatic.com/maps-api-v3/api/js/21/2","3.21.2"],[195682705],1,null,null,null,null,null,"",null,null,1,"https://khms.googleapis.com/mz?v=174\u0026",null,"https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"https://mts.googleapis.com/vt/icon",[["https://mts0.googleapis.com/vt","https://mts1.googleapis.com/vt"],["https://mts0.googleapis.com/vt","https://mts1.googleapis.com/vt"],null,null,null,null,null,null,null,null,null,null,["https://mts0.google.com/vt","https://mts1.google.com/vt"],"/maps/vt",305000000,132],2,500,[null,"https://g0.gstatic.com/landmark/tour","https://g0.gstatic.com/landmark/config",null,"https://www.google.com/maps/preview/log204","","https://static.panoramio.com.storage.googleapis.com/photos/",["https://geo0.ggpht.com/cbk","https://geo1.ggpht.com/cbk","https://geo2.ggpht.com/cbk","https://geo3.ggpht.com/cbk"]],["https://www.google.com/maps/api/js/master?pb=!1m2!1u21!2s2!2sen-US!3sUS!4s21/2","https://www.google.com/maps/api/js/widget?pb=!1m2!1u21!2s2!2sen-US"],null,1,0,"/maps/api/js/ApplicationService.GetEntityDetails",0], loadScriptTime);
  };
  var loadScriptTime = (new Date).getTime();
  getScript("https://maps.gstatic.com/maps-api-v3/api/js/21/2/main.js");
})();

// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see a blank space instead of the map, this
// is probably because you have denied permission for location sharing.

var map;

function initialize() {
  var mapOptions = {
    zoom: 6
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Location found using HTML5.'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);
