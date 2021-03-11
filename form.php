
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="form.php" method="POST">
        <label for="email">Email* :</label>
        <input type="text" name="email" value="<?php echo $_POST["email"] ?>">
        <?php 
          if(empty($_POST["email"])) {
              echo "<br>Email required";
          } 
        ?>
        <br>
        <label for="password">Password* :</label>
        <input type="password" name="password" value="<?php echo $_POST["password"] ?>">
        <?php 
          if(empty($_POST["password"])) {
              echo "<br>Password required";
          } 
        ?>
        <br>
        <input type="submit" value="Login">
    </form>


    <h1>Resultat</h1>
    <?php 

    $email = $password = "";
    $email = $_POST["email"];
    $password = $_POST["password"];
    
    if(empty($email) || empty($password)) {
        echo "3mer lya form";
    } elseif(strlen($password) < 8) {
        echo "password d3if";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
      } else {
        echo $email;
        echo "<br>";
        echo $password;
    }


    $list = ["1", "2", "3"];

    foreach($list as $string) {
        echo $string;
    }

    
    ?>

</body>
</html>