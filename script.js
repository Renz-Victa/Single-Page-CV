var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function showTime () {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var amOrPm = "AM";
        var currentTime = `$(hours).$(minutes).$(seconds)`;

        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("showTime").textContent = showTime;

        h = (h < 10) ? "0" + hours: hours;
        m = (m < 10) ? "0" + minutes: minutes;
        s = (s < 10) ? "0" + seconds: seconds;

        if (showTime >= 12) {
                amOrPm = "PM";
        }
}

setInterval(showTime, 1000);
updateClock();
