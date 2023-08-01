
<?php 
require_once('auth.php');
require_once('db-connect.php');
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    extract($_POST);
    $stmt = $conn->prepare("SELECT * FROM `users` where `email` = ?");
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $result = $stmt->get_result();
    if($result->num_rows > 0){
        $data = $result->fetch_assoc();
        if(password_verify($password, $data['password'])){
            foreach($data as $k => $v){
                if($k != 'password'){
                    $_SESSION[$k] = $v;
                }
            }
            $_SESSION['msg']['success'] = "You have login successfully.";
            header('location: ./');
            exit;
        }else{
            $error = "Incorrect Email or Password";
        }
    }else{
        $error = "Incorrect Email or Password";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<?php include_once('header.php') ?>
<body>
    
    <hr id="title_hr" class="mx-auto">
    <div id="login-wrapper">
       
        <?php if(isset($error) && !empty($error)): ?>
            <div class="message-error"><?= $error ?></div>
        <?php endif; ?>
        <?php if(isset($_SESSION['msg']['success']) && !empty($_SESSION['msg']['success'])): ?>
        <div class="message-success">
            <?php 
            echo $_SESSION['msg']['success'];
            unset($_SESSION['msg']);
            ?>
        </div>  
        <?php endif; ?>
        
    </div>
</body>
</html>