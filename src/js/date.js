
export const getCurrentDate = () => {
    const dateObj = new Date();
    const day = `${dateObj.getDate()}`;
    const month = `${dateObj.getMonth() + 1}`;
    const year = `${dateObj.getFullYear()}`;

    const date = `${day > 10 ? day : "0" + day}.${month > 10 ? month : "0" + month}.${year}`;

    return date;
}