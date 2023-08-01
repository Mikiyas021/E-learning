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
  $id3 = $_GET['id3'];
$react_radio = $_POST['radio'];
$correct_answer = "SELECT answer FROM question_table WHERE question_id='4'";
$correct = mysqli_query($conn, $correct_answer);
if(mysqli_num_rows($correct)>0){
if($correct){
 
     while($row = mysqli_fetch_assoc($correct)){
        if($row['answer'] === $react_radio)
        { 
          $count = 1;
          $query = "INSERT INTO student_answer(Student_id,Class_name,Course_name,student_answer, count_correct) VALUES('$id1','$id2','$id3','$react_radio', '$count')";

          $query1 = mysqli_query($conn, $query);
            echo "Good job! ";
            $check = "SELECT answer FROM question_table WHERE question_id='5'";
            $check_query = mysqli_query($conn, $check);
            if(mysqli_num_rows($check_query) === 0){
             $correct2 = "SELECT count_correct FROM student_answer WHERE count_correct = 1";
             $correct3 = mysqli_query($conn, $correct2);
             $total = mysqli_num_rows($correct3);
             echo "You score ".$total;
             $delete = "DELETE  FROM student_answer WHERE 1 ";
             $deletequery = mysqli_query($conn, $delete);
        }
        }
        else{
          $count = 0;
          $query = "INSERT INTO student_answer(student_answer, count_correct) VALUES('$react_radio', '$count')";
          $query1 = mysqli_query($conn, $query);
            echo "Incorrect answer! ";
          
          
            $check = "SELECT answer FROM question_table WHERE question_id='5'";
            $check_query = mysqli_query($conn, $check);
            if(mysqli_num_rows($check_query) === 0){
             $correct2 = "SELECT count_correct FROM student_answer WHERE count_correct = 1";
             $correct3 = mysqli_query($conn, $correct2);
             $total = mysqli_num_rows($correct3);
             echo "You score ".$total;
             $delete = "DELETE  FROM student_answer WHERE 1 ";
             $deletequery = mysqli_query($conn, $delete);
        }
     }
    
    }
 } 
  else{
    echo "error";
  }
}

}
$conn->close();
?>