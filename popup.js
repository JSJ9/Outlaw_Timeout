let countdown;
let isRunning = false;

function startTime() {
    // Get the input values
    const hours = document.getElementById('hour').value;
    const minutes = document.getElementById('min').value;
    const seconds = document.getElementById('sec').value;

    // Validate inputs
    if (hours === '' || minutes === '' || seconds === '') {
        alert('Please enter a valid time!');
        return;
    }

    // If the timer is running, do nothing
    if (isRunning) return;

    let totalTime = (parseInt(hours) * 3600) + (parseInt(minutes) * 60) + parseInt(seconds);
    const timerDisplay = document.querySelector('.timing');

    // Change background to green to indicate the timer is running
    timerDisplay.style.backgroundColor = 'green';
    isRunning = true;

    countdown = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(countdown);
            timerDisplay.style.backgroundColor = 'white'; // Reset the background color
            alert('Time is up! Please do not pause the upcoming video!');
            isRunning = false;
            window.open("https://www.youtube.com/embed/P2EKVoUQXv4?autoplay=1&controls=0&disablekb=1&rel=0&showinfo=0&modestbranding=1", "_blank");
        } else {
            totalTime--;
            const h = Math.floor(totalTime / 3600);
            const m = Math.floor((totalTime % 3600) / 60);
            const s = totalTime % 60;

            // Update the timer display
            document.getElementById('hour').value = formatTime(h);
            document.getElementById('min').value = formatTime(m);
            document.getElementById('sec').value = formatTime(s);
        }
    }, 1000);
}

function resetTime() {
    clearInterval(countdown);
    document.getElementById('hour').value = '';
    document.getElementById('min').value = '';
    document.getElementById('sec').value = '';
    document.querySelector('.timing').style.backgroundColor = 'white'; // Reset the background color
    isRunning = false;
}

// Helper function to format time to always show two digits
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Add event listeners when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start');
    const resetButton = document.getElementById('reset');

    // Attach event listeners to buttons
    startButton.addEventListener('click', startTime);
    resetButton.addEventListener('click', resetTime);
});
