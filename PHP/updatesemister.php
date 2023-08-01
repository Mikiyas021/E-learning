<?php
	header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "root";
$password = "";
$databasename = "project";

$conn = mysqli_connect($servername, $username, $password, $databasename);

if(mysqli_connect_error()){
	echo mysqli_connect_error();
}

else{
    $id1 = $_POST['class_name'];
   $sql = "UPDATE allstudent Set Semister = '2'  where Class_name = '$id1'";
   $query = mysqli_query($conn, $sql);
   if($query){
    echo "Semister for ".$id1. " is updated to second semister";
   }
   
 
}
?>