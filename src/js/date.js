
export const getCurrentDate = () => {
    const dateObj = new Date();
    const day = `${dateObj.getDate()}`;
    const month = `${dateObj.getMonth() + 1}`;
    const year = `${dateObj.getFullYear()}`;

    const date = `${day > 9 ? day : "0" + day}.${month > 9 ? month : "0" + month}.${year}`;

    return date;
}

// Creates array of last 7 days
export const getLastWeek = () => {

    let days = [];
    
    for (let i = 0; i < 7; i++) {

        const timestamp = new Date().getTime();
        const previousTimestamp = timestamp - (i * 24*60*60*1000);
        const previousDate = new Date(previousTimestamp);

        const day = `${previousDate.getDate()}`;
        const month = `${previousDate.getMonth() + 1}`;
        const year = `${previousDate.getFullYear()}`;
    
        const date = `${day > 9 ? day : "0" + day}.${month > 9 ? month : "0" + month}.${year}`;
        days.push(date);

    }

    days.reverse();

    return days;
}

export const dateToTimestamp = (date) => {
    let dateElements = date.split(".");
    let timestamp = new Date(dateElements[2], dateElements[1] - 1, dateElements[0]).getTime();
    
    return timestamp;
}