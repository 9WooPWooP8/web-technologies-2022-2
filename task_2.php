<?php

$array = array(
    "Тюменская область" => array("Тюмень", "Ялуторовск"),
    "Московская область" => array("Москва", "Зеленоград")
);

foreach ($array as $key => $value) 
{
  echo "<div>$key</div>";
  echo "<div>";
  foreach ($value as &$city) 
  {
    echo "$city, ";
  }
  echo "</div>";
}
