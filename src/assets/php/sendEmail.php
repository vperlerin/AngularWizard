<?php
	set_include_path('/public_html/TheCheatingTest/assets/php');

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;
 
	require './PHPMailer/PHPMailer/Exception.php';
	require './PHPMailer/PHPMailer/PHPMailer.php'; 
	require './PHPMailer/PHPMailer/SMTP.php';

	$postdata = file_get_contents("php://input");
	$request  = json_decode($postdata, true);

 
	 

	header('Content-type: application/json');
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
 
	//echo json_encode($request);
	

	$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
	try {
	    //Server settings
	    //$mail->SMTPDebug = 2;                                 // Enable verbose debug output
	    $mail->isSMTP();                                      // Set mailer to use SMTP
	    $mail->Host 			= 'smtp.gmail.com';					// Specify main and backup SMTP servers
	    $mail->SMTPAuth 		= true;							// Enable SMTP authentication
	    $mail->Username 		= 'noreply@castlecomm.com';					// SMTP username
	    $mail->Password 		= '1ancel011ancel01';             		// SMTP password
	    $mail->SMTPSecure		= 'tls';					// Enable TLS encryption, `ssl` also accepted
	    $mail->Port 			= 587;				// TCP port to connect to	

	    //Recipients
	    $mail->setFrom('noreply@castlecomm.com', 'THE CHEATING TEST');
	    $mail->addAddress('vperlerin@gmail.com', 'Vincent Perlerin');     // Add a recipient
	    $mail->addReplyTo('noreply@castlecomm.com', 'NO REPLY');
	    
	    //Content
	    $mail->isHTML(true);                                  // Set email format to HTML
	    $mail->Subject = 'TheCheatingTest Results';
	    $mail->Body    =  'Hello ' . $request['fullName'] . ',<br>' . $request['partnerFullName'] ' . is cheating... sorry.';
	    $mail->AltBody =  'Hello ' . $request['fullName'] . ', ' . $request['partnerFullName'] ' . is cheating... sorry.';

	    $mail->send();
	    $res = 'Message has been sent';
} catch (Exception $e) {
    $res = 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
}

echo json_encode($res);
	 
?>



