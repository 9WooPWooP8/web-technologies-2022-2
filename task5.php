<?php
$current_year = date("Y");
?>

<!DOCTYPE html>
<html lang="en">

<head>
	<title></title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="css/style.css" rel="stylesheet">
</head>

<body>
	<h1>
		<?php echo $current_year; ?>
		<?= $current_year ?>
		<?php printf("<p>%s</p>", $current_year); ?>
	</h1>
</body>

</html>
