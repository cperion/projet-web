<?php
 mysqli_set_charset($link, "utf8");
 $link = mysqli_connect('localhost', 'lulu', 'projetWEB', 'geoEscape');
 // objet
 $requete = "SELECT image FROM obj";
 $objet  = [];
 if ($result = mysqli_query($link, $requete)) {
   while ($ligne = mysqli_fetch_object($result)) {
     $objet[] = $ligne;
   }
   echo json_encode($objet[]);
 } else {
   echo "Erreur de requête de base de données.";
 }
 ?>
