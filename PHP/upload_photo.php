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
	date_default_timezone_set('Asia/Manila');
	if(ISSET($_FILES['photo'])){
		$file_name = $_FILES['photo']['name'];
		$file_temp = $_FILES['photo']['tmp_name'];
		$file_size = $_FILES['photo']['size'];
		if($file_size < 50000000){
			$file = explode('.', $file_name);
			$end = end($file);
			$allowed_ext = array('jpg', 'png');
			if(in_array($end, $allowed_ext)){
				$name = date("Ymd").time();
				$location = "my-app/src/Pages/Instructorpages./video/".$name.".".$end;
				$photo = $name.".".$end;
				if(move_uploaded_file($file_temp, $location)){
					$check = "SELECT Teacher_id, pic_name FROM profile_pic where Teacher_id = '$id1'";
					$check_query = mysqli_query($conn, $check);
					if(mysqli_num_rows($check_query) < 1){
					mysqli_query($conn, "INSERT INTO `profile_pic` VALUES('$id1', '$photo')") or die(mysqli_error());
					echo "Image Uploaded";
					}
					else{
						mysqli_query($conn, "UPDATE profile_pic SET pic_name = '$photo' where Teacher_id = '$id1'");
					echo "Image Uploaded";
					}
				}
			}else{

				echo "Wrong Image format";
			}
		}else{
			echo "File too large to upload";
		
		}
	}
		else{
               echo "File not selected!";
		}
	}
    
?>