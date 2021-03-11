
<?php


echo "echo hello world";
print "print hello world";

$varName = "this is my var";
echo $varName;

$varInt = 1;

var_dump($varInt);


// strings 

$varString = "string";
$varSentence = "this is a sentence";

strlen($varString);
str_word_count($varSentence);
strrev($varString);
strpos($varSentence, "is");
str_replace("this","it",$varSentence);

//numbers
$varNumber = 2;
$varNumString = "2";

is_int($varNumber);
is_float($varNumber);
$varNumber = (int) $varNumString;

abs($varNumber);
sqrt($varNumber);
$randomNumber = rand();
$doubleVar = 2.8;
round($doubleVar); 


// if/switch/for

if($condition) {

} else {

}

$list = ["1", "2", "3"];
$list = array("2","3");

for($i=0;$i<count($list);$i++) {

}

foreach($list as $num) {
    echo $num;
}

$listNumbs = [12,0,5,8];

sort($listNumbs);
rsort($listNumbs);

$list = array(
    "key1" => 12,
    "key2" => 15,
    "key3" => 8,
);

asort($list);
arsort($list);
ksort($list);
krsort($list);






?>