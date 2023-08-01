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
$react_radio = $_POST['radio'];


$query = "INSERT INTO student_answer(student_answer) VALUES('$react_radio')";
$query1 = mysqli_query($conn, $query);
$correct_answer = "SELECT answer FROM question_table WHERE question_id='1'";
$correct = mysqli_query($conn, $correct_answer);
if($correct){
if(isset($query1))
{    
     while($row = mysqli_fetch_assoc($correct)){
        if($row['answer'] === $react_radio)
        {
            echo "Good job!";
            $count = 1;
            $insert_count = "INSERT INTO student_answer(count_correct) VALUES('$count')";
        }
        else{
            echo "Incorrect answer!";
            $count = 0;
            $insert_count = "INSERT INTO student_answer(count_correct) VALUES('$count')";
        }
     }
}
  

else
  {
	echo "error!";

}
 } 
  else{
    echo "error";
  }

}
$conn->close();
?>