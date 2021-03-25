<?php include('./blogsController.php'); ?>
<?php include('../db.php'); ?>
<?php include('../layout.php'); ?>

<body style="padding: 5rem;">

    <nav class="nav-bar ">
        <a href="">Home</a>
        <a href="">My blogs</a>
        <a href="./add_blog.php">Add blog</a>
        <a href="">Log out</a>
    </nav>
    <section id="home">
        <h1>My Blogs</h1>
        <?php 
            $user_id = $_SESSION['user_id'];
            $query = "SELECT * FROM blogs JOIN users ON blogs.user_id=users.id WHERE blogs.user_id=$user_id";
            $results = mysqli_query($db, $query);
        ?>

        <ul>
            <?php while($row = mysqli_fetch_array($results)) { ?>
                <li>
                    <h6><?php echo $row['title'] ?></h6>
                    <p><?php echo $row['body'] ?></p>
                </li>
            <?php } ?>
            
        </ul>

    </section>
</body>

</html>