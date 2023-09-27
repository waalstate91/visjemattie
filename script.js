document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("___username");
    const emailInput = document.getElementById("___email");
    const passwordInput = document.getElementById("___password");
    const captchaCheckbox = document.getElementById("___captcha");
    const submitButton = document.getElementById("___submit");

    // Voeg een eventlistener toe aan het captcha-vak om de knop te activeren
    captchaCheckbox.addEventListener("change", function () {
        submitButton.disabled = !this.checked;
    });

    // Voeg hier je code toe om het formulier naar de server te verzenden wanneer op de knop wordt geklikt
    submitButton.addEventListener("click", function () {
        // Hier kun je de ingevoerde gegevens ophalen en naar de server verzenden
        const username = usernameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;

        // Stuur de gegevens naar de server, bijvoorbeeld met behulp van Fetch API
        // Hieronder is een voorbeeld van hoe je een HTTP POST-verzoek kunt maken
        fetch("https://voorbeeldserver.com/registreren", {
            method: "POST",
            body: JSON.stringify({ username, email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            // Hier kun je de serverrespons verwerken
            if (data.success) {
                alert("Registratie succesvol!");
            } else {
                alert("Registratie mislukt. Probeer het opnieuw.");
            }
        })
        .catch((error) => {
            console.error("Fout bij verzenden van gegevens naar de server:", error);
        });
    });
});