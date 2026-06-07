<?php
$name=filter_input(INPUT_POST,'name',FILTER_SANITIZE_SPECIAL_CHARS);
$email=filter_input(INPUT_POST,'email',FILTER_VALIDATE_EMAIL);
$message=filter_input(INPUT_POST,'message',FILTER_SANITIZE_SPECIAL_CHARS);
$to='support@webstackit.com';
$subject='New WebStackIT Inquiry';
$body="Name: $name\nEmail: $email\n\n$message";
$headers="From: $email";
mail($to,$subject,$body,$headers);
echo "Thank you for contacting WebStackIT.";
?>