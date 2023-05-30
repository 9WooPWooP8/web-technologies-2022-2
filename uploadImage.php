<?php
$large_img_dir = "./img/large/";
$small_img_dir = "./img/small/";

$large_file_path = $large_img_dir . basename($_FILES["image"]["name"]);
$small_file_path = $small_img_dir . basename($_FILES["image"]["name"]);

$image_file_type = strtolower(pathinfo($large_file_path, PATHINFO_EXTENSION));

$image_file_type_check = $image_file_type == "jpeg" || $image_file_type == "png" || $image_file_type == "jpg";
$imag_file_size_check = $_FILES["image"]["size"] <= 5000000;
$image_size = getimagesize($_FILES["image"]["tmp_name"]);

if (!(isset($_POST["submit"]) and $image_size and $imag_file_size_check and $image_file_type_check)) {
	echo "Картинка не может быть загружена.";
}

if (move_uploaded_file($_FILES["image"]["tmp_name"], $large_file_path)) {
	switch ($image_file_type) {
		case 'jpeg' || 'jpg':
			$image = imagecreatefromjpeg($large_file_path);
			$img = imagescale($image, 400, 400);
			imagejpeg($img, $small_file_path);
			break;
		case 'png':
			$image = imagecreatefrompng($large_file_path);
			$img = imagescale($image, 400, 400);
			imagepng($img, $small_file_path);
			break;
	}

	header("Location: http://localhost:4000/index.php");
	die();
} else {
	echo "Ошибка";
}
