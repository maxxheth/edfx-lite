<?php

error_reporting('E_ALL');

ini_set('display_errors', true);

require_once __DIR__ . '/pdo-config.php';

$POST = file_get_contents('php://input');

// print_r($POST);

$formData = json_decode($POST, true);

// print_r($formData);

$name = filter_var($formData['name'], FILTER_SANITIZE_STRING |  FILTER_SANITIZE_SPECIAL_CHARS );

$email = filter_var($formData['email'], FILTER_SANITIZE_EMAIL );

$subject = filter_var($formData['subject'], FILTER_SANITIZE_STRING | FILTER_SANITIZE_SPECIAL_CHARS );

$message = filter_var($formData['message'], FILTER_SANITIZE_STRING | FILTER_SANITIZE_SPECIAL_CHARS );

$testFormData = [

    'name' => $name,
    'email' => $email,
    'subject' => $subject,
    'message' => $message

];

// print_r(json_encode($testFormData));

// $dsn = 'mysql:dbname=edfx;host=localhost';

// $user = 'maxxheth';

// $password = 'whyQUIT!!11';

// $options = [
//     PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
//     PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
//     PDO::ATTR_EMULATE_PREPARES   => false,
// ];

$dbPDO = new PDO($dsn, $user, $password, $options);

$dbPDOPrepStmt = $dbPDO->prepare("INSERT INTO edfx_contact (name, email, subject, message) VALUES (:name, :email, :subject, :message)");

$dbPDOPrepStmt->bindParam(':name', $name, PDO::PARAM_STR);

$dbPDOPrepStmt->bindParam(':email', $email, PDO::PARAM_STR);

$dbPDOPrepStmt->bindParam(':subject', $subject, PDO::PARAM_STR);

$dbPDOPrepStmt->bindParam(':message', $message, PDO::PARAM_STR);

$dbPDOPrepStmt->execute();