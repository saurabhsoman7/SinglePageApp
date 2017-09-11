if($_GET['action'] == 'signup'){
    mysql_connect('localhost','YOUR DB USERNAME','YOUR DB PASSWORD');
    mysql_select_db('YOUR DATABASE THAT CONTAINS THE SIGNUPS TABLE');
    $username = mysql_real_escape_string($_POST['username']);
    $email = mysql_real_escape_string($_POST['emailid']);
    $password = mysql_real_escape_string($_POST['password']);

//////////////////////////validate and POST username
    if(empty($username)){
        $status = 'error';
        $message = 'You did not enter Your name';
    }

    else {
        $existingSignup = mysql_query("SELECT * FROM signups WHERE signup_username='$username'");
        if(mysql_num_rows($existingSignup) < 1){

            //database insert code

        }
        else {
            $status = 'error';
            $message = 'This username has already been registered!';
        }
    }

/////////////////////////validate and POST emailid
    if(empty($email)){
        $status = 'error';
        $message = 'You did not enter an email address!';
    }
    else if(!preg_match($emailRegex, $email)){ //validate email address - check if is a valid email address
        $status = 'error';
        $message = 'You have entered an invalid email address!';
    }
    else {
        $existingSignup = mysql_query("SELECT * FROM signups WHERE signup_email_address='$email'");
        if(mysql_num_rows($existingSignup) < 1){

            //database insert code

        }
        else {
            $status = 'error';
            $message = 'This email address has already been registered!';
        }
    }

    $insertSignup = mysql_query("INSERT INTO signups1 (signup_username, signup_email_address, signup_password) VALUES ('$username','$email','$password')");
    if($insertSignup){
        $status = 'success';
        $message = 'you have been signed up!';
    }
    else {
        $status = 'error';
        $message = 'Oops, there's been a technical error! You have not been signed up.';
    }

    $data = array(
        'status' => $status,
        'message' => $message
    );

    echo json_encode($data);
    
    exit;
}
