<?php
function power($val, $pow)
{
	if ($pow == 1) {
		return $val;
	} elseif ($pow == 0) {
		return 1;
	} elseif ($pow == -1) {
		return 1 / $val;
	} elseif ($pow > 1) {
		return $val * power($val, $pow - 1);
	} elseif ($pow < -1) {
		return 1 / $val * power($val, $pow + 1);
	}
}

echo power(5, 2);
