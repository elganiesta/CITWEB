<?php include('../db.php'); ?>

<?php 

//start a session
session_start();
//initialize variables

$firstName = '';
$lastName ='' ;
$email = '';
$password = '';
$passwordConf = '';
$rules = '';

if(isset($_POST['save_user'])) {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $passwordConf = $_POST['passwordConf'];
    // $rules = $_POST['rules'];

    // echo $_POST['rules'];

    if($rules != "1") {
        $_SESSION['message'] = 'You have to accept terms & conditions !';
    }

    if($password != $passwordConf) {
        $_SESSION['message'] = 'Password confirmation is uncorrect !';
    }

    $query = "SELECT * FROM users WHERE email='$email'";
    $results = mysqli_query($db, $query);

    if(mysqli_num_rows($results) == 1) {
        $_SESSION['message'] = "User already registred !";
    }

    if(count($erros) == 0) {
        $query = "INSERT INTO users (firstName, lastName, email, password)
        VALUES ('$firstName', '$lastName', '$email', '$password')";
        mysqli_query($db, $query);
        $_SESSION['message'] = "User saved !";
    }

    header('location: signin.php');
} 

if(isset($_POST['sign_user_in'])) {
    
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $results = mysqli_query($db, $query);

    if(mysqli_num_rows($results) == 0) {
        $_SESSION['message'] = "User not found !";
        header('location: signin.php');
    } else {
        $row = mysqli_fetch_array($results);
        $_SESSION['user_id'] = $row['id'];
        $_SESSION['user_email'] = $row['email'];
        header('location: ../home/home.php');
    }
}


?>