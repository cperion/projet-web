var mymap = L.map('map').setView([48.86, 2.35], 13);
var marker_cnam = L.marker([48.867008, 2.355349]).addTo(mymap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {

    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

<<<<<<< HEAD
marker_cnam.bindPopup("Conservatoire National des Arts et Métiers").openPopup();
marker_cnam.on("click",clickOnCNAM);

alert("Aujourd'hui a lieu une exposition sur les globes au CNAM");

function clickOnCNAM(e){
  alert("Vous visitez le musée et tombez sur une étrange carte !")
}
=======
var myIcon = L.icon({
    iconUrl: "../img/tresor.png",
    iconSize: [40, 40], // size of the icon,
});

var startMarker = L.marker([51.5, -0.09], {icon: myIcon})
startMarker.addTo(mymap)

startMarker.bindPopup("<b>Salut</b><br>Bienvenu dans le projet de Lucas et Cédric. Ta course commence ici.").openPopup();

>>>>>>> c57e0e7f06cac65445148547679ffd1a2fbef895
