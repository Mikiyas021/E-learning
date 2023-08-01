
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
    
        if (isset($_FILES['file']))
        {
          $file_name = basename($_FILES['file']['name']);
          $file_tmp = $_FILES['file']['tmp_name'];
          $course = $_GET['id'];
          $react_class = $_POST['class'];
          $check_assignemnt = "SELECT Class_name, Course_name FROM course_outline where Class_name = '$react_class' && Course_name = '$course'";
          $check_assignemnt_query= mysqli_query($conn, $check_assignemnt);
          if(mysqli_num_rows($check_assignemnt_query) === 0){
          if(move_uploaded_file($file_tmp,"my-app/src/Pages/Instructorpages./video/".$file_name)){
				   $location = "./pdf/".$file_name;
          $insertquery =
          "INSERT INTO course_outline(filename,Class_name,Course_name) VALUES('$file_name','$react_class','$course')";
          $iquery = mysqli_query($conn, $insertquery);
          if($iquery){
            echo "Course outline successfully uploaded!";
          }
        
        }
        else
        {
    echo "not uploaded!";
        }
      }
      else{
          $sql =  "UPDATE course_outline SET filename = '$file_name' WHERE Class_name = '$react_class' && Course_name = '$course'";
          if(mysqli_query($conn, $sql)){ 
          echo "Course outline updated successfully!";
          }
          else{
            echo "Unable to update course outline!";
          }
      }
    }
      else{
        echo "file not moved!";
      }
    }
?>