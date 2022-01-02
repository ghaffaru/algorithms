<?php

function binary_search($arr, $val) {
    $start = 0;
    $end = count($arr) - 1;
    $middle = floor(($start + $end) / 2);

    while ($arr[$middle] != $val && $start <= $end) {
        if ($val < $arr[$middle]) {
            $end = $middle - 1;
        } else {
            $start = $middle + 1;
        }
        $middle = floor(($start + $end)  / 2);
    }

    if ($arr[$middle] == $val) return $middle;
    else return -1;
}

echo binary_search([2,5,6,9,13,15,30], 5);