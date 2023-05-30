<?php if ($auth): ?>
Добро пожаловать <?=$name?>, <a href="/logout">[Выход]</a>
<?php else: ?>
<form action="/login" method="post">
    <input type="text" name="login">
    <input type="text" name="pass">
    save? <input type="checkbox" name="save">
    <input type="submit">
</form>
<?php endif; ?>

<a href="/">Главная</a>
<a href="/goods">Каталог</a>
<a href="/about">О нас</a>
<a href="/gallery">Галерея</a>
<a href="/news">Новости</a>
<a href="/apicatalog">api Test</a>
<a href="/feedback">Отзывы</a>
<br>
