<?php

function disapperedNums($nums) {
    $disappearedNums = [];

    for ($i = 1; $i <= count($nums); $i++) {
        if (!array_search($i,$nums)) array_push($disappearedNums,$i);
    }

    return $disappearedNums;
}

print_r(disapperedNums([4,3,2,7,8,2,3,1]));