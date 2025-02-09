let countdown;

function startTimer() {
    const minutes = document.getElementById('minutes').value;
    const seconds = document.getElementById('seconds').value;

    // Validate the input
    if (!minutes && !seconds) {
        alert('Please enter a time!');
        return;
    }

    // If no minutes or seconds are provided, default to 0
    if (minutes === '') minutes = 0;
    if (seconds === '') seconds = 0;

    // Convert minutes and seconds to total seconds
    let totalTime = parseInt(minutes) * 60 + parseInt(seconds);

    // Clear any previous countdown
    if (countdown) {
        clearInterval(countdown);
    }

    // Start the countdown
    countdown = setInterval(function() {
        if (totalTime <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
        } else {
            totalTime--;
            const mins = Math.floor(totalTime / 60);
            const secs = totalTime % 60;
            // Update the timer display
            document.getElementById('timer').textContent = `${formatTime(mins)}:${formatTime(secs)}`;
        }
    }, 1000);
}

// Format time to always show two digits
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
