// Write a function which accepts two valid dates and returns the difference between them as number of days


const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    // declare the variables
    var date1 = new Date(dateText1);
    var date2 = new Date(dateText2);
    var diff = Math.abs(date2 - date1);

    return (diff/DAY_IN_MILLISECONDS);
}

console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`)
console.log(`Days difference: ${getDaysBetweenDates('10/15/2021', '12/1/2022')}`)
