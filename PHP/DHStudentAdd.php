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
$react_class = $_POST['class_id'];
$react_First_name = $_POST['First_name'];
$react_Last_name = $_POST['Last_name'];
$react_Department = $_POST['Department'];
$react_Student_id = $_POST['ID'];
$react_year = $_POST['year'];
$react_semister = $_POST['semister'];


$data = "SELECT class_name FROM  class  WHERE class_name = '$react_class'";
$query1 = mysqli_query($conn, $data);
$data2 = "SELECT Student_id from allstudent where Student_id = '$react_Student_id'";
$query2 = mysqli_query($conn, $data2);
if($query2)
{

  if(mysqli_num_rows($query2) === 0 )
  {
    $query2 = "INSERT INTO allstudent( id,Student_id, First_name, Last_name,Faculity_name, Department,Year_, Semister, Class_name,reg_date) VALUES('','$react_Student_id', '$react_First_name','$react_Last_name','$id1', '$react_Department','$react_year', '$react_semister' ,'$react_class','');";
    if(mysqli_query($conn, $query2))
    {
      echo "Student is added successfully";
    }
else
    {
        echo "The student is not added!";
    }
}
else{
    echo "The student is already added!";
}
}
else
{
echo "error";
}


$conn->close();
}



?>