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

$react_username = $_POST['username'];
$react_password_original = $_POST['password'];
$react_password = password_hash($react_password_original, PASSWORD_DEFAULT);
$react_email = $_POST['email'];
$react_department = $_POST['department'];
$react_ID = $_POST['ID'];
$react_firstname = $_POST['firstname'];
$react_lastname = $_POST['lastname'];
$react_password2 = $_POST['password2'];
$react_class_id = $_POST['class_id'];

$check_student = "SELECT Student_id FROM allstudent WHERE Student_id = '$react_ID'";
$check_student_query = mysqli_query($conn, $check_student);
if(mysqli_num_rows($check_student_query)>0){
	$data = "SELECT username FROM  account_list  WHERE username = '$react_username'";
	$query1 = mysqli_query($conn, $data);
	$data2 = "SELECT ID FROM account_list WHERE ID = '$react_ID'";
	$data3 = mysqli_query($conn, $data2);
	if($query1)
	{
		
		  if(mysqli_num_rows($query1) >0)
		  {
			echo "username already exists";
		  }
		  
		elseif(mysqli_num_rows($data3)>0 ){
			echo "Student already registered!";
		  }
		 
		 elseif($react_password_original !== $react_password2){
			echo "please confirm password";
		  }
		 
		
	  else
	  {
			$query1 = "INSERT INTO account_list(ID,First_name, Last_name, Department,Class_name, Email, Username, Password1 ) VALUES('$react_ID','$react_firstname', '$react_lastname','$react_department', '$react_class_id','$react_email', '$react_username', '$react_password');";
			if(mysqli_query($conn, $query1))
			{
				echo "Account Created Successfully!";
			}
		}
	} 
}
else{
	echo "You are not member of ".$react_class_id;
}
}




$conn->close();

?>

