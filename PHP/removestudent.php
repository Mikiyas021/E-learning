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
    $id1 = $_POST['stud_id'];
    $sql3 = "DELETE FROM allstudent where Student_id = '$id1'";
    $query3 = mysqli_query($conn, $sql3);
    
    if($query3){
      echo "Student removed";
    }
    else{
       echo "error deleting record";
    }
 
}
?>