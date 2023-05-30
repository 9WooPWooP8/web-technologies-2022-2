<?php foreach ($gallery as $filename): ?>
    <a rel="gallery" class="photo" href="gallery_img/big/<?=$filename?>"><img src="gallery_img/small/<?=$filename?>" width="150" height="100" alt="img" /></a>
<?php endforeach; ?>