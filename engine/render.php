<?php
function render($page, $params = [], $layout = 'layout') {
    return renderTemplate(LAYOUTS_DIR . $layout, [
        'menu' => renderTemplate('menu', $params),
        'content' => renderTemplate($page, $params),
    ]);
}

function renderTemplate($page, $params = []) {
    ob_start();

    if (!is_null($params)){
        extract($params);
    }

    $filename = TEMPLATE_DIR . $page . ".php";

    if (file_exists($filename)) {
        include $filename;
    } else {
        die("Страницы {$page} не существует");
    }

    return ob_get_clean();
}