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
$react_class = $_POST['classes'];
$id1 = $_GET['id1'];
$data = "SELECT class_name FROM  class  WHERE class_name = '$react_class'";
$query1 = mysqli_query($conn, $data);

if($query1)
{

  if(mysqli_num_rows($query1) >0)
  {
    echo "class already exists";
  }
else
{
 
$query = "INSERT INTO class( class_id,Faculity_name,class_name ) VALUES('','$id1', '$react_class');";
$query1 = mysqli_query($conn, $query);
if($query1){
  echo "Class added!";
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