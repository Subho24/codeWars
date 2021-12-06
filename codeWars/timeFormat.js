let sec, mins, hours, days, years

function formatDuration(seconds) {
    if (seconds >= 60) {
        mins = ~~(seconds/60);
        sec = seconds - mins * 60; 
    } else {
        sec = seconds;
    }
    if (mins >= 60) {
        hours = ~~(mins/60);
        mins = mins - hours * 60;
    }
    if (hours >= 24) {
        days = ~~(hours/24);
        hours = hours - days * 24;
    }
    if (days >= 365) {
        years = ~~(days/365);
        days = days - years * 365;
    }
    let sentense 

    if(sec) {
        (sec > 1) ? sentense = `${sec} seconds`
        : sentense = `${sec} second`;
    }
    if(mins) {
        if(sec) {
            (mins > 1) ? sentense = `${mins} minutes and ${sentense}`
            : sentense = `${mins} minute and ${sentense}`
        } else {
            (mins > 1) ? sentense = `${mins} minutes`
            : sentense = `${mins} minute`
        }
    }
    if(hours) {
        if(sec && mins) {
            (hours > 1) ? sentense = `${hours} hours, ${sentense}`
            : sentense = `${hours} hour, ${sentense}`
        } else if(sec || mins) {
            (hours > 1) ? sentense = `${hours} hours and ${sentense}`
            : sentense = `${hours} hour and ${sentense}`
        } else {
            (hours > 1) ? sentense = `${hours} hours`
            : sentense = `${hours} hour`
        }
    }
    console.log(sentense)
}

formatDuration(8757)

