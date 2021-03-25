<?php if (isset($_SESSION['message'])) { ?>
    <div class="alert alert-danger" role="alert">
        <?php
        echo $_SESSION['message'];
        unset($_SESSION['message']);
        ?>
    </div>
<?php } ?>