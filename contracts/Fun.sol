// SPDX-License-Identifier: SEE LICENSE IN LICENSE
// Copyright (c) 2019-2020, The Regents of the University of California (Regents)

pragma solidity 0.8.19;

contract Fun {
    uint public x = 125;

    constructor(){
    // x = _x
    }
    function changeX(uint _x) external {
        x = _x;
    }
}








