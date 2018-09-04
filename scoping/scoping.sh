#!/bin/bash

value=1

function print () {
    echo $value;
}

function func () {
    local value=2;
    print;
}

func # 2
