const form = document.getElementById("feedbackForm");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const password = document.getElementById("password").value;

    const question = document.querySelector(
        'input[name="question"]:checked'
    ).value;

    const answer = document.getElementById("answer").value;

    const status = document.getElementById("status");


    if (!password || !answer) {
        status.innerText = "Заполните все поля.";
        return;
    }


    status.innerText = "Отправка...";


    try {

        const response = await fetch(
            "ТВОЙ_WORKER_URL",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    password: password,
                    question: question,
                    answer: answer
                })
            }
        );


        if (!response.ok) {
            throw new Error("Ошибка сервера");
        }


        status.innerText = "Форма успешно отправлена ✅";

        form.reset();


    } catch (error) {

        console.error(error);

        status.innerText = "Не удалось отправить форму ❌";
    }

});