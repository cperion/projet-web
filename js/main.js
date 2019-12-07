// On fait la carte

var mymap = L.map('map').setView([48.86, 2.35], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);


// Les icônes

var icon_cnam = L.icon({
    iconUrl: 'img/carte_forum_romain.jpg',
    //shadowUrl: 'img/carte_forum_romain.jpg',

    iconSize: [38, 38], // size of the icon
    //shadowSize: [50, 64], // size of the shadow
    //iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    //popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var icon_rome = L.icon({
    iconUrl: 'img/carte_forum_romain.jpg',
    //shadowUrl: 'img/carte_forum_romain.jpg',

    iconSize: [38, 38], // size of the icon
    //shadowSize: [50, 64], // size of the shadow
    //iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    //popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var icon_venise = L.icon({
    iconUrl: 'img/carte_forum_romain.jpg',
    //shadowUrl: 'img/carte_forum_romain.jpg',

    iconSize: [38, 38], // size of the icon
    //shadowSize: [50, 64], // size of the shadow
    //iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    //popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var icon_rosslyn = L.icon({
    iconUrl: 'img/carte_forum_romain.jpg',
    //shadowUrl: 'img/carte_forum_romain.jpg',

    iconSize: [38, 38], // size of the icon
    //shadowSize: [50, 64], // size of the shadow
    //iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    //popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var icon_jerusalem = L.icon({
    iconUrl: 'img/carte_forum_romain.jpg',
    //shadowUrl: 'img/carte_forum_romain.jpg',

    iconSize: [38, 38], // size of the icon
    //shadowSize: [50, 64], // size of the shadow
    //iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    //popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var icon_herjolfsnes = L.icon({
    iconUrl: 'img/carte_forum_romain.jpg',
    //shadowUrl: 'img/carte_forum_romain.jpg',

    iconSize: [38, 38], // size of the icon
    //shadowSize: [50, 64], // size of the shadow
    //iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    //popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var icon_newport = L.icon({
    iconUrl: 'img/carte_forum_romain.jpg',
    //shadowUrl: 'img/carte_forum_romain.jpg',

    iconSize: [38, 38], // size of the icon
    //shadowSize: [50, 64], // size of the shadow
    //iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    //popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// Premier marqueur : CNAM

var marker_cnam = L.marker([48.867008, 2.355349], { icon: icon_cnam });
marker_cnam.bindPopup("Conservatoire National des Arts et Métiers").openPopup();
marker_cnam.on("click", clickOnCNAM);

// Deuxieme marqueur : Rome

var marker_rome = L.marker([41.8941, 12.4854], { icon: icon_rome });
marker_rome.bindPopup("Forum Romain").openPopup();
marker_rome.on("click", clickOnROME);

// Troisieme marqueur : Venise

var marker_venise = L.marker([45.4385, 12.3275], { icon: icon_venise });
marker_venise.bindPopup("Venise").openPopup();
marker_venise.on("click", clickOnVENISE);

// Quatrième marqueur : Rosslyn

var marker_rosslyn = L.marker([55.8560, -3.1602], { icon: icon_rosslyn });
marker_rosslyn.bindPopup("Rosslyn").openPopup();
marker_rosslyn.on("click", clickOnROSSLYN);

// Cinquième marqueur : Jérusalem

var marker_jerusalem = L.marker([31.7797, 35.2295], { icon: icon_jerusalem });
marker_jerusalem.bindPopup("Jerusalem").openPopup();
marker_jerusalem.on("click", clickOnJERUSALEM);

// Sixième marqueur : Newport

var marker_newport = L.marker([41.4867, -71.3099], { icon: icon_newport });
marker_newport.bindPopup("Newport").openPopup();
marker_newport.on("click", clickOnNEWPORT);

// Septieme marqueur : Herjolfsnes

var marker_herjolfsnes = L.marker([-44.4666, 59.9833], { icon: icon_herjolfsnes });
marker_herjolfsnes.bindPopup("Herjolfsnes").openPopup();
marker_herjolfsnes.on("click", clickOnHERJOLFSNES);






// variables de visibilite

level = 12.

var romeVisible = false;
var veniseVisible = false;
var rosslynVisible = false;
var jerusalemVisible = false;
var herjolfsnesVisible = false;
var newportVisible = false;

// fonctions de visibilité

function show() {
    console.log(mymap.getZoom())
    if (romeVisible && !mymap.hasLayer(marker_rome) && mymap.getZoom() >= level && mymap.getBounds().contains(marker_rome.getLatLng())) {
        marker_rome.addTo(mymap);
    }
    if (veniseVisible && !mymap.hasLayer(marker_venise) && mymap.getZoom() >= level && mymap.getBounds().contains(marker_venise.getLatLng())) {
        marker_venise.addTo(mymap);
    }
    if (rosslynVisible && !mymap.hasLayer(marker_rosslyn) && mymap.getZoom() >= level && mymap.getBounds().contains(marker_rosslyn.getLatLng())) {
        marker_rosslyn.addTo(mymap);
    }
    if (jerusalemVisible && !mymap.hasLayer(marker_jerusalem) && mymap.getZoom() >= level && mymap.getBounds().contains(marker_jerusalem.getLatLng())) {
        marker_jerusalem.addTo(mymap);
    }
    if (herjolfsnesVisible && !mymap.hasLayer(marker_herjolfsnes) && mymap.getZoom() >= level && mymap.getBounds().contains(marker_herjolfsnes.getLatLng())) {
        marker_herjolfsnes.addTo(mymap);
    }
    if (newportVisible && !mymap.hasLayer(marker_newport) && mymap.getZoom() >= level && mymap.getBounds().contains(marker_newport.getLatLng())) {
        marker_newport.addTo(mymap);
    }
}

mymap.on('zoomend', show);
// --- LES MARQUEURS --- declaration



// Evenements
var inventory = document.getElementById('inventory');

function clickOnCNAM(e) {
    alert("Vous visitez le musée et tombez sur une étrange carte !");
    romeVisible = true;
    add_obj_invent(inventory,"img/carte_forum_romain.jpg");
}

function clickOnROME(e) {
  /** fct à terminer, l'idée c'est de charger l'icône dans l'inventaire et que lorsqu'on clique dessus le code s'affiche et on doit remplir le bon déchiffrement dans une zone de texte */
    alert("ROMMMME");
    var obj = add_obj_invent(inventory,"code_statue_cesar.jpg");
    obj.addEventListener("click",function(){
      if(input.value=="zeno venise"){
        var input = document.createElement("INPUT");
        input.setAttribute("type", "text");
          veniseVisible = true;
      };
    })
}

function clickOnVENISE(e) {
    alert("VENEZ, Venise ...");
    rosslynVisible = true;
}

function clickOnROSSLYN(e) {
  /** énigme, pour avoir le marqueur de Jérusalem visible il faut déchiffrer le parchemin */
    alert("En visitant la chapelle vous tombez sur un parchemin bizarre !");
    var parchemin = document.createElement('IFRAME');
    parchemin.src = "parchemin.html";
    document.body.appendChild(parchemin);
    parchemin.addEventListener("click", function(){

    })
    if(zoom >= 17 ){
      jerusalemVisible = true;
    }

}

function clickOnJERUSALEM(e) {
    alert("En allant visiter le St-Sépulcre, vous tombez sur un guide original qui se met à parler d'une tour qui se trouve aux US dont les plans de construction correspondent à ceux de la chapelle du St-Sépulcre.");
    alert("Ce qui est étonnant c'est que cette chapelle aurait été construit avant la découverte de l'Amérique en 1492...");
    newportVisible = true;
}

function clickOnHERJOLFSNES(e) {
    alert("Vous avez trouvé une vieille colonie viking où se trouve un monastère. Vous décidez de vous y rendre.");
    alert("Une liste de coordonnées géographiques se trouvent dans un manuscrit louche...")
    herjolfsnesVisible = true;
}

function clickOnNEWPORT(e) {
    alert("Vous vous approchez de la tour mais elle est entourée de barrières et nous sommes en plein jour...");
    /**conditon pour faire style on attend la nuit qui autorise la lecture du message */
    alert("Après vous être introduit dans la tour, vous tombez nez à nez avec une inscription en langue micmac: maqamigew esgig")
}

function add_obj_invent(inventory,image){
  /** cette fct ajoute un objet à l'inventaire mais il va falloir créer des icones pour les objets
  aussi pour chaque objet il va falloir recréer une fonction eventlistener */
  var obj = document.createElement("IMG")
  obj.src = image;
  inventory.appendChild(obj);
}

// LES MARQUEURS --- affichage
alert("Aujourd'hui a lieu une exposition sur les globes au CNAM");
marker_cnam.addTo(mymap) // on ajoute le marqueur à la carte
