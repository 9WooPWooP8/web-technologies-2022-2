<?php
function getGallery($path)
{
	$files = array_diff(scandir($path), array('.', '..'));

	foreach ($files as $file) {
		$large_path = "./img/large";
		echo
		"<a href='$large_path/$file'>
					<img style='width:300px' src='$path/$file' />
				</a>";
	}
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
	<title></title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
	<div>
		<form action="uploadImage.php" method="post" enctype="multipart/form-data">
			Загрузка:
			<input type="file" name="image" id="image">
			<input type="submit" value="Отправить" name="submit">
		</form>
	</div>
	<div style="display:flex; column-gap:10px; flex-wrap: wrap">
		<?php
		$directory = "./img/small";
		$gallery = getGallery($directory);
		echo $gallery;
		?>
	</div>
</body>
</html>
