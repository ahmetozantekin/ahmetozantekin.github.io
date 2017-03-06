<?php

ob_start();

if ($_POST["NAME"] && $_POST["EMAIL"] && $_POST["MESSAGE"] ){

  $name = $_POST["NAME"];
  $eMail = $_POST["EMAIL"];
  $message1 = $_POST["MESSAGE"];

  }else{

    header("Location: ../error.html");

  }
  $messageTo = "ahmetozantekin@gmail.com";
  $subject = $name;
  $message2 = $message1;
  $header = "From:". $eMail ."\r\n";
  $retval = mail ($messageTo,$subject,$message2,$header);

  if( $retval == true ) {
     ?><script>alert("Gönderildi.");</script><?php
  } else {
     echo "Message could not be sent...";
  }

?>
