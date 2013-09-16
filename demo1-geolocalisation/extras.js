var map;
function initialize() {
    var mapOptions = {
      zoom: 4,
      center: new google.maps.LatLng(37.5518527, -53.4895692),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var altitude = position.coords.altitude;
            var maPosition = "Latitude : "+latitude+"<br>";
            maPosition += "Longitude : "+longitude+"<br>";
            maPosition += "Altitude : "+altitude;
            document.getElementById("labels").innerHTML = maPosition;
            
            var mapOptions = {
                zoom: 12,
                center: new google.maps.LatLng(latitude, longitude),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
            var infowindow = new google.maps.InfoWindow({
               map: map,
               position: new google.maps.LatLng(latitude, longitude),
               content: 'Nous sommes ici.'
            });
        });
    }
}

google.maps.event.addDomListener(window, 'load', initialize);