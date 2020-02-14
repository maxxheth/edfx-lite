<?php 

require_once __DIR__ . '/pdo-config.php';

$INCOMING_JSON = file_get_contents('php://input');

$_POST = json_decode($INCOMING_JSON, true);

$name = filter_var($_POST['name'], FILTER_SANITIZE_SPECIAL_CHARS);

$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

$budget = filter_var($_POST['budget'], FILTER_SANITIZE_STRING);

$message = filter_var($_POST['message'], FILTER_SANITIZE_SPECIAL_CHARS);

$dbPDO = new PDO($dsn, $user, $password, $options);

$dbPDOPrepStmt = $dbPDO->prepare("INSERT INTO edfx_client_project (name, email, budget, message) VALUES (:name, :email, :budget, :message)");

$dbPDOPrepStmt->bindParam(':name', $name, PDO::PARAM_STR);

$dbPDOPrepStmt->bindParam(':email', $email, PDO::PARAM_STR);

$dbPDOPrepStmt->bindParam(':budget', $subject, PDO::PARAM_STR);

$dbPDOPrepStmt->bindParam(':message', $message, PDO::PARAM_STR);

if ($dbPDOPrepStmt->execute()) {

    echo json_encode(["status" => "Message successfully sent!", "sentBool" => true]);

} else {

    echo json_encode(["status" => "Message not sent...", "sentBool" => false]);

}