<?php

function linearSearch($arr, $val) {
    for ($i = 0; $i < count($arr); $i++) {
        if ($arr[$i] == $val) {
            return $i;
        }
    }

    return -1;
}

echo linearSearch([2,4,5,6], 19);