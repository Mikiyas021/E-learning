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
$react_choice = $_POST['radio'];
$query = "INSERT INTO answer(answer) VALUES('$react_choice')";
$query1 = mysqli_query($conn, $query);
$data = "SELECT correct_answer FROM  correct_answer  WHERE 1 ";
$data1 = mysqli_query($conn, $data);
  while($row= mysqli_fetch_assoc($data1)){
if($react_choice === $row['correct_answer'])
{
     echo "Good job!";	
}
  else
  {
	echo "Incorrect answer!";

}
  }


$conn->close();
}
?>