<?php include('../db.php'); ?>
<?php include('../auth/authController.php'); ?>
<?php 



$title = "";
$body = "";

if(isset($_POST['save_blog'])) {
    $title = $_POST['title'];
    $body = $_POST['body'];
    $user_id = $_SESSION['user_id'];

    if(empty($title) || empty($body)) {
        $_SESSION['message'] = "Empty";
        header('location: add_blog.php');
    } else {
        $query = "INSERT INTO blogs (user_id, title, body)
        VALUES ($user_id, '$title', '$body')";
        mysqli_query($db, $query);
        header('location: home.php');
    }
}



?>