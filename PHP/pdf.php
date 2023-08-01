<?php

header('Access-Control-Allow-Origin: *');
header('content-type: multipart/form-data');
header("Content-Type: application/download"); 
header("Content-Description: File Transfer");
$servername = "localhost";
$username= "root";
$database = "project";
$password ="";

$conn = mysqli_connect($servername, $username,$password ,$database);
if(mysqli_connect_error())
{
    echo mysqli_connect_error();
}
else{
$result = "SELECT directory FROM pdf_data WHERE ID='31'";
$query = mysqli_query($conn, $result);
$json_array = array();
while($row = mysqli_fetch_assoc($query)){
    $json_array[] = $row;
}
echo json_encode($json_array);
}
?>