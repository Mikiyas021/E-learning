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
$react_question = $_POST['question'];
$react_option1 = $_POST['option1'];
$react_option2 = $_POST['option2'];
$react_option3 = $_POST['option3'];
$react_option4 = $_POST['option4'];
$react_answer = $_POST['answer'];
$react_question_id = $_POST['question_id'];


$query = "INSERT INTO question_table(Class_name, Course_name,question_id,question, option1, option2, option3, option4, answer) VALUES('$id1','$id2','$react_question_id','$react_question', '$react_option1', '$react_option2', '$react_option3', '$react_option4', '$react_answer')";
$query1 = mysqli_query($conn, $query);
 
if($query1){
if(isset($query1))
{
     echo "Question added successfully";	
}
  

else
  {
	echo "please enter the question and the choice!";

}
 } 
  else{
    echo "error";
  }

}
$conn->close();
?>