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
    $course = $_GET['id'];
	$react_class = $_POST['class'];
	date_default_timezone_set('Asia/Manila');
 
	if(ISSET($_FILES['video'])){
		$file_name = $_FILES['video']['name'];
		$file_temp = $_FILES['video']['tmp_name'];
		$file_size = $_FILES['video']['size'];
        $file_description = $_POST['describe'];
		if($file_size < 50000000){
			$file = explode('.', $file_name);
			$end = end($file);
			$allowed_ext = array('avi', 'flv', 'wmv', 'mov', 'mp4','.pdf');
			if(in_array($end, $allowed_ext)){
				$name = date("Ymd").time();
				$location = "my-app/src/Pages/Instructorpages./video/".$name.".".$end;
				$video = $name.".".$end;
				if(move_uploaded_file($file_temp, $location)){
					mysqli_query($conn, "INSERT INTO `video` VALUES('','$react_class','$course' ,'$name', '$video', '$file_description')") or die(mysqli_error());
					echo "Video Uploaded";
					
				}
			}else{

				echo "Wrong video format";
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