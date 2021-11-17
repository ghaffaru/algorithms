<?php

function usingLoop($arr1, $arr2) {
    $status = false;

    for ($i = 0; $i < count($arr1); $i++) {
        if (count(array_filter($arr2,function($element) use ($arr1, $i) {
            return $element == $arr1[$i] ** 2;
        }))>0){
            $status= true;
        }
    }

    return $status;
}

echo usingLoop([1,2,3], [3,3,2]);