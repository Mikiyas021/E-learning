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
    $sql = "SELECT video,description_,Class_name, Course_name FROM video WHERE Class_name = '$id1' && Course_name = '$id2'";
    $query = mysqli_query($conn, $sql);
    $json_array;
    while($row = mysqli_fetch_array($query)){
    $video_url = $row['video'];
    $description = $row['description_'];
      $response = array('src' => $video_url,'description' =>$description); 
        $json_array[] = $response;
    }
    echo json_encode($json_array);
}
?>