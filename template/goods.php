<h2>Товары</h2>

<div>
	<?php foreach ($goods as $good) : ?>
		<div>
			<a href="/good/?id=<?= $good['id'] ?>">
				<h2><?= $good['name'] ?></h2>
				<img src="/img/<?= $good['image'] ?>" alt="<?= $good['image'] ?>">
			</a>
			<p>Цена: <?= $good['price'] ?></p>
			<hr>
		</div>
	<?php endforeach; ?>
</div>
