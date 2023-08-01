<?php
header('Access-Control-Allow-Origin: *');
session_start();
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
    $id2 = $_GET['id2'];
    $sql = "SELECT filename, Class_name, Course_name FROM course_outline where Class_name='$id1' && Course_name = '$id2'";
    $result = mysqli_query($conn, $sql);
    $json_array;
    while($row = mysqli_fetch_array($result)){
    $pdf_url = $row['filename'];
      $response = array('src' => $pdf_url); 
        $json_array[] = $response;
    }
    echo json_encode($json_array);
}
?>