<?php

$mysqli = new mysqli('db', 'root', 'password', 'ph-ctf');

if ($mysqli -> connect_errno) {
  echo '資料庫連線失敗了 QAQ，問問助教發生什麼事！';
  die();
}

$user_id = $_POST['user_id'];
$password = $_POST['password'];

$result = $mysqli -> query("SELECT name FROM users WHERE id = '$user_id' AND password = '$password';") -> fetch_row();


if (!$result) {
  header('Location: /?error=登入失敗', true, 301);
  exit();
} else {
  header('Location: /?info=登入成功: ' . $_ENV['FLAG'], true, 301);
  exit();
}

?>