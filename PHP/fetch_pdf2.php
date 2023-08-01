<?php

header('Access-Control-Allow-Origin: *');
header('content-type: multipart/form-data');
$servername = "localhost";
$username= "root";
$database = "project";
$password ="";

$conn = mysqli_connect($servername, $username,$password ,$database);
if(mysqli_connect_error())
{
    echo mysqli_connect_error();
}
else{ 
    if (isset($_FILES['file']))
    {
      $file_name = basename($_FILES['file']['name']);
      $file_tmp = $_FILES['file']['tmp_name'];

      move_uploaded_file($file_tmp,"./pdf/".$file_name);

      $insertquery =
      "INSERT INTO pdf_data(filename) VALUES('$file_name')";
      $iquery = mysqli_query($conn, $insertquery);
      if($iquery){
        echo "successfully uploaded!";
      }
    }
    else
    {
echo "not uploaded!";
    }
}
?>