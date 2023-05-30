<?php
include $_SERVER['DOCUMENT_ROOT'] . "/../config/index.php";

$url_array = explode("/", $_SERVER['REQUEST_URI']);

$action = $url_array[2] ?? '';

if ($url_array[1] === "") {
    $page = 'index';
} else {
    $page = $url_array[1];
}

$variables = prepareVariables($page, $action);

echo render($page, $variables['params'], $variables['layout']);