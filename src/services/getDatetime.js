import moment from "moment";

export const get12FormatTime = (date) => {
    // Getting current hour from Date object.
    hour = date.getHours(); 

    // Checking if the Hour is less than equals to 11 then Set the Time format as AM.
    if(hour <= 11)
    {

    TimeType = 'AM';

    }
    else{

    // If the Hour is Not less than equals to 11 then Set the Time format as PM.
    TimeType = 'PM';

    }


    // IF current hour is grater than 12 then minus 12 from current hour to make it in 12 Hours Format.
    if( hour > 12 )
    {
    hour = hour - 12;
    }

    // If hour value is 0 then by default set its value to 12, because 24 means 0 in 24 hours time format.
    if( hour == 0 )
    {
        hour = 12;
    }

    // Checking if the hours value is less then 10 then add 0 before minutes.
    if(hour < 10)
    {
    hour = '0' + hour.toString();
    }


    // Getting the current minutes from date object.
    minutes = date.getMinutes();

    // Checking if the minutes value is less then 10 then add 0 before minutes.
    if(minutes < 10)
    {
    minutes = '0' + minutes.toString();
    }


    //Getting current seconds from date object.
    seconds = date.getSeconds();

    // If seconds value is less than 10 then add 0 before seconds.
    if(seconds < 10)
    {
    seconds = '0' + seconds.toString();
    }


    // Adding all the variables in fullTime variable.
    fullTime = hour.toString() + ':' + minutes.toString() + ' ' + TimeType.toString();

    return fullTime;
}

const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const longMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const getShortMonth = (m) => {
    return shortMonths[m];
}
export const getLongMonth = (m) => {
    return longMonths[m];
}


export const ddmmyyyyToDate = (d) => {
    let date = d.substring(0,2);
    let month = d.substring(3,5)-1;
    let year = d.substring(6);
    return new Date(year, month, date);
}
export const dateToddmmyyyy = (d) => {
    return moment(d).utc().local().format('DD-MM-YYYY');
}

export const dateToddmmmyyyy = (d) => {
    return moment(d).utc().local().format('DD MMM YYYY');
}

export const dateToyyyymmdd = (d) => {
    return moment(d).utc().local().format('YYYY-MM-DD');
}

export const dateTodmmmyyyy = (d = new Date()) => {
    return moment(d).utc().local().format('D MMM YYYY');
}
export const dmmmyyyyTodate = (d = dateTodmmmyyyy()) => {
    let theDate = d.split(' ');
    let date = theDate[0];
    let m = theDate[1].substr(0,3);
    let month = shortMonths.findIndex( (e) => {
        return m == e
    })
    let year = theDate[2];

    return new Date( year, month, date);
}

export const dateToddmyyyy = (d) => {
    return moment(d).utc().local().format('DD-M-YYYY');
}

export const dateTommmdyyyy = (d) => {
    return moment(d).utc().local().format('MMM D YYYY');
}

export const mmmddyyyyToDate = (d) => {
    let date = d.substr(4,2);
    let m = d.substr(0,3);
    let month = shortMonths.findIndex( (e) => {
        return m == e
    })
    let year = d.substr(8,4);
    return new Date( year ,month, date)
}

export const toDate = () => {
    let d = new Date();
    return (new Date(d.getFullYear(), d.getMonth(), d.getDate()));
}
