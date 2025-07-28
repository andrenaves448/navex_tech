<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars(trim($_POST["nome"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $mensagem = htmlspecialchars(trim($_POST["mensagem"]));

    $para = "andrenaves448@gmail.com"; // <- seu e-mail de destino
    $assunto = "Novo contato via site";

    $corpo = "Nome: $nome\n";
    $corpo .= "E-mail: $email\n";
    $corpo .= "Mensagem:\n$mensagem\n";

    $cabecalhos = "From: Navex Tech <navextech@navextech.com.br>\r\n";
    $cabecalhos .= "Reply-To: $email\r\n";
    $cabecalhos .= "Return-Path: navextech@navextech.com.br\r\n";
    $cabecalhos .= "MIME-Version: 1.0\r\n";
    $cabecalhos .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($para, $assunto, $corpo, $cabecalhos)) {
        header("Location: obrigado");
        exit;
    } else {
        echo "Erro ao enviar. Tente novamente mais tarde.";
    }
} else {
    echo "Acesso inválido.";
}
?>
