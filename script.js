let countdown;

function startTimer() {
    const minutes = document.getElementById('minutes').value;
    const seconds = document.getElementById('seconds').value;

    // If no time is entered, alert the user
    if (!minutes && !seconds) {
        alert('Please enter a time!');
        return;
    }

    // Convert time to seconds
    let totalTime = parseInt(minutes || 0) * 60 + parseInt(seconds || 0);

    if (countdown) {
        clearInterval(countdown); // Clear any previous timers
    }

    countdown = setInterval(function() {
        if (totalTime <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
        } else {
            totalTime--;
            const mins = Math.floor(totalTime / 60);
            const secs = totalTime % 60;
            document.getElementById('timer').textContent = `${formatTime(mins)}:${formatTime(secs)}`;
        }
    }, 1000);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}