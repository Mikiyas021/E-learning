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

    $sql = "SELECT teacher.Teacher_id,teacher.Teacher_name, teacher.Teacher_last_name,teacher.Class_name, teacher.Course_name, pic.pic_name FROM profile_pic pic, teacher_class teacher WHERE teacher.Class_name = '$id1' && teacher.Course_name = '$id2' && teacher.Teacher_id = pic.Teacher_id";
    $query = mysqli_query($conn, $sql);
   
    while($row = mysqli_fetch_array($query)){
    $image_url = $row['pic_name'];
    $name = $row['Teacher_name'];
    $last = $row['Teacher_last_name'];
      $json_array[] = array('src' => $image_url, 'name' =>$name, 'last'=>$last); 
       
    }
    echo json_encode($json_array);
}
?>