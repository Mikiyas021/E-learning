<?php
header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "root";
$password = "";
$databasename = "project";

$conn = mysqli_connect($servername, $username, $password, $databasename);

if(mysqli_connect_error()){
echo mysqli_connect_error();
}
else{
$course = $_GET['id'];
$react_announcement = $_POST['announcement'];
$react_class = $_POST['class'];
$date = date("Ymd");

$query = "INSERT INTO announcement_table (announcement,Toclass,Course_name,date) VALUES('$react_announcement','$react_class', '$course','$date' );";
$result = mysqli_query($conn, $query);
if($result)
    {
        echo "The announcement is successfully sent!";
    }
else
    {
        echo "The message is not sent!";
    }
}

$conn->close();
?>