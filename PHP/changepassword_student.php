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
$react_password_new = $_POST['password_new'];
$react_password_confirm = $_POST['password_confirm'];

$data = "SELECT Username FROM  account_list  WHERE Username = '$id1'";
$query1 = mysqli_query($conn, $data);
if($query1){
        $react_password_new = password_hash($react_password_new, PASSWORD_DEFAULT);
$query = "UPDATE account_list SET Password1 = '$react_password_new' where Username = '$id1'";
$query2 = mysqli_query($conn, $query);
if($query2){
  echo "Password Changed successfully!";
}

}



$conn->close();
}



?>