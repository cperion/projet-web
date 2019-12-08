// On fait la carte

var time;

var mymap = L.map('map').setView([48.86, 2.35], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// variables de visibilite

level = 12

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
    if (herjolfsnesVisible && !mymap.hasLayer(marker_herjolfsnes) && mymap.getZoom() >= level-2 && mymap.getBounds().contains(marker_herjolfsnes.getLatLng())) {
        marker_herjolfsnes.addTo(mymap);
    }
    if (newportVisible && !mymap.hasLayer(marker_newport) && mymap.getZoom() >= level && mymap.getBounds().contains(marker_newport.getLatLng())) {
        marker_newport.addTo(mymap);
    }
}

mymap.on('zoomend', show);

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

var marker_venise = L.marker([45.4385, 12.3275]);
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

var marker_herjolfsnes = L.marker([59.9833, -44.4666]);
marker_herjolfsnes.bindPopup("Herjolfsnes").openPopup();
marker_herjolfsnes.on("click", clickOnHERJOLFSNES);

// Les icônes

var icon_cnam = L.icon({
    iconUrl: 'img/carte_forum_romain.jpg',
    
    iconSize: [38, 38], // size of the icon
    
});

var icon_rome = L.icon({
    iconUrl: 'img/carte_forum_romain.jpg',

    iconSize: [38, 38], // size of the icon

});

var icon_venise = L.icon({
    iconUrl: 'img/carte_forum_romain.jpg',


    iconSize: [38, 38], // size of the icon

});

var icon_rosslyn = L.icon({
    iconUrl: 'img/carte_forum_romain.jpg',


    iconSize: [38, 38], // size of the icon
 
});

var icon_jerusalem = L.icon({
    iconUrl: 'img/carte_forum_romain.jpg',


    iconSize: [38, 38], // size of the icon

});

var icon_herjolfsnes = L.icon({
    iconUrl: 'img/carte_forum_romain.jpg',


    iconSize: [38, 38], // size of the icon

});

var icon_newport = L.icon({
    iconUrl: 'img/carte_forum_romain.jpg',

    iconSize: [38, 38], 

});

// Evenements
var start = new Date().toLocaleTimeString('fr');

var inventory = document.getElementById('inventory');
var info = document.getElementById('info');
var indice = document.getElementById('indice');

var getIndice = document.createElement("INPUT");
getIndice.type = "submit";
getIndice.value = "Demander de l'aide";
indice.appendChild(getIndice);

function clickOnIndice(){
  indice.addEventListener("click", function(){
    if(romeVisible==true && veniseVisible==false){
      alert("13 désigne la clé, le nom du temple le code.");
    }else if(rosslynVisible==true && jerusalemVisible==false){
      alert("Ctrl+U.");
    }else if(newportVisible==true && herjolfsnesVisible==false){
      alert("Un traducteur serait le bienvenue...");
    }
  });
}

/** Fonctions CNAM */

function clickOnCNAM() {
    alert("Vous visitez le musée et tombez sur une étrange carte !");
    var icon_map = add_obj_invent(inventory,"../img/zenoMap.jpg");
    alert("Au dos, il est écrit: 'La clé se trouve dans le forum romain'");
    romeVisible = true;
}

/** Fonctions Rome */

function clickOnROME() {
  var c = 0;
  alert("Arrivé à Rome, vous vous rendez sur le forum romain comme l'indique votre carte.");
  alert("Vous cherchez un indice sur chacun des monuments.")
  icone_carte = add_obj_invent(inventory,"../img/icone_carte_forum.jpg");
  icone_carte.height = icone_carte.naturalHeight*0.5;
  icone_carte.width = icone_carte.naturalWidth*0.5;
  icone_carte.addEventListener("click", function(){
    c = c+1;
    if(c==1){
      carte_forum_romain = add_obj_invent(info, "../img/carte_forum_romain.jpg");
      carte_forum_romain.height = carte_forum_romain.naturalHeight*0.5;
      carte_forum_romain.width = carte_forum_romain.naturalWidth*0.5;
      carte_forum_romain.style.alignItems = "baseline";
      chooseMonuments(info);
    }
  });
}

