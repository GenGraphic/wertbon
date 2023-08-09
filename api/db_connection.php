<?php

    $servername = "localhost";
    $username = "u327528495_admin";
    $password = "Qswaefrd1324";
    $database = "u327528495_userList";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if($conn->connect_error) {
        die("Connection failer" . $conn->connect_error);
    }
?>