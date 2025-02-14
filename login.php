<?php
header('Content-Type: application/json');

// Baca file data.json
$data = json_decode(file_get_contents('data.json'), true);
$input = json_decode(file_get_contents('php://input'), true);
$username = $input['username'];
$password = $input['password'];

$success = false;
$message = 'Username atau password salah';

// Cek kecocokan username dan password
foreach ($data['users'] as $user) {
    if ($user['username'] === $username && $user['password'] === $password) {
        $success = true;
        $message = 'Login berhasil!';
        break;
    }
}

echo json_encode(['success' => $success, 'message' => $message, 'redirect' => 'index.html']);
?>
