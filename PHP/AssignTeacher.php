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
$id1  = $_GET['id1'];
$react_id = $_POST['teacher_id2'];
$react_firstname = $_POST['first_name2'];
$react_lastname = $_POST['last_name2'];
$react_class = $_POST['class'];
$react_course = $_POST['course'];


$data = "SELECT teacher_id FROM  teacher_class  WHERE teacher_id = '$react_id'";
$query1 = mysqli_query($conn, $data);

if($query1)
{
$check_assign = "SELECT Class_name, Course_name from teacher_class where Class_name = '$react_class' && Course_name = '$react_course'";
$check_query = mysqli_query($conn, $check_assign);
if(mysqli_num_rows($check_query) === 0 )
{
$query = "INSERT INTO teacher_class(ID, Teacher_id, Teacher_name, Teacher_last_name,Faculity_name, Class_name, Course_name) VALUES('', '$react_id', '$react_firstname', '$react_lastname', '$id1','$react_class', '$react_course')";
if(mysqli_query($conn, $query))
    {
        echo "The teacher is successfully assigned! ";
    }
}
else
    {
        echo "The Course on this class is already asssigned for another teacher!";
    }
}
else
{
echo "error";
}


$conn->close();
}

?>