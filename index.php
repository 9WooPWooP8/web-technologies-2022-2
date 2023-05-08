<?php


function get_current_time()
{
	$current_hours = (int)date("h");
	$current_minutes = (int)date("m");

	$last_hour_digit = $current_hours % 10;
	$last_minute_digit = $current_minutes % 10;


	$hour_text = 'часов';
	$minute_text = 'минут';

	if ($current_hours > 9 and $current_hours < 21) {
		$hour_text = 'часов';
	} elseif ($last_hour_digit == 1) {
		$hour_text = 'час';
	} elseif ($last_hour_digit == 2 or $last_hour_digit == 3 or $last_hour_digit == 4) {
		$hour_text = 'часа';
	} else {
		$hour_text = 'часов';
	}

	if ($current_minutes > 9 and $current_minutes < 21) {
		$minute_text = 'минут';
	} elseif ($last_minute_digit == 1) {
		$minute_text = 'минута';
	} elseif ($last_minute_digit == 2 or $last_minute_digit == 3 or $last_minute_digit == 4) {
		$minute_text = 'минуты';
	} else {
		$minute_text = 'минут';
	}

	return "$current_hours $hour_text $current_minutes $minute_text";
}

$year = (int)date("Y");
$current_time = get_current_time();


$h1 = "
<h1>
current year: $year
current_time: $current_time
</h1>
";

$title = "
<title>
title
</title>
";


$page_base = "
<!DOCTYPE html>
<html lang='en'>
	<head>
		$title
		<meta charset='UTF-8'>
		<meta name='viewport' content='width=device-width, initial-scale=1'>
		<link href='css/style.css' rel='stylesheet'>
	</head>
<body>
	$h1
	</body>
</html>
";

/* echo "$current_hours $hour_text $current_minutes $minute_text"; */
echo $page_base;
