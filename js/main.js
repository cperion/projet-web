var mymap = L.map('map').setView([48.86, 2.35], 13);
var marker_cnam = L.marker([48.867008, 2.355349]).addTo(mymap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {

    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

marker_cnam.bindPopup("Conservatoire National des Arts et Métiers").openPopup();
marker_cnam.on("click",clickOnCNAM);

alert("Aujourd'hui a lieu une exposition sur les globes au CNAM");

function clickOnCNAM(e){
  alert("Vous visitez le musée et tombez sur une étrange carte !")
}
