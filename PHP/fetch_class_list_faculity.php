<?php
header('Access-Control-Allow-Origin: *');
include_once("core.php");
$servername = "localhost";
$username = "root";
$password = "";
$databasename = "project";

$conn = mysqli_connect($servername, $username, $password, $databasename);
if(mysqli_connect_error()){
    echo mysqli_connect_error();
}
else{ 
    $id1 = $_GET['id1'];
    $sql = "SELECT class_name FROM class where Faculity_name = '$id1'";
    $result = mysqli_query($conn, $sql);
    $json_array = array();
        while($row = mysqli_fetch_assoc($result))
        {
            $json_array[]= $row;
        }
            echo json_encode($json_array);
}
?>