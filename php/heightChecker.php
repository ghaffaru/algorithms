<?php

function heightChecker($heights){

    $expected = [...$heights];

    sort($expected);

    $notMatchCount = 0;

    for ($i= 0; $i < count($expected); $i++) {
        if ($expected[$i] !== $heights[$i]) $notMatchCount++;
    }

    return $notMatchCount;
}

print_r(heightChecker([1,1,4,2,1,3]));