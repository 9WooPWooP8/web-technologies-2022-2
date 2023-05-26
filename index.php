<?php
define("DB_HOST", "localhost");
define("DB_PORT", "5432");
define("DB_USER", "postgres");
define("DB_PASSWORD", "postgres");
define("DB_NAME", "php_lab20");

function getDb()
{
	$db = pg_connect("host=localhost port=5432 dbname=php_lab20 user=postgres password=postgres");
	return $db;
}

function getFileTreeResult()
{
	$sql = " SELECT * FROM file_tree";
	$result = pg_query(getDb(), $sql);

	$array_result = pg_fetch_all($result);

	return $array_result;
}

function render_catalog($elements, $parent)
{
	foreach ($elements as $item) {
		if ($item["parent_node"] == $parent) {
			echo '<div class="list-item list-item_open" data-parent>';
			echo '<div class="list-item__inner">';
			echo '<img class="list-item__arrow" src="img/chevron-down.png" alt="chevron-down" data-open>';
			echo '<img class="list-item__folder" src="img/folder.png" alt="folder">';
			echo '<div>' . $item["value"] . '</div>';
			echo '</div>';
			echo '<div class="list-item__items">';
			render_catalog($elements, $item["id"]);
			echo '</div>';
			echo '</div>';
		}
	}
}

?>

<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>List Item</title>
	<link rel="stylesheet" href="style.css">
</head>

<body>
	<div class="list-items" id="list-items">
		<?php echo (render_catalog(getFileTreeResult(), null)); ?>
	</div>
	<script type="module" src="script.js"></script>
</body>

</html>
