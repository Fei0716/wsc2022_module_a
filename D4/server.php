<?php

if($_SERVER["REQUEST_METHOD"] === "GET"){
    $data = file_get_contents("./data.json" );
    $arr = json_decode($data , true);
    $currentPage = $_GET["currentPage"];
    $result = [];
    $init = ($currentPage * 10);
    for($i = ($currentPage * 10); $i < ($init + 10); $i++){
        $result[] = $arr[$i];
    }

    header('Content-Type: application/json');
    echo json_encode($result);
}


?>