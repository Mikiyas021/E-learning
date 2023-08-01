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
    $id1 = $_POST['teacher_id1'];
    $id2 = $_POST['class_name1'];
    $id3 = $_POST['course_name1'];
    
    $sql = " DELETE FROM teacher_class WHERE Teacher_id = '$id1' && Class_name = '$id2' && Course_name = '$id3' ";
    $sql_student_assignment = " DELETE FROM student_assignment WHERE Class_name = '$id2' && Course_name = '$id3' ";
    $sql_announcement = " DELETE FROM announcement_table WHERE Toclass = '$id2' && Course_name = '$id3' ";
    $sql_assignment = " DELETE FROM pdf_data WHERE Toclass = '$id2' && Course_name = '$id3' ";
    $sql_question = " DELETE FROM question_table WHERE Class_name = '$id2' && Course_name = '$id3' ";
    $sql_grade = " DELETE FROM grade WHERE Class_name = '$id2' && Course_title = '$id3' ";
    $sql_video = " DELETE FROM video WHERE Class_name = '$id2' && Course_name = '$id3' ";


    $query = mysqli_query($conn, $sql);
    $query2 = mysqli_query($conn, $sql_student_assignment);
    $query3 = mysqli_query($conn, $sql_announcement);
    $query4 = mysqli_query($conn, $sql_assignment);
    $query5 = mysqli_query($conn, $sql_question);
    $query6 = mysqli_query($conn, $sql_grade);
    $query7 = mysqli_query($conn, $sql_video);

    if($query && $query2 && $query3 && $query4 && $query5 && $query6 && $query7){
      echo "Instructor unassigned successfully!";
    }
    else{
        echo "error deleting record";
    }
}
?>