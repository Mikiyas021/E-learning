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
    $id1 = $_POST['class_id_delete'];
    $sql = " DELETE FROM class WHERE class_name = '$id1'";
    $sql3 = "DELETE FROM allstudent where Class_name = '$id1'";
    $query = mysqli_query($conn, $sql);
    $query3 = mysqli_query($conn, $sql3);
    
    if($query && $query3){
      echo "Class deleted!";
     
    }
    else{
        echo "error deleting record";
    }
 
}
?>