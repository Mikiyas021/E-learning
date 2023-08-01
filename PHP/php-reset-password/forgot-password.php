
<?php 
require_once('auth.php');
require_once('db-connect.php');
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    extract($_POST);
    $stmt = $conn->prepare("SELECT * FROM `account_list` where `Email` = ?");
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $result = $stmt->get_result();
    if($result->num_rows > 0){
        $data = $result->fetch_assoc();
        $email= $data['Email'];

        $subject = "Reset Password";
        $message = "";
        ob_start();
        include("reset_mail-template.php");
        $message = ob_get_clean();
        // echo $message;exit;
        $eol = "\r\n";
        // Mail Main Header
        $headers = "From: info@sample.com" . $eol;
        $headers .= "Reply-To: noreply@sample.com" . $eol;
        $headers .= "To: <{$email}>" . $eol;
        $headers .= "MIME-Version: 1.0" . $eol;
        $headers .= "Content-Type: text/html; charset=iso-8859-1" . $eol;
        try{
            mail($email, $subject, $message, $headers);
            $_SESSION['msg']['success'] = "We have sent you an email to reset your password.";
            header('location: login.php');
            exit;
        }catch(Exception $e){
            throw new ErrorException($e->getMessage());
            exit;
        }
        ?>
        <?php
    }else{
        $error = "Email is not registered.";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<?php include_once('header.php') ?>
<body>
    <h1 id="page-title" class="text-center">Forgot Password Page</h1>
    <hr id="title_hr" class="mx-auto">
    <div id="login-wrapper">
        <div class="text-muted"><small><em>Please Fill all the required fields</em></small></div>
        <?php if(isset($error) && !empty($error)): ?>
            <div class="message-error"><?= $error ?></div>
        <?php endif; ?>
        <form action="" method="POST">
            <div class="input-field">
                <label for="email" class="input-label">Email</label>
                <input type="email" id="email" name="email" value="<?= $_POST['email'] ?? "" ?>" required="required">
            </div>
            
            <button class="login-btn">Reset Password</button>
        </form>
    </div>
</body>
</html>