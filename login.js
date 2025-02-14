document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Mencegah reload halaman

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("login.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            throw new Error("Gagal mengambil data JSON");
        }
        
        const data = await response.json();
        
        if (data.success) {
            alert("Login berhasil!");
            localStorage.setItem("username", username); // Simpan username
            window.location.replace("index.html"); // Redirect ke halaman utama dengan refresh
        } else {
            alert("Username atau password salah!");
        }
    } catch (error) {
        console.error("Error saat login:", error);
        alert("Terjadi kesalahan saat login, coba lagi.");
    }
});
