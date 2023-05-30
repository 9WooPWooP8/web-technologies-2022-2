<?php

function getAllGoods()
{
	return getAssocResult("SELECT * FROM goods");
}

function getGoodComments($goodId)
{
	return getAssocResult("SELECT * FROM good_comments WHERE good_fk = $goodId");
}

function getGoodById($id)
{
	$result = getOneResult("SELECT * FROM goods WHERE id = $id");
	return $result;
}

function addGoodComment($goodId)
{
	$sql = "INSERT INTO good_comments (comment, good_fk) VALUES ('{$_POST['comment']}',$goodId)";

	executeSql($sql);
	header("Location: /good/?id=$goodId");
}

function deleteGoodComment($goodId, $commentId)
{
	$sql = "DELETE FROM good_comments WHERE id = $commentId";

	executeSql($sql);
	header("Location: /good/?id=$goodId");
}

function doGoodCommentAction($action, $params)
{
	if ($action === "addComment") {
		addGoodComment($params["goodId"]);
	}
	if ($action === "deleteComment") {
		deleteGoodComment($params["goodId"], $params["commentId"]);
	}
}
