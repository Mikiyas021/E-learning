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
        
          $id1 = $_GET['id1'];
          $id2 = $_GET['id2'];
          $id3 = $_GET['id3'];
          $date = date("Ymd");
          $check_assignemnt = "SELECT Toclass, Course_name FROM pdf_data where Toclass = '$id2' && Course_name = '$id3'";
          $check_assignemnt_query= mysqli_query($conn, $check_assignemnt);
          if(mysqli_num_rows($check_assignemnt_query) !== 0){
          if(move_uploaded_file($file_tmp,"my-app/src/Pages/Instructorpages./video/".$file_name)){
				   $location = "./pdf/".$file_name;
          $insertquery =
          "INSERT INTO student_assignment(ID,Student_id,filename,Class_name,Course_name,Submitted_date) VALUES('','$id1', '$file_name','$id2', '$id3','$date')";
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
            echo "You have given no assignment!";
          }
      }
      else{
        echo "file not moved!";
      }
    }
?>