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
$react_password = md5($react_password_original);
$react_email = $_POST['email'];
$react_ID = $_POST['ID'];
$react_firstname = $_POST['firstname'];
$react_lastname = $_POST['lastname'];
$react_password2 = $_POST['password2'];

}
$data = "select * from teacher_list where Teacher_id ='$react_ID'";
$query = mysqli_query($conn,$data);
$count = mysqli_num_rows($query);
if($count>0)
{
	$result = "SELECT teacher_id FROM Teacher_account where teacher_id ='$react_ID'";
	$res = mysqli_query($conn, $result);
	$result2 = "SELECT Username FROM Teacher_account where Username = '$react_username'";
	$res2 = mysqli_query($conn, $result2);
    if((mysqli_num_rows($res))>0)
	{
      echo "Instructor already registered!";
	}
	elseif (mysqli_num_rows($res2)>0) {
		echo "Username already exists!";
	}
	elseif($react_password_original !== $react_password2){
		echo "please confirm password";
	  }
	else{  
      $insert = "INSERT INTO Teacher_account(Teacher_id, First_name, Last_name, Email, Username, Password1)VALUES('$react_ID','$react_firstname', '$react_lastname', '$react_email', '$react_username', '$react_password');";
	  $insert_query = mysqli_query($conn, $insert);
	  $insert_pic = "INSERT INTO profile_pic(Teacher_id, pic_name)VALUES('$react_ID','download_teacher.png')";
	  $inert_pic_query= mysqli_query($conn,$insert_pic);

	   if($insert_query){
		echo "Account Created Successfully!";
	   }
	   else{
		 echo "Account is not created!";
	   }
	  }
}
else{
   echo "Your data is not found!";
}

$conn->close();

?>

