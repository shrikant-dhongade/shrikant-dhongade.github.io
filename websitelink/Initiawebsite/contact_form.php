<?php 

require('../PHPMailer/PHPMailerAutoload.php');

$errors         = array();      // array to hold validation errors
$data           = array();      // array to pass back data

function nameLike($field, $min, $max, $required_error, $min_error, $max_error) {
	global $errors;
	if (!isset($_POST[$field]) || empty(trim($_POST[$field])) ) {
		$errors[$field] = $required_error;
		return false;
	} else {
		if(strlen($_POST[$field]) < $min) {
			$errors[$field] = $min_error;
			return false;
		} else if(strlen($_POST[$field]) > $max) {
			$errors[$field] = $max_error;
			return false;
		} else {
			return true;
		}
	}
	return false;
}

$name = ''; $email = ''; $message = '';

// ========== for test purposes
// $test = ['test' => 'you are here'];
// $test2 = ['test' => 'you are there'];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$test = nameLike('name', 3, 30, 'Please enter your name', 'Your name must consist of at least 3 characters', 'Maximum 30 letters are allowed');

	if (nameLike('name', 3, 30, 'Please enter your name', 'Your name must consist of at least 3 characters', 'Maximum 30 letters are allowed')) {
		$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
	}

	// if (nameLike('company', 2, 30, 'Please enter a company name', 'Your company must consist of at least 2 characters', 'Maximum 30 letters are allowed')) {
	// 	$company = filter_var($_POST['company'], FILTER_SANITIZE_STRING);
	// }

	if (!isset($_POST['email']) || empty(trim($_POST['email'])) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
		$errors['email'] = 'Please enter a valid email address';
	} else {
		$email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
	}

	// if (nameLike('contact_number', 3, 30, 'Please enter a contact number', 'Your contact number must consist of at least 6 characters', 'Maximum 16 letters are allowed')) {
	// 	$contact = filter_var($_POST['contact_number'], FILTER_SANITIZE_STRING);
	// }

	if (nameLike('message', 3, 30, 'Please enter a message', 'Your message must consist of at least 5 characters', 'Maximum 300 characters are allowed')) {
		$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
	}
} else {
	if (!isset($errors['generic'])) {
		$errors['generic'] = array();
	}
	array_push($errors['generic'], 'Invalid form submission');
}


// return a response ===========================================================
if ( !empty($errors) ) {
    $data['success'] = false;
	$data['errors']  = $errors;
} else {
	$body 	= '<table border="1" cellpadding="10" cellspacing="2" style="border-color:#ddd;">
					<tr><th bgcolor="#a0a0a0" colspan="2"><h4>New Query!</h4></th></tr>
					<tr><td>Name</td><td>' . $name . '</td></tr>
					<tr><td>Email ID</td><td>' . $email . '</td></tr>
					<tr><td>Message</td><td>' . $message . '</td></tr>
				</table>';

	$data['success'] = true;
	$data['message'] = 'Success!';
	$mail = new PHPMailer;
	//From email address and name
	$mail->From = "contact@initiadesigns.com";
	$mail->FromName = "Contact";
	//To address and name
	// $mail->addAddress("hrishikeshyjoshi@gmail.com"); //Recipient name is optional
	$mail->addAddress("pkarkal@mindagroup.com"); //Recipient name is optional
	$mail->addAddress("hraju@mindagroup.com"); //Recipient name is optional
	//Address to which recipient will reply
	$mail->addReplyTo("contact@initiadesigns.com", "Contact");
	//Send HTML or Plain Text email
	$mail->isHTML(true);
	$mail->Subject = "Contact/query";
	$mail->Body = $body;
	$mail->AltBody = "Please enable HTML view to preview this email.";

	if(!$mail->send()) {
		if (!isset($errors['generic'])) {
			$errors['generic'] = array();
		}
		array_push($errors['generic'], 'Email error. Please try again.');
	} else {
		$data['success'] = true;
    	$data['message'] = 'Success!';
	}
}
echo json_encode($data);