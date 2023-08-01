<?php
include_once("core.php");

$servername = "localhost";
$username = "root";
$database = "project";
$password = "";
$conn = mysqli_connect($servername, $username, $password, $database);
if(mysqli_connect_error()){
    echo mysqli_connect_error();
}
else{
    
    $user_students = "SELECT  * FROM account_list";
    $teachers = "SELECT  * FROM teacher_list";
    $user_teachers = "SELECT  * FROM teacher_account";
    $students = "SELECT * FROM allstudent";
    $query_user_student= mysqli_query($conn, $user_students);
    $query_teachers= mysqli_query($conn, $teachers);
    $query_user_teachers= mysqli_query($conn, $user_teachers);
    $query_students = mysqli_query($conn,$students);
    $total_student_registered = mysqli_num_rows($query_user_student);
    $total_teachers = mysqli_num_rows($query_teachers);
    $total_teachers_registered = mysqli_num_rows($query_user_teachers);
    $total_students = mysqli_num_rows($query_students);
    $json_array = array();
         $json_array["student" ] = $total_students;
         $json_array["student_user" ] = $total_student_registered;
         $json_array["teacher"] = $total_teachers;
         $json_array["teacher_user"] = $total_teachers_registered;

    echo json_encode($json_array);
}
?>