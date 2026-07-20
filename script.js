const btn = document.getElementById("sendBtn");

btn.addEventListener("click", async () => {

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    if (!name || !message) {
        document.getElementById("status").innerText =
            "Заполни все поля";
        return;
    }


    await fetch("https://feedback-telegram.uali-zhunisbek.workers.dev", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            message: message
        })
    });


    document.getElementById("status").innerText =
        "Сообщение отправлено ✅";


    document.getElementById("name").value = "";
    document.getElementById("message").value = "";

});