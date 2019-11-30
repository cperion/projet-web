var mymap = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
 
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

var myIcon = L.icon({
    iconUrl: "../img/tresor.png",
    iconSize: [40, 40], // size of the icon,
});

var startMarker = L.marker([51.5, -0.09], {icon: myIcon})
startMarker.addTo(mymap)

startMarker.bindPopup("<b>Salut</b><br>Bienvenu dans le projet de Lucas et Cédric. Ta course commence ici.").openPopup();

