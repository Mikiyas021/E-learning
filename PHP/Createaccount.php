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
$react_faculity = $_POST['faculityname'];
$react_username = $_POST['Username'];
$react_password = $_POST['Password'];
$data = "SELECT Faculity_name FROM  dhtable  WHERE Faculity_name = '$react_faculity'";
$query1 = mysqli_query($conn, $data);

if($query1)
{

  if(mysqli_num_rows($query1) >0)
  {
    echo "Faculity already exists";
  }
else
{
 
$query = "INSERT INTO dhtable( ID, Faculity_name,username,Password ) VALUES('', '$react_faculity', '$react_username', '$react_password');";
$query1 = mysqli_query($conn, $query);
if($query1){
  echo "Faculity added!";
}
}
}

else
{
echo "error";
}


$conn->close();
}



?>