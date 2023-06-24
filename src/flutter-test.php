<?php
// Replace with your MySQL database details
$host = 'localhost';
$db = 'clickchat';
$user = 'root';
$password = '';

$conn = mysqli_connect($host, $user, $password, $db);

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  exit();
}

// Retrieve the username and password from the POST request
$username = $_POST['username'];
$password = $_POST['password'];
$eml = $pwd = "";
// Prepare and execute the SQL query
$qry = "select * from user where eml ='$username' and pwd='$password'";
$result = mysqli_query($conn, $qry) or die(mysqli_error($conn));
$num_rows = mysqli_num_rows($result);
if($num_rows > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            echo json_encode($row);
        }
    }

mysqli_close($conn);
?>