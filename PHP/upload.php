
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
          $describe = $_POST['description'];
          $course = $_GET['id'];
          $react_class = $_POST['class'];
          $date = $_POST['date'];
          if(move_uploaded_file($file_tmp,"my-app/src/Pages/Instructorpages./video/".$file_name)){
				   $location = "./pdf/".$file_name;
          $insertquery =
          "INSERT INTO pdf_data(description_,filename,Toclass,Course_name,Submission_date,directory) VALUES('$describe','$file_name','$react_class','$course','$date','$location' )";
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
      else{
        echo "file not moved!";
      }
    }
?>