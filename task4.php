<?php
function mathOperation($arg1, $arg2, $operation)
{
	switch ($operation) {
		case 'add':
			return $arg1 + $arg2;
			break;
		case 'subtract':
			return $arg1 - $arg2;
			break;
		case 'divide':
			return $arg1 / $arg2;
			break;
		case 'multiply':
			return $arg1 * $arg2;
			break;

		default:
			echo 'operation not found';
			break;
	}
}

echo mathOperation(1, 5, 'divide'), PHP_EOL;
echo mathOperation(1, 5, 'add'), PHP_EOL;
echo mathOperation(1, 5, 'subtract'), PHP_EOL;
echo mathOperation(1, 5, 'multiply'), PHP_EOL;

