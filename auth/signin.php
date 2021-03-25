<?php include('./authController.php'); ?>

<?php include('../layout.php'); ?>

<body class="d-flex justify-content-center align-items-center" style="min-height: 100vh; background-color: #3598DC;">

    <div style="width:30%; background-color: #FFFFFF;" class="p-4">
        <form action="./authController.php" method="POST">
            <h1 class="fw-bold">Sign In</h1>
            <p class="text-muted">Please fill in this form to sign in !</p>

            <?php include('../errors.php'); ?>

            <hr>
            <input class="form-control my-2" type="email" name="email" placeholder="Email" required>
            <input class="form-control my-2" type="password" name="password" placeholder="Password" required>
            <input class="btn btn-primary my-4" type="submit" name="sign_user_in" value="Sign In">
                <br>
                <a href="./signup.php">You don't have an account ?</a>
        </form>
    </div>

</body>

</html>