<?php
$servidor = 'localhost' ;
$user = 'root';
$senha = '';
$db = 'agenda1_js';

$conexao = new mysqli($servidor, $user, $senha, $db);

$dados = array(
    "id"=>"1",
    "nome"=>"Vinicius"
);

echo json_encode($dados);







?>