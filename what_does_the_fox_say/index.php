<?php
isset($_GET['source']) && die(!show_source(__FILE__));

class Fox {
  public $name = 'Fox - ????';
  function __construct($name) {
    $this -> name = $name;
  }

  function __wakeup() {
    echo "<pre>";
    system("fortune | cowsay -f fox 'How are you? $this->name!'");
    echo "</pre>";
  }
}

if (!isset($_COOKIE['fox'])) {
  $fox = new Fox("Fox - " . rand(0, 0xffff));
  setcookie('fox', base64_encode(serialize($fox)));
}
?>

<!doctype html>
<html>
  <head>
    <title>What Does The Fox Say!</title>
    <link href="/index.css" rel="stylesheet" />
  </head>
  <body>
     <a href="?source">Source</a>
    <?php
      if (!isset($_COOKIE['fox'])) {
        echo "<h1>Now, your're $fox->name</h1>";
      } else {
        $fox = unserialize(base64_decode($_COOKIE['fox']));
      }
    ?>
   
  </body>
</html>