<?php
// Allow requests from http://localhost:3000
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

require_once('db_connection.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $name = $_POST['name'];
    $firma = $_POST['firma'];
    $pin = $_POST['pin'];
    $datum = date('Y-m-d H:i:s');

    $sql = "INSERT INTO users (name, firma, pin, datum) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ssss', $name, $firma, $pin, $datum);

    if($stmt->execute()) {
        echo json_encode([
            'message' => 'Erfolgreich',
            'success' => true
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Fehlgeschlagen'
        ]);
    }
    $stmt->close();
    $conn->close();
}

?>