<?php

function clearNum($number)
{
    return str_replace('.', '', $number);
}

function myNum($num)
{

    if ($num != '') {
        return number_format($num, 0, '', '.');
    }
}
