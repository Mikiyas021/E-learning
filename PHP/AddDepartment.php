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
$react_department= $_POST['department'];
$id1 = $_GET['id1'];


$data = "SELECT department FROM  departments_list  WHERE department = '$react_department'";
$query1 = mysqli_query($conn, $data);

if($query1)
{

  if(mysqli_num_rows($query1) >0)
  {
    echo "Department already exists";
  }
else
{
$query = "INSERT INTO departments_list(ID,Faculity_name,Department) VALUES('','$id1','$react_department');";
if(mysqli_query($conn, $query))
    {
        echo "The department is successfully inserted ";
    }
else
    {
        echo "error";
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