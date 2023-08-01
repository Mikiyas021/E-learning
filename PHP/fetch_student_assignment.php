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
    $sql = "SELECT Student_id,filename, Class_name, Course_name, Submitted_date FROM student_assignment where Class_name='$id1' && Course_name = '$id2'";
    $result = mysqli_query($conn, $sql);
    $json_array;
    while($row = mysqli_fetch_array($result)){
    $pdf_url = $row['filename'];
    $Student_id = $row['Student_id'];
    $submission = $row['Submitted_date'];
      $response = array('src' => $pdf_url,'Student_id' =>$Student_id, 'submitted_date' =>$submission); 
        $json_array[] = $response;
    }
    echo json_encode($json_array);
}
?>