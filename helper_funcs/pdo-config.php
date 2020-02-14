<?php 

$dsn = 'mysql:dbname=edfx;host=localhost';

$user = 'maxxheth';

$password = 'whyQUIT!!11';

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];