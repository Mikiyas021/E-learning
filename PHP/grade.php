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
  $id2 = $_GET['id2'];
$react_student = $_POST['Student_id'];
$react_first = $_POST['first_name'];
$react_last = $_POST['last_name'];
$react_test = $_POST['test'];
$react_assignment = $_POST['Assignment'];
$react_mid = $_POST['Midexam'];
$react_final = $_POST['Finalexam'];
    $check = "SELECT Course_title, Student_id FROM grade where Student_id = '$react_student' && Course_title = '$id1'";
    $check_query = mysqli_query($conn, $check);
    if(mysqli_num_rows($check_query) < 1){
$query = "INSERT INTO Grade(Student_id, First_name,Last_name,Test, Assignment, Mid_exam, Final_exam, Course_title, Class_name) VALUES('$react_student','$react_first','$react_last','$react_test', '$react_assignment', '$react_mid', '$react_final','$id1', '$id2')";
$query1 = mysqli_query($conn, $query);
if($query1){
    if(isset($query1))
    {
         echo "Result added successfully";	
    }

else
{
 echo "Unable to add result";

}
}
    }
    else{
   $query = "UPDATE grade SET Test = '$react_test', Assignment = '$react_assignment', Mid_exam = '$react_mid', Final_exam = '$react_final' where Student_id = '$react_student' && Course_title = '$id1'";
   $query1 = mysqli_query($conn, $query);
if($query1){
    if(isset($query1))
    {
         echo "Result updated successfully";	
    }

else
{
 echo "Unable to add result";

}
    }
 
 } 
}


$conn->close();
?>