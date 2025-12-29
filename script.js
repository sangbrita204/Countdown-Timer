let countdown;

function startCountdown() {
    clearInterval(countdown);

    const targetDate = document.getElementById("datetime").value;
    const endTime = new Date(targetDate).getTime();

    if (!targetDate) {
        alert("Please select a date and time");
        return;
    }

    countdown = setInterval(function () {
        const now = new Date().getTime();
        const timeLeft = endTime - now;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            document.getElementById("message").innerText = "⏰ Time's up!";
            document.getElementById("days").innerText = "00";
            document.getElementById("hours").innerText = "00";
            document.getElementById("minutes").innerText = "00";
            document.getElementById("seconds").innerText = "00";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        document.getElementById("message").innerText = "";
    }, 1000);
}
