<?php

function prepareVariables($page, $action)
{
	$params = [];
	$layout = 'layout';

	$params['name'] = get_user();
	$params['auth'] = isAuth();

	switch ($page) {
		case 'login':
			$login = $_POST['login'];
			$pass = $_POST['pass'];

			if (auth($login, $pass)) {
				if (isset($_POST['save'])) {
					$hash = uniqid(rand(), true);
					$id = $_SESSION['id'];
					$sql = "UPDATE users SET hash = '{$hash}' WHERE id = {$id}";

					mysqli_query(getDb(), $sql);
					setcookie("hash", $hash, time() + 3600, "/");
				}
				header("Location: /");
				die();
			} else {
				die("Неверный логин или пароль");
			}
			break;
		case 'logout':
			setcookie("hash", "", time() - 1, "");
			session_regenerate_id();
			session_destroy();
			header("Location: /");
			die();
			break;
		case 'index':
			$params['title'] = 'Главная';
			break;
		case 'news':
			$params['news'] = getNews();
			break;
		case 'onenews':
			$id = (int)$_GET['id'];
			$params['news'] = getOneNews($id);
			break;
		case 'gallery':
			$layout = 'gallery';
			$params['gallery'] = getGallery(IMG_BIG);
			break;
		case 'goods':
			$params['title'] = 'Товары';
			$params['goods'] = getAllGoods();
			break;
		case 'good':
			$params['title'] = 'Товар';

			$parts = parse_url($_SERVER['REQUEST_URI']);
			parse_str($parts['query'], $url_params);

			$action_check = array_key_exists("action", $url_params);

			if ($action_check) {
				doGoodCommentAction($url_params['action'], $url_params);
			} else {
				$id = (int)$_GET['id'];
				$params['good'] = getGoodById($id);
				$params['comments'] = getGoodComments($id);
			}
			break;
		case 'about':
			$params['title'] = 'О нас';
			$params['phone'] = 34235245325;
			break;
		case 'feedback':
			doFeedbackAction($action);
			$params['feedback'] = getAllFeedback();
			break;
		case 'apicatalog':
			echo json_encode(getAllGoods(), JSON_UNESCAPED_UNICODE);
			die();
		default:
			echo '404';
			die();
	}

	return [
		'params' => $params,
		'layout' => $layout,
	];
}

