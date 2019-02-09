
function formatTime(t_in_min) {
    let days = Math.trunc(t_in_min/1440);
    let hours = Math.trunc((t_in_min - days * 1440)/60);
    let minutes = Math.trunc(t_in_min - days * 1440 - hours * 60);
    return days + ' day(s) ' + hours + ' hours(s) ' + minutes + ' minute(s)'
}

formatTime(450);