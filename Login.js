document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const notification = document.getElementById("notification");
    const notifText = document.getElementById("notifText");
    const closeNotif = document.getElementById("closeNotif");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const inputs = loginForm.querySelectorAll("input[type='text'], input[type='email'], input[type='password']");
        let isEmpty = false;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                isEmpty = true;
            }
        });

        if (isEmpty) {
            showNotification("⚠ Harap Isi Semua Kolom!", "error");
            return;
        }

        showNotification("✅ Login Berhasil! Mengalihkan...", "success");

        setTimeout(() => {
            window.location.href = "IdentitasDiri.html";
        }, 2000);
    });

    function showNotification(message, type) {
        notifText.innerHTML = message;
        notification.classList.add("show", type);
        
        setTimeout(() => {
            notification.classList.remove("show", type);
        }, 3000);
    }

    closeNotif.addEventListener("click", function () {
        notification.classList.remove("show", "error", "success");
    });
});