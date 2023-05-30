<?php

define("DB_HOST", "localhost");
define("DB_PORT", "5432");
define("DB_NAME", "catalog");
define("DB_USER", "postgres");
define("DB_PASSWORD", "postgres");

function getDb() {
	$db = pg_connect("host=localhost port=5432 dbname=lesson21 user=postgres password=postgres");
	return $db;
}

function getAssocResult($sql) {
	$query = pg_query(getDb(), $sql);

	$array_result = pg_fetch_all($query);

	return $array_result;
}

function getOneResult($sql) {
	$query = pg_query(getDb(), $sql);
	$array_result = pg_fetch_assoc($query);
	return $array_result;
}

function executeSql($sql) {
    pg_query(getDb(), $sql);
}
