<?php


// DATABASE CONNECTION

$host="localhost";
$dbname="student_manager";
$user="root";
$psw="";
// - Create PDO connection
try{
$pdo= new PDO("mysql:host=$host;dbname=$dbname,$user,$psw");
// - Configure error mode
$pdo->setAttribute(
    PDO::ATTR_ERRMODE,
    PDO::ERRMODE_EXCEPTION
);
}
catch(PDOException $e){
    echo"error  :  " .$e->getMessage();
}


// - Export connection variable

// Used by all backend files
//