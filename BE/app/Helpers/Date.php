<?php

function convert_date_php_to_javascript($date)
{
    return strtotime($date) * 1000;
}

function convert_date_javascript_to_php($date, $format = "Y-m-d H:i:s")
{
    return date($format, $date / 1000);
}
