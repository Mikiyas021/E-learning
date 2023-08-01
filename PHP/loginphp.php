<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
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
    
    $session_id = session_id();
    $new = json_decode(file_get_contents("php://input"));
     $react_username_check = $new->username;

     $react_password_check = $new->passwordd;
       /*Student*/
     $data = "SELECT * FROM  account_list WHERE Username= '$react_username_check'";
   
     $query = mysqli_query($conn, $data);
       /*Teacher*/
     $teacher = "SELECT * FROM  teacher_account WHERE Username= '$react_username_check'";
     $teacher_query = mysqli_query($conn, $teacher);
     /*admin*/
     $admin = "SELECT * FROM  roletable WHERE Username= '$react_username_check'";
     $admin_query = mysqli_query($conn, $admin);
     /*DH*/
     $DH = "SELECT * FROM  Dhtable WHERE Username= '$react_username_check'";
     $DH_query = mysqli_query($conn, $DH);
    
     if(mysqli_num_rows($query)>0){
     $row = mysqli_fetch_array($query);
     if($row)
     {
         $verify = password_verify($react_password_check, $row['Password1']);
         if($verify){
            
                http_response_code(200);
                
            $outp ="";
              
            $outp .='{"username":"' .$row["Username"].'",';
                $outp .=  '"ID":"' .$row["ID"].'",';
                $outp .=  '"Class_name":"' .$row["Class_name"].'",';
                $outp .= '"status":"200",';
                $outp .= '"role":"student",';
                $outp .=  '"session_id":"' .$session_id.'",';
                $outp .=  '"activeinactive":"' .$row["Status"].'",';
                $outp .=  '"First_name":"' .$row["First_name"].'",';
                $outp .=  '"Last_name":"' .$row["Last_name"].'"}';
                
                echo $outp;
                
         }
     }
     
 }
       
 else if(mysqli_num_rows($teacher_query)>0){
 $row2 = mysqli_fetch_array($teacher_query);
 if($row2)
 {
    $verify2 = password_verify($react_password_check,$row2["Password1"]);
    if(md5($react_password_check) === $row2['Password1']){
        http_response_code(200);
    $outp ="";
      
    $outp .='{"username":"' .$row2["Username"].'",';
        $outp .=  '"ID":"' .$row2["Teacher_id"].'",';
        $outp .= '"status":"200",';
        $outp .= '"rolee":"200",';
        $outp .= '"role":"teacher",';
        $outp .=  '"session_id":"' .$session_id.'",';
        $outp .=  '"activeinactive":"' .$row2["Status"].'",';
        $outp .=  '"First_name":"' .$row2["First_name"].'",';
        $outp .=  '"Last_name":"' .$row2["Last_name"].'"}';
        
        echo $outp;

 }
 
}
 }
 else if(mysqli_num_rows($admin_query)>0){
    $row2 = mysqli_fetch_array($admin_query);
    if($row2)
    { 
        if($react_password_check === $row2['password']){
           http_response_code(200);
       $outp ="";
         
       $outp .='{"username":"' .$row2["username"].'",';
           $outp .= '"status":"200",';
           $outp .=  '"session_id":"' .$session_id.'",';
           $outp .= '"role":"admin"}';
           
           
           echo $outp;
   
       }
    
   }
    }
    else if(mysqli_num_rows($DH_query)>0){
        $row2 = mysqli_fetch_array($DH_query);
        if($row2)
        { 
            if($react_password_check === $row2['password']){
               http_response_code(200);
           $outp ="";
             
           $outp .='{"username":"' .$row2["username"].'",';
                $outp .=  '"Faculity_name":"' .$row2["Faculity_name"].'",';
               $outp .= '"status":"200",';
               $outp .=  '"session_id":"' .$session_id.'",';
               $outp .= '"role":"DH"}';
               
               echo $outp;
       
           }
        
       }
        }
 else{
     http_response_code(202);
     
 }

 }
 
 ?>
