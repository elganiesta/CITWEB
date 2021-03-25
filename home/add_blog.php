<?php include('./blogsController.php'); ?>
<?php include('../layout.php'); ?>

<body style="padding: 5rem;">
<nav class="nav-bar ">
        <a href="">Home</a>
        <a href="./my_blogs.php">My blogs</a>
        <a href="./add_blog.php">Add blog</a>
        <a href="">Log out</a>
    </nav>
    <h1>Add New Blog</h1>
    <?php include('../errors.php'); ?>
    <form action="./blogsController.php" method="POST">
        <input type="text" name="title" placeholder="Title">
        <input type="text" name="body" placeholder="Description">
        <input type="submit" name="save_blog" value="Submit">
    </form>
</body>

</html>