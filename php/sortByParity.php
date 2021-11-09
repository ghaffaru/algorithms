<?php

/*
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers
*/

function sortByParity($nums) {
    $numsLength = count($nums);

    // push evens
    for ($i = 0; $i < $numsLength; $i++) {
        if ($nums[$i] % 2 == 0) array_push($nums, $nums[$i]);
    }

    // push odds
    for ($i = 0; $i < $numsLength; $i++) {
        if ($nums[$i] % 2 == 1) array_push($nums, $nums[$i]);
    }

    // splice
    array_splice($nums, 0, $numsLength);
    return $nums;
}

print_r(sortByParity([3,1,2,4]));