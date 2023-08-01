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
    $sql = "SELECT Teacher_id,pic_name FROM profile_pic WHERE Teacher_id = '$id1'";
    $query = mysqli_query($conn, $sql);
    $json_array;
    while($row = mysqli_fetch_array($query)){
    $image_url = $row['pic_name'];
   
      $response = array('src' => $image_url); 
        $json_array[] = $response;
    }
    echo json_encode($json_array);
}
?>