<?php

function thirdMax($nums) {

    //filter duplicates
    $newArr = [];
    foreach ($nums as $num ) {
        if (!array_search($num,$newArr)) array_push($newArr,$num);
    }

    // sort
    sort($newArr);

    if (count($newArr) >=3) {
        return array_splice($newArr,count($newArr) -3, count($newArr) -2)[0];
    } else if(count($newArr) == 2) {
        return $newArr[1];
    } else {
        return $newArr[0];
    }

}

print_r(thirdMax([3,2,1]));