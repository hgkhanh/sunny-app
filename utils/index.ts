export const secondsToDateTime = (secs) => {
    var date = new Date(1970, 0, 1);
    date.setSeconds(secs);
    return date;
}