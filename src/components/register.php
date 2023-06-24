<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

include 'dbcon.inc';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Function to send OTP email
function sendOTPEmail($recipientEmail, $otp) {
  // Instantiating PHPMailer
  $mail = new PHPMailer(true);

  try {
      // SMTP configuration
      $mail->isSMTP();
      $mail->Host = 'smtp.gmail.com';
      $mail->SMTPAuth = true;
      $mail->Username = 'mcking090907@gmail.com'; // Replace with your Gmail email address
      $mail->Password = 'qqbqdgarmoytrnco'; // Replace with your Gmail password
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
      $mail->Port = 587;

      // Sender and recipient details
      $mail->setFrom('mcking090907@gmail.com', 'clickChat'); // Replace with your Gmail email address and your name
      $mail->addAddress($recipientEmail); // Recipient email address

      $mail->isHTML(true);
      $mail->Subject = 'Your OTP for clickchat registration'; // Email subject

      // Define the email body with a logo and stylish formatting
      $mail->Body = '
          <html>
          <head>
              <style>
                  /* CSS styles for the email body */
                  .container {
                      max-width: 600px;
                      margin: 0 auto;
                      padding: 20px;
                      background-color: #f5faff;
                      font-family: Arial, sans-serif;
                      color: #333333;
                      border: 2px solid #a6c9e2;
                      border-radius: 10px;
                      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
                  }
                  
                  .header {
                      background-color: #d6eaf8;
                      color: #333333;
                      padding: 10px;
                      text-align: center;
                      border-radius: 10px 10px 0 0;
                  }
                  
                  .logo {
                      display: block;
                      margin: 0 auto;
                      width: 150px;
                      height: auto;
                  }
                  
                  h2 {
                      text-align: center;
                      font-size: 32px;
                      color: #0088cc;
                      margin-top: 30px;
                      text-decoration: underline;
                  }
                  
                  .otp {
                      text-align: center;
                      font-size: 60px;
                      color: #ff007f;
                      margin-top: 40px;
                      letter-spacing: 8px;
                      text-shadow: 2px 2px #f5faff;
                  }
                  
                  .footer {
                      background-color: #d6eaf8;
                      padding: 10px;
                      text-align: center;
                      border-radius: 0 0 10px 10px;
                  }
                  
                  .footer p {
                      font-size: 14px;
                      color: #555555;
                      margin: 0;
                  }
              </style>
          </head>
          <body>
              <div class="container">
                  <div class="header">
                      <p><b>Clickchat has sent you an OTP</b></p>
                  </div>
                  <h2>Your One-Time Password (OTP)</h2>
                  <div class="otp">' . $otp . '</div>
                  <div class="footer">
                      <p>This email was sent by ClickChat. Please do not reply.</p>
                  </div>
              </div>
          </body>
          </html>
      ';

      // Send the email
      $mail->send();
      return true;
  } catch (Exception $e) {
      return false;
  }
}
function generateRandomNumber($min, $max) {
  return rand($min, $max);
}

$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);

$requiredFields = ['personalId', 'firstName', 'name', 'password', 'email', 'mobNo', 'countryCode', 'country', 'age', 'gender'];

foreach ($requiredFields as $field) {
  if (!isset($data[$field]) || empty($data[$field])) {
    die('0');
  }
}

$pid = $data['personalId'];
$fnm = $data['firstName'];
$lnm = $data['name'];
$pwd = $data['password'];
$eml = $data['email'];
$mob = $data['mobNo'];
$cc = $data['countryCode'];
$cty = $data['country'];
$age = $data['age'];
$gd = $data['gender'];

$sql = "INSERT INTO user (pid, fnm, lnm, pwd, eml, mob, cc, cty, age, gd) VALUES ('$pid', '$fnm', '$lnm', '$pwd', '$eml', '$mob', '$cc', '$cty', '$age', '$gd')";
$result = mysqli_query($conn, $sql) or die(mysqli_error($conn));

if ($result) {
  $otp = generateRandomNumber(100000,999999);
  sendOTPEmail($eml, $otp);
  echo '1';
} else {
  echo '0';
}
?>
