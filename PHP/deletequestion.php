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
    $react_question_number = $_POST['question'];
    $sql = " DELETE FROM question_table WHERE question_id= '$react_question_number' && Class_name = '$id1' && Course_name = '$id2'";
    $query = mysqli_query($conn, $sql);
    if($query){
      echo "Question deleted!";
     
    }
    else{
        echo "error deleting record";
    }
 
}
?>