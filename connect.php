<?php

$name = $_POST['user-name'];
$phone = $_POST['user-phone'];
$email = $_POST['user-email'];
$id = null;
$emailMessage = 'Имя: ' .$name . "\n" . 'Телефон: ' . $phone . "\n" . 'Почта: ' . $email . "\n";

$host = 'localhost';
$dbname = 'a0737725_museum_users';
$username = 'a0737725_museum_users';
$password = '454655393Me';

mail('info@pervootkryvatel.ru', 'Оставлена новая заявка на сайте', $emailMessage);

$connection = mysqli_connect($host, $username, $password, $dbname);

if (mysqli_connect_errno()) {
    die('Connection error: ' . mysqli_connect_error());
}

$sql_request = 'INSERT INTO users (id, name, phone, email) VALUES (?, ?, ?, ?)';

$statement = mysqli_stmt_init($connection);

if (!mysqli_stmt_prepare($statement, $sql_request)) {
    die(mysqli_error($connection));
};

mysqli_stmt_bind_param($statement, 'ssss', $id, $name, $phone, $email);

mysqli_stmt_execute($statement);

?>