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
    $id2 = $_GET['id2'];
    $sql = "SELECT Class_name, Course_name,question_id, question, option1, option2, option3, option4 FROM question_table WHERE question_id = '7' && Class_name = '$id1' && Course_name = '$id2'";
    $result = mysqli_query($conn, $sql);
    $json_array = array();
        while($row = mysqli_fetch_assoc($result))
        {
            $json_array[]= $row;
        }
            echo json_encode($json_array);
}
?>