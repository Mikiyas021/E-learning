<?php
include_once("core.php");
include("session.php");
$servername = "localhost";
$username = "root";
$database = "project";
$password = "";
$conn = mysqli_connect($servername, $username, $password, $database);
if(mysqli_connect_error()){
    echo mysqli_connect_error();
}
else{
    $result = "SELECT  ID, First_name, Last_name, Department, Username FROM account_list where ID = $session_id ";
    $query= mysqli_query($conn, $result);
    $json_array = array();
    while($row = mysqli_fetch_assoc($query)){
         $json_array[] = $row;
    }
    
    echo json_encode($json_array);

}
?>