<?php

$array = array(
    "Тюменская область" => array("Тюмень", "Ялуторовск", "Калининград"),
    "Московская область" => array("Москва", "Зеленоград")
);

foreach ($array as $key => $value) 
{
  echo "<div>$key</div>";
  echo "<div>";
  foreach ($value as &$city) 
	{
		if (str_starts_with(mb_strtolower($city), "к"))
    	echo "$city, ";
  }
  echo "</div>";
}
