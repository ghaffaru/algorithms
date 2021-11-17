<?php

function anagram($str1, $str2) {

    if (strlen($str1) != strlen($str2)) {
        return 'NO';
    }
    $lookUp = (object)[];

    for ($i = 0; $i < strlen($str1); $i++) {
        $currentLetter = $str1[$i];
        isset($lookUp->$currentLetter) ? $lookUp->$currentLetter++ : $lookUp->$currentLetter = 1;
    }

    for ($i = 0; $i < strlen($str2); $i++) {
        $currentLetter = $str2[$i];
        if (!isset($lookUp->$currentLetter) ) {
    
            return 'NO';
        }
        else {
            $lookUp->$currentLetter--;
        }
    }
    return 'yes';
}

echo anagram('anagram', 'nagaram');