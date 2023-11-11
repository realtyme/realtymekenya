<?php
    if(!isset($_POST['submit']))
    {
        //This page should not be accessed directly. Need to submit the form.
        echo "error; you need to submit the form!";
    }

    $name = $_POST["name"];
    echo "Loaded! Yeah Bwoy!! " + $name;
?>