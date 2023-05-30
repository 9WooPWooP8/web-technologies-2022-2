<h2>Отзывы</h2>
<form action="/feedback/add" method="post">
    Оставить отзыв: <br>
    <input type="text" name="name" placeholder="Вашу имя"><br>
    <input type="text" name="message" placeholder="Ваш отзыв"><br>
    <input type="submit" value="Оставить">
</form>

<?php foreach ($feedback as $value): ?>
    <div>
        <strong><?=$value['name']?></strong>: <?=$value['feedback']?>
    </div>
<?php endforeach; ?>
