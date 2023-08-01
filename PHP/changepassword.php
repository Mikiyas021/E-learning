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
$id1 = $_GET['id1'];
$react_username = $_POST['Username'];
$react_password = $_POST['Password'];
$data = "SELECT Faculity_name, username FROM  dhtable  WHERE Faculity_name = '$id1' && username = '$react_username'";
$query1 = mysqli_query($conn, $data);

if($query1)
{

  if(mysqli_num_rows($query1) <1 )
  {
    echo "You entered wrong information";
  }
else
{
$query = "UPDATE dhtable SET password = '$react_password' where Faculity_name = '$id1' && username = '$react_username' ";
$query1 = mysqli_query($conn, $query);
if($query1){
  echo "Password Changed successfully!";
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