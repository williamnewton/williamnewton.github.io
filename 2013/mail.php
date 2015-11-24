<?php
    if($_POST){
        $to = 'williamnewbton@gmail.com';
        $subject = 'Contact Form Submission';
        $from_name = $_POST['name'];
        $from_email = $_POST['email'];
        $message = $_POST['message'];
        $robotest = $_POST['robotest'];
        if($robotest)
            $error = "You are a gutless robot.";
        else{
            if($from_name && $from_email && $message){
                $header = "From: $from_name <$from_email>";
                if(mail($to, $subject, $message, $header))
                    $success = "You are human and your message was sent!";
                else
                    $error = "You are human but there was a problem sending the e-mail.";
            }else
                $error = "<p style='font-size:48px; font-weight:bold; padding:48px; max-width:300px; margin:10px auto;
                letter-spacing:-3px;font-family:helvetica, sans-serif;text-transform:uppsercase;'>All fields are required. That's how I properly reply to you! Please go back and try again!</p><br /><p style='color:#333; font-size:12px; text-align:center;'>Yes, this is my first PHP script ever, and no, I haven't had time to implement client-side validation. Press the back button to retrieve your incomplete form.</p>";
        }
        if($error)
            echo '<div class="msg error">'.$error.'</div>';
        elseif($success)
            include("index.html");
    }
?>