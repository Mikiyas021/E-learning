<?php
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
    $sql = "SELECT Student_id,First_name, Last_name,Test,Assignment,Mid_exam,Final_exam,Class_name,Course_title FROM grade where Class_name = '$id1' && Course_title = '$id2'";
    $result = mysqli_query($conn, $sql);
    $json_array = array();
        while($row = mysqli_fetch_assoc($result))
        {
            $json_array[]= $row;
        }
            echo json_encode($json_array);
}
?>