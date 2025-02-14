document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value; // Pastikan ID sesuai
    const password = document.getElementById('password').value; // Pastikan ID sesuai

    fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Simpan username di Local Storage
            localStorage.setItem('username', username);
            // Redirect ke halaman utama
            window.location.href = data.redirect;
        } else {
            alert(data.message || 'Login gagal!');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan. Silakan coba lagi.');
    });
});
