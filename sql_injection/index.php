<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SQL Injection</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <script src="/index.js"></script>
  <style>
    #magic { display: none; }
    #magic:target { display: block; }
  </style>
</head>
<body>
  <main class="container-sm my-3">
    <? if (isset($_GET['info'])): ?>
      <div class="alert alert-info" role="alert">
        <?= $_GET['info'] ?>
      </div>
    <? endif; ?>

    <? if (isset($_GET['error'])): ?>
      <div class="alert alert-danger" role="alert">
        <?= $_GET['error'] ?>
      </div>
    <? endif; ?>

    <div class="card">
      <div class="card-header">
        ♣登入♣
      </div>
      <form class="card-body" action="/login.php" method="POST">
        <div class="mb-3">
          <label for="user-id" class="form-label">User Id</label>
          <input type="text" class="form-control" id="user-id" name="user_id" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" name="password" />
        </div>
        <a type="button" href="#magic" class="btn btn-danger mb-3">來點魔法嗎？</a>
        <button type="submit" class="btn btn-primary mb-3 mx-2">登入</button>
      </form>
    </div>
    <div id="magic" class="card mt-3">
      <div class="card-header">
        🪄魔法🪄
      </div> 
      <div class="card-body">
        <p class="fs-3">SELECT name FROM users WHERE id = '<span id="__user-id" class="text-danger"></span>' AND password = '<span id="__password" class="text-danger"></span>';</p>
      </div>
    </div>
  </main>
</body>
</html>