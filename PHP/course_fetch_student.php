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
    $id = $_GET['id'];
    $sql = "SELECT str.Student_id, str.Department, str.Year_, str.Semister, sc.Department, sc.Year_, sc.Semister, sc.title, sc.Course_code FROM allstudent str, course_list sc where str.Department = sc.Department && str.Year_ = sc.Year_ && str.Semister = sc.Semister && str.Student_id =$id";
    $result = mysqli_query($conn, $sql);
    $json_array = array();
    
        while($row = mysqli_fetch_assoc($result))
        {
            $json_array[]= $row;
        }
            echo json_encode($json_array);
}
?>