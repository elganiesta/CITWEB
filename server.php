<?php 

//start a session
session_start();

//connect to database
$db = mysqli_connect('localhost','root','','citWeb');

//initialize variables
$erros = array();

$firstName = '';
$lastName ='' ;
$email = '';
$password = '';
$passwordConf = '';
$rules = '';

if(isset($_POST['email'])) {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $passwordConf = $_POST['passwordConf'];
    // $rules = $_POST['rules'];

    if($password != $passwordConf) {
        array_push($erros, 'Password confirmation is uncorrect !');
    }

    $query = "SELECT * FROM users WHERE email='$email'";
    $results = mysqli_query($db, $query);

    if(mysqli_num_rows($results) == 1) {
        array_push($erros, 'User already registred !');
        $_SESSION['message'] = "User already registred !";
    }

    if(count($erros) == 0) {
        $query = "INSERT INTO users (firstName, lastName, email, password)
        VALUES ('$firstName', '$lastName', '$email', '$hashed_pass')";
        mysqli_query($db, $query);
        $_SESSION['message'] = "User saved !";
    }

    header('location: signup.php');
} 


if(isset($_GET['email'])) {
    $email = $_GET['email'];
    // $newEmail = $_GET['newEmail'];
    $query = "DELETE FROM users WHERE email='$email'";
    // $query = "UPDATE users SET email='$newEmail' WHERE email='$newEmail';
    mysqli_query($db, $query);
    $_SESSION['message'] = "User deleted !";
    header('location: signup.php');
}

?>