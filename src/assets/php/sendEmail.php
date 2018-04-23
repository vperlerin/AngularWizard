<?php

	// Import PHPMailer classes into the global namespace
	// These must be at the top of your script, not inside a function
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	//Load Composer's autoloader
	require 'vendor/autoload.php';

	$postdata = file_get_contents("php://input");
	$request  = json_decode($postdata, true);
 
	header('Content-type: application/json');
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
 
	$results = 0; 
	if(!empty($request)):
		foreach($request as $k=>$val):
			if(is_numeric($val)):
				 $results += intval($val);
			endif;
		endforeach;
	

		// Compute % (60pts = 100%)
		$results = number_format($results*100/60,0);

		$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
		try {
		    //Server settings
		    //$mail->SMTPDebug = 2;                                 // Enable verbose debug output
		    $mail->isSMTP();                                      // Set mailer to use SMTP
		    $mail->Host 			  = 'smtp.gmail.com';					// Specify main and backup SMTP servers
		    $mail->SMTPAuth 		= true;							// Enable SMTP authentication
		    $mail->Username 		= ''			// SMTP username
		    $mail->Password 		=  ''           		// SMTP password
		    $mail->SMTPSecure		= ' ';					// Enable TLS encryption, `ssl` also accepted
		    $mail->Port 			= 587;				// TCP port to connect to	

		    //Recipients
		    $mail->setFrom(' ', 'THE CHEATING TEST');
		    $mail->addAddress(' ', ' ');     // Add a recipient
		    $mail->addReplyTo(' ', 'NO REPLY');
		    
		    //Content
		    $mail->isHTML(true);                                  // Set email format to HTML
		    $mail->Subject = 'TheCheatingTest Results';
		    $mail->Body    =  'Hello ' . $request['fullName'] . ',<br><br>Based on your answers, our algorithm determined that you have  <strong>' . $results .'%</strong> chance that ' . $request['partnerFullName'] .'  is cheating on you.<br>Thank you<br/><a href="http://www.thecheatingtest.com">The Cheating Test</a>';
		    $mail->AltBody = 'Hello ' . $request['fullName'] . ',\nBased on your answers, our algorithm determined that you have  ' . $results .'% change that ' . $request['partnerFullName'] .'  is cheating on you.\nThank you\n http://www.thecheatingtest.com - The Cheating Test';

		    $mail->send();
		    $res = 'Message has been sent';
		} catch (Exception $e) {
		    $res = 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
		}

		echo json_encode($res);
	 endif;
?>



