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
$react_course_code = $_POST['course_code'];
$react_course_title= $_POST['title'];
$react_course_year= $_POST['year'];
$react_course_semister= $_POST['semister'];
$react_department= $_POST['department'];
$id1 = $_GET['id1'];


$data = "SELECT Course_code FROM  course_list  WHERE course_code = '$react_course_code'";
$query1 = mysqli_query($conn, $data);

if($query1)
{

  if(mysqli_num_rows($query1) >0)
  {
    echo "Course already exists";
  }
else
{
$query = "INSERT INTO course_list(Faculity_name,Department, Year_, Semister, course_code, title ) VALUES('$id1','$react_department' ,'$react_course_year', '$react_course_semister','$react_course_code', '$react_course_title' );";
if(mysqli_query($conn, $query))
    {
        echo "The course is successfully inserted ";
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