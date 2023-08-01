<?php
 
header('Access-Control-Allow-Origin: *');
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$databasename = "project";

$conn = mysqli_connect($servername, $username, $password, $databasename);

if(mysqli_connect_error()){
	echo mysqli_connect_error();
}
else
{
    $react_username_check = $_POST['username'];
    $react_password_check = $_POST['passwordd'];
      /*Student*/
    $data = "SELECT Username,Password1 FROM  account_list WHERE Username= '$react_username_check'";
    $query = mysqli_query($conn, $data);
      /*Teacher*/
    $teacher = "SELECT Username,Password1 FROM  teacher_account WHERE Username= '$react_username_check'";
    $teacher_query = mysqli_query($conn, $teacher);
    if(mysqli_num_rows($query)>0){
    $row = mysqli_fetch_array($query);
    if($row)
    {
        $verify = password_verify($react_password_check, $row['Password1']);
        if($verify){
              
              $_SESSION["username"] = $row["Username"];
              $_SESSION["logged_in"] = true; 
              echo "true_student";
        }
       
    }
}
      

elseif(mysqli_num_rows($teacher_query)>0){
$row2 = mysqli_fetch_array($teacher_query);
if($row2)
{   
    
    if(password_verify($react_password_check,$row2['Password1']));
    {
        $verify =1;
    }
    
    if($verify ===1){
        
       
        $_SESSION["username"] = $row2["Username"];
        $_SESSION["logged_in"] = true; 
        echo "true_teacher";
    }
  
}

}
else{
    echo "Account doesn't exist";
}
}
?>