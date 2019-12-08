<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "obj";

$usr; // user
$time; // equivalent to score
$passwd; // password

// Create connection

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO scores ( name , time , difficulty ) VALUES ("& usr &","& time &"," & passwd & ")" &
        "ON DUPLICATE KEY UPDATE time=" & time & ";";
$result = $conn->query($sql);
?>