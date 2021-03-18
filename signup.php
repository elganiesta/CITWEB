<?php include('./server.php'); ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
</head>

<body class="d-flex justify-content-center align-items-center" style="min-height: 100vh; background-color: #3598DC;">

    <div style="width:30%; background-color: #FFFFFF;" class="p-4">
        <form action="./server.php" method="POST">
            <h1 class="fw-bold">Sign Up</h1>
            <p class="text-muted">Please fill in this form to create an account!</p>

            <?php if (isset($_SESSION['message'])) { ?>
                <div class="alert alert-primary" role="alert">
                    <?php
                    echo $_SESSION['message'];
                    unset($_SESSION['message']);
                    ?>
                </div>
            <?php } ?>
            <hr>
            <div class="d-flex">
                <input class="form-control my-2" type="text" name="firstName" placeholder="First Name">
                <input class="form-control my-2 ms-2" type="text" name="lastName" placeholder="Last Name">
            </div>
            <input class="form-control my-2" type="email" name="email" placeholder="Email">
            <input class="form-control my-2" type="password" name="password" placeholder="Password">
            <input class="form-control my-2" type="password" name="passwordConf" placeholder="Confirm password">
            <div class="d-flex align-items-center">
                <input type="checkbox" name="rules">
                <span class="ms-4">I accept the <span style="color:rgb(94, 94, 228)">Terms of Use</span> & <span style="color:rgb(94, 94, 228)">Privacy Policy</span></span>
            </div>
            <input class="btn btn-primary my-4" type="submit" value="Sign Up">

            <?php

            $query = "SELECT * FROM users";
            $result = mysqli_query($db, $query);

            while ($row = mysqli_fetch_array($result)) { ?>

                <div class="d-flex justify-content-between">
                <?php echo $row['email']; ?>
                <a href="./server.php?email=<?php echo $row['email'] ?>">
                    <input type="button" value="Delete">
                </a>
                </div>

            <?php
            }

            ?>


        </form>
    </div>








    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous">
    </script>
</body>

</html>