function chooseMonuments(info){
  var temple_ant_fstne = document.createElement("INPUT");
  temple_ant_fstne.type = "submit";
  temple_ant_fstne.value = "Temple d'Antonin et Faustine";
  info.appendChild(temple_ant_fstne);
  var temple_csr = document.createElement("INPUT");
  temple_csr.type = "submit";
  temple_csr.value = "Temple de César";
  info.appendChild(temple_csr);
  var rostres = document.createElement("INPUT");
  rostres.type = "submit";
  rostres.value = "Rostres";
  info.appendChild(rostres);
  var arc = document.createElement("INPUT");
  arc.type = "submit";
  arc.value = "Arc de Septime Sévère";
  info.appendChild(arc);
  var temple_strn = document.createElement("INPUT");
  temple_strn.type = "submit";
  temple_strn.value = "Temple de Saturne";
  info.appendChild(temple_strn );
  list_monuments = [temple_csr,temple_strn,temple_ant_fstne,rostres,arc,];
  for(let i = 0; i < list_monuments.length; i++){
    if(list_monuments[i] != temple_csr){
      list_monuments[i].addEventListener("click", notCaesar.bind(null,info,list_monuments[i],list_monuments,i));
    }else if (list_monuments[i] == temple_csr) {
      list_monuments[i].addEventListener("click", ifCaesar.bind(null,info,list_monuments));
    };
  };
}

function ifCaesar(info,list_monuments){
  info.removeChild(carte_forum_romain);
  for (let i = 0; i < list_monuments.length; i++){
    console.log(list_monuments[i]);
    info.removeChild(list_monuments[i]);
  };
  var input = document.createElement("INPUT");
  var submit = document.createElement("INPUT");
  input.setAttribute("type","text");
  submit.value = "Envoyer";
  submit.type = "submit";
  info.appendChild(input);
  info.appendChild(submit);
  alert("Un message est écrit au bas d'une statue de Jules César: mrab iravfr 13");
  submit.addEventListener("click", decryptCodeCeasar.bind(null,input,submit));
};

function notCaesar(info,monument,list_monuments,id){
  alert("Vous ne trouvez rien d'intéressant...");
  info.removeChild(monument);
  console.log(monument);
  list_monuments.splice(id,1);
  console.log(list_monuments);
}

function decryptCodeCeasar(input,submit){
  if(input.value == "zeno venise"){
    veniseVisible = true;
    alert("Vous devez mettre en lien le mot 'zeno' et la ville de Venise...");
    info.removeChild(input);
    info.removeChild(submit);
  }else {
    alert("Ce n'est pas le bon message !");
  };
}

/** Fonctions Venise */

function clickOnVENISE() {
    alert("Le palais de la famille Zeno se trouve en effet à Venise !");
    alert("Vous ne pouvez pas le visiter mais tomber sur un historien à qui vous raconter votre épopée.");
    alert("La carte que vous avez trouvé au CNAM se trouve avoir été créé par un membre de la famille Zeno !");
    alert("L'historien vous conseille de vous rendre à la chapelle de Rosslyn, au sud d'Edimbourg où a été hébegé un des membres de la famille.");
    rosslynVisible = true;
}

/** Fonctions Rosslyn */

function clickOnROSSLYN() {
    alert("En visitant la chapelle vous tombez sur un parchemin bizarre !");
    var icone_parchemin = add_obj_invent(inventory,"../img/parchemin2.jpg");
    var c = 0;
    icone_parchemin.width = icone_parchemin.naturalWidth*0.1;
    icone_parchemin.height = icone_parchemin.naturalHeight*0.1;
    icone_parchemin.addEventListener("click", clickOnParchemin.bind(null,icone_parchemin,c));
}

function clickOnParchemin(parchemin,c){
  c = c+1;
  if(c==1){
    var lien_parchemin = document.createElement("A");
    lien_parchemin.href = "parchemin.html";
    lien_parchemin.text = "Parchemin de Rosslyn";
    lien_parchemin.target = "_blank";
    lien_parchemin.style.alignItems = "center";
    info.appendChild(lien_parchemin);
    var input2 = document.createElement("INPUT");
    var submit2 = document.createElement("INPUT");
    input2.setAttribute("type","text");
    submit2.value = "Entrer le mot de passe";
    submit2.type = "submit";
    info.appendChild(input2);
    info.appendChild(submit2);
    submit2.addEventListener("click", decryptParchemin.bind(null,input2,lien_parchemin,submit2));
  }
}

function decryptParchemin(txt,lien_parchemin,submit){
  if(txt.value=="Jerusalem" || txt.value=="jerusalem" || txt.value=="Jérusalem" || txt.value=="jérusalem"){
    alert("D'après le parchemin, la suite de votre enquête se déroule à Jérusalem.");
    info.removeChild(lien_parchemin);
    info.removeChild(txt);
    info.removeChild(submit);
  }else{
    alert("Ce n'est pas le bon mot !");
  }
}

/** etc...*/

function clickOnJERUSALEM(e) {
    alert("En allant visiter le St-Sépulcre, vous tombez sur un guide original qui se met à parler d'une tour qui se trouve aux US (Newport,Rhode Islands) dont les plans de construction correspondent à ceux de la chapelle du St-Sépulcre.");
    alert("Ce qui est étonnant c'est que cette tour aurait été construit avant la découverte de l'Amérique en 1492...");
    alert("Vous tombez sur une autre inscription où est écrit: '50km, N-W, Farewell Cape'");
    newportVisible = true;
}

function clickOnHERJOLFSNES(e) {
    alert("Vous avez trouvé une vieille colonie viking où se trouve un monastère. Vous décidez de vous y rendre.");
    alert("Sur la porte fermée du monastère vous retrouvez la même carte que vous avez trouvé au CNAM.")
    alert("Sur celle-ci une annotation écrite en gros sur la carte dit: 'La carte des frères Zeno est une fausse carte'");
    var end = new Date().toLocaleTimeString('fr');
    alert("Vous avez mis "+(start-end)+" pour finir le jeu !");
}

function clickOnNEWPORT(e) {
    alert("Vous vous approchez de la tour mais elle est entourée de barrières et nous sommes en plein jour...");
    /**conditon pour faire style on attend la nuit qui autorise la lecture du message */
    alert("Après vous être introduit dans la tour, vous tombez nez à nez avec une inscription en langue micmac: maqamigew esgig");
    var input3 = document.createElement("INPUT");
    var submit3 = document.createElement("INPUT");
    input3.setAttribute("type","text");
    submit3.type = "submit";
    submit3.value = "Vérifier la traduction";
    info.appendChild(input3);
    info.appendChild(submit3);
    submit3.addEventListener("click", tradMiqmac.bind(null,input3,submit3));
}

function tradMiqmac(input,submit){
  if(input.value=="terre verte"){
    alert("Vous avez trouvé la bonne traduction, il ne vous reste plus qu'à trouver ce qu'elle indique !");
    submit.value = "Vérifier la destination";
    submit.addEventListener("click", verifDest.bind(null,input));
  }else if(input.value=="Groenland" || input.value=="groenland"){
    alert("C'est la bonne destination, en effet des vikings venant du Groenland auraient visité l'Amérique bien avant Christophe Collomb !");
    herjolfsnesVisible = true;
  }else{
    alert("Ce n'est pas la bonne traduction !");
  }
}

function add_obj_invent(inventory,image){
  /** cette fct ajoute un objet à l'inventaire mais il va falloir créer des icones pour les objets
  aussi pour chaque objet il va falloir recréer une fonction eventlistener */
  var obj = document.createElement("IMG")
  obj.src = image;
  obj.style.alignItems = "flex-start";
  inventory.appendChild(obj);
  return obj;
}


function win() {
  alert( "Bravo !!!" )
  var pseudo = prompt("Entrez votre pseudo")
  var passwd = prompt('Entrez votre mot ce passe')
  var data = new FormData;
  data.append('name', pseudo);
  data.append('password', passwd);
  data.append('time', time);
  data.append('difficulty', level);

  fetch('../score.php', {
    method: 'post',
    body: data
  }).then(e => {
    console.log(e)
  })
}

// LES MARQUEURS --- affichage
alert("Aujourd'hui a lieu une exposition sur les globes au CNAM");
marker_cnam.addTo(mymap) // on ajoute le marqueur à la carte
