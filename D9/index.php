<?php
    if (isset($_GET['numbers'])) {
        // Trim the input and explode by comma (or another delimiter if used)
        $numbers = trim($_GET['numbers']);
        //dont use single quote you single lonely guy
        $numbers = explode("\n", $numbers);
        $evens = [];
        foreach ($numbers  as $key=>$no){
            if((int)$no % 2 === 0 && is_numeric((int)$no / 2  ) ){
                $evens[] = $no;
            }
        }
    }

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="#">
    <textarea name="numbers" id="numbers">
        <?php
            if(isset($evens) && $evens){
                foreach ($evens as $n){
                    echo $n ."\n";
                }
            }
        ?>
    </textarea>
    <button type="submit">Submit</button>
</form>

</body>
</html>
