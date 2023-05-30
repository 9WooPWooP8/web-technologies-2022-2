<?php

function getAllFeedback() {
    $sql = "SELECT * FROM `feedback` ORDER BY id DESC";

    return getAssocResult($sql);
}

function addFeedback() {
    $sql = "INSERT INTO `feedback`(`name`, `feedback`) VALUES ('{$_POST['name']}','{$_POST['message']}')";

    executeSql($sql);
    header("Location: /feedback");
}

function doFeedbackAction($action) {
    if ($action === "add") {
        addFeedback();
    }
}