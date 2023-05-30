<h2>Каталог</h2>

<div>
	<div>
		<h2><?= $good['name'] ?></h2>
		<img src="/img/<?= $good['image'] ?>" alt="<?= $good['image'] ?>">
		<p>Описание: <?= $good['description'] ?></o>
		<p>Цена: <?= $good['price'] ?></p>
		<hr />
		<h3>Отзывы</h3>
		<?php foreach ($comments as $comment) : ?>
			<p><?= $comment['comment'] ?></p>
			<a href="/good/?action=deleteComment&goodId=<?= $good['id'] ?>&commentId=<?= $comment['id'] ?>">Удалить</a>
			<hr />
		<?php endforeach; ?>
		<form action="/good/?action=addComment&goodId=<?= $good['id'] ?>" method="post">
			Оставить отзыв: <br>
			<input type="text" name="comment" placeholder="Ваш отзыв"><br>
			<input type="submit" value="Оставить">
		</form>
	</div>
</div>
