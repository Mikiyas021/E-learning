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
    $id1 = $_POST['ID'];
    $id2 = $_POST['first_name'];
   $sql = "UPDATE account_list Set status = 'inactive'  where ID = '$id1'";
   $query = mysqli_query($conn, $sql);
   if($query){
    echo "The student ".$id2. " with ID ".$id1. " is blocked";
   }
   
 
}
?>