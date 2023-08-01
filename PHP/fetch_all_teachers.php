<?php
include_once("core.php");

$servername = "localhost";
$username = "root";
$database = "project";
$password = "";
$conn = mysqli_connect($servername, $username, $password, $database);
if(mysqli_connect_error()){
    echo mysqli_connect_error();
}
else{
    $result = "SELECT  Teacher_id,First_name, Last_name, Username FROM teacher_account";
    $query= mysqli_query($conn, $result);
    $json_array = array();
    while($row = mysqli_fetch_assoc($query)){
         $json_array[] = $row;
    }
    echo json_encode($json_array);
}
?>