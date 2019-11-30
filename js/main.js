// On fait la carte 

var mymap = L.map('map').setView([48.86, 2.35], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {

    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

// --- LES MARQUEURS --- declaration
// Premier marqueur : CNAM

var marker_cnam = L.marker([48.867008, 2.355349]);
marker_cnam.bindPopup("Conservatoire National des Arts et Métiers").openPopup();
marker_cnam.on("click", clickOnCNAM);

// Deuxieme marqueur : Rome

var marker_rome= L.marker([41.8941, 12.4854]);
marker_rome.bindPopup("Forum Romain").openPopup();
marker_rome.on("click", clickOnROME);
 
// Troisieme marqueur : Venise

var marker_venise = L.marker([41.4385, 12.3275]);
marker_venise.bindPopup("Venise").openPopup();
marker_venise.on("click", clickOnVENISE);

// Quatrième marqueur : Rosslyn

var marker_rosslyn = L.marker([55.8560, -3.1602]);
marker_rosslyn.bindPopup("Rosslyn").openPopup();
marker_rosslyn.on("click", clickOnROSSLYN);

// Cinquième marqueur : Jérusalem

var marker_jerusalem = L.marker([31.7797, 35.2295]);
marker_jerusalem.bindPopup("Jerusalem").openPopup();
marker_jerusalem.on("click", clickOnJERUSALEM);

// Sixième marqueur : Newport

var marker_newport = L.marker([41.4867, -71.3099]);
marker_newport.bindPopup("Newport").openPopup();
marker_newport.on("click", clickOnNEWPORT);

// Septieme marqueur : Herjolfsnes

var marker_herjolfsnes = L.marker([-44.4666, 59.9833]);
marker_herjolfsnes.bindPopup("Herjolfsnes").openPopup();
marker_herjolfsnes.on("click", clickOnHERJOLFSNES);


// Evenements

function clickOnCNAM(e) {
    alert("Vous visitez le musée et tombez sur une étrange carte !");
}

function clickOnROME(e) {
    alert("ROMMMME");
}

function clickOnVENISE(e) {
    alert("VENEZ, Venise ...");
}

function clickOnROSSLYN(e) {
    alert("Grosse ligne");
}

function clickOnJERUSALEM(e) {
    alert("JESUS SALEM");
}

function clickOnHERJOLFSNES(e) {
    alert("HerWHAT §!?");
}

function clickOnNEWPORT(e) {
    alert("vive l'usb");
}




// LES MARQUEURS --- affichage
alert("Aujourd'hui a lieu une exposition sur les globes au CNAM");
marker_cnam.addTo(mymap) // on ajoute le marqueur à la carte
marker_rome.addTo(mymap);
marker_venise.addTo(mymap);
marker_rosslyn.addTo(mymap);
marker_jerusalem.addTo(mymap);
marker_newport.addTo(mymap);
marker_herjolfsnes.addTo(mymap);
