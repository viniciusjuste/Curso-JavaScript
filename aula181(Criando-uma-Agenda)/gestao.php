<?php
$servidor = 'localhost' ;
$user = 'root';
$senha = '';
$db = 'agenda1_js';

$conexao = new mysqli($servidor, $user, $senha, $db);

$query = 'SELECT * FROM contato';
$res = mysqli_query($conexao, $query);
if(mysqli_num_rows($res) > 0){
    while($reg = mysqli_fetch_array($res)){
        $dados[] = array(
            "n_contato_contato " => $reg["n_contato_contato"],
            "s_nome_contato " => $reg["s_nome_contato"],
            "s_celular_contato " => $reg["s_celular_contato"],
            "s_email_contato " => $reg["s_email_contato"],
            "dt_dataNascimento_contato " => $reg["dt_dataNascimento_contato"]
        );
    }
} else{
    echo "Nenhum registro";
}

echo json_encode($dados);







?>