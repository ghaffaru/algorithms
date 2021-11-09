<?php

function moveZeros($nums) {
    // initialize zero counts to 0
    $zeroCounts = 0;
    // get array length;
    $numsLength = count($nums);
    // loop and increments zeroCounts and add non zeros to the bottom
    for ($i = 0; $i < $numsLength; $i++) {
        if ($nums[$i] == 0) {
            $zeroCounts++;
        }else {
            array_push($nums,$nums[$i]);
        }
    }

    // splice from beginning to initial array length;
    array_splice($nums,0,$numsLength);

    // push back zeros
    while($zeroCounts > 0) {
        array_push($nums,0);
        $zeroCounts--;
    }

    return $nums;
    
}

print_r(moveZeros([0,1,0,3,12]));