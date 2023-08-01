
<?php 
require_once('auth.php');
require_once('db-connect.php');
?>
<!DOCTYPE html>
<html lang="en">
<?php include_once('header.php') ?>
<body>
  <h1 id="page-title" class="text-center">Home Page</h1>
  <hr id="title_hr" class="mx-auto">
  <div id="profile-wrapper">
      <?php if(isset($_SESSION['msg']['success']) && !empty($_SESSION['msg']['success'])): ?>
      <div class="message-success">
        <?php 
          echo $_SESSION['msg']['success'];
          unset($_SESSION['msg']);
        ?>
      </div>  
      <?php endif; ?>
      <h2 class="text-center"><strong>Profile</strong></h2>
        <hr width="25px" style="margin: .35em auto">
      <br>
      <dl>
        <dt><strong>Fullname:</strong></dt>
        <dd><?= $_SESSION['fullname'] ?? "" ?></dd>
        <dt><strong>Contact No.:</strong></dt>
        <dd><?= $_SESSION['contact'] ?? "" ?></dd>
        <dt><strong>Email:</strong></dt>
        <dd><?= $_SESSION['email'] ?? "" ?></dd>
        <dt><strong>About:</strong></dt>
        <dd><?= $_SESSION['about'] ?? "" ?></dd>
      </dl>
      <a href="logout.php" class="logout-btn">Logout</a>
  </div>
</body>
</html>