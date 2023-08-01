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
$react_id = $_POST['teacher_id'];
$react_firstname = $_POST['first_name'];
$react_lastname = $_POST['last_name'];
$id1 = $_GET['id1'];

$data = "SELECT teacher_id FROM  teacher_list  WHERE teacher_id = '$react_id'";
$query1 = mysqli_query($conn, $data);

if($query1)
{

  if(mysqli_num_rows($query1) >0)
  {
    echo "Teacher already exists!";
  }
else
{
$query = "INSERT INTO teacher_list( teacher_id,First_name, Last_name, Faculity_name ) VALUES('$react_id', '$react_firstname', '$react_lastname', '$id1');";

if(mysqli_query($conn, $query))
    {
        echo "The teacher is successfully added! ";
    }
else
    {
        echo "The teacher is not added!";
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