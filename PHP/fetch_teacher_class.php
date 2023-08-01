<?php
header('Access-Control-Allow-Origin: *');
include_once("core.php");
$servername = "localhost";
$username = "root";
$password = "";
$databasename = "project";
$id = $_GET['id'];
$conn = mysqli_connect($servername, $username, $password, $databasename);
if(mysqli_connect_error()){
    echo mysqli_connect_error();
}
else{ 
    $sql = "SELECT Teacher_id, Class_name, Course_name FROM teacher_class where Teacher_id = '$id'";
    $result = mysqli_query($conn, $sql);
    $json_array = array();
        while($row = mysqli_fetch_assoc($result))
        {
            $json_array[]= $row;
        }
            echo json_encode($json_array);
}
?>