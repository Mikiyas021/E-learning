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
        $query = "SELECT * FROM `pdf_data`";
        $result = mysqli_query($conn,$query);
          while($row = mysqli_fetch_assoc($result)){
          $pdf_file = $row['filename'];
         $path_file = $row['directory'];
      }
}
    ?>