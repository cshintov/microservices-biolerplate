<?php


$routes = array();

$routes['/patient/basic'] = array(
    "GET" => array(
        "method" => "patient",
        "info" => "Get the patient basic info",
        "version" => "1.0"
    ),

    "POST" => array(
        "method" => "patient/graphQL",
        "info" => "Get the patient basic info",
        "version" => "1.0"
    ),
 
    //"auth" => true,
);