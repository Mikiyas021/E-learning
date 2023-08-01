
<?php 
$email = $_POST["email"];
$pwd = $_POST["pwd"];

$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = mysqli_connect($servername, $username);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
else
echo "Connected successfully";
echo "<br>";
mysqli_select_db($conn, 'my_organization1');
$query = "INSERT INTO mytable(email,pwd) VALUES('$email', '$pwd')";
mysqli_query($conn,$query);
header('location:project.html');
?>
</html>