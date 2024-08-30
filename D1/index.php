<?php
// Open the CSV files
$actualFile = fopen("./actualAnswers.csv", "r");
$submittedFile = fopen("./submittedAnswers.csv", "r"); // Ensure you use the correct file for submitted answers

// Initialize arrays to store answers
$actualAnswers = [];
$submittedAnswers = [];

// Read the actual answers
while (($data = fgetcsv($actualFile)) !== FALSE) {
    $actualAnswers[] = $data;
}

// Read the submitted answers
while (($data = fgetcsv($submittedFile)) !== FALSE) {
    $submittedAnswers[] = $data;
}

// Close the files
fclose($actualFile);
fclose($submittedFile);

// Initialize the counter for correct answers
$correctCounter = 0;
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
    <table>
        <tr>
            <th>Question</th>
            <th>Actual Answer</th>
            <th>Submitted Answer</th>
        </tr>
        <?php
            for($i = 0, $iMax = count($submittedAnswers); $i < $iMax;$i++):
            if($actualAnswers[$i] === $submittedAnswers[$i]):
                $correctCounter++;
        ?>
            <tr>
                <td><?= $i + 1?></td>
                <td><?= $actualAnswers[$i][0]?></td>
                <td><?= $submittedAnswers[$i][0]?></td>
            </tr>
        <?php endif; endfor;?>
    </table>

    <div>
        Score: <?= $correctCounter?> / <?= count($submittedAnswers)?>
    </div>

</body>
</html>
