<?php

function kyrillToLatin($string) 
{
  $array = array(
    "а" => "a","б" => "b","в" => "v","г" => "g","д" => "d","е" => "e",
    "ж" => "zh","з" => "z","и" => "i","й" => "y","к" => "k","л" => "i","м" => "m",
    "н" => "n","о" => "o","п" => "p","р" => "r","с" => "s","т" => "t","у" => "u",
    "ф" => "f","х" => "h","ц" => "ts","ч" => "ch","ш" => "sh","щ" => "sht","ъ" => "а",
    "ь" => "y","ю" => "yu","я" => "ya"
  );
  
  $res = "";
	foreach (str_split($string) as $char) {
    echo $char;
    echo $array[$char];
		$res += $array[$char];
  }
  return $res;
}

$word = kyrillToLatin("арбуз");
imagecreatefromjpeg()
echo $word;
