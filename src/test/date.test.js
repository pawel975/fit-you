
const {getCurrentDate, getLastWeek} = require("../js/date");

// getCurrentDate
test("Should output date in right format", () => {
    const date = getCurrentDate();
    expect(typeof date).toBe('string');
})

test("Date should be 11 char long", ()=> {
    const dateLength = getCurrentDate().length;
    expect(dateLength).toBe(10);
})

// getLastWeek
test("Should output array of 7 elements long", ()=> {
    const lastWeekLength = getLastWeek().length;
    expect(lastWeekLength).toBe(7);
})

test("Each element of array list should be type of string", ()=> {
    const lastWeek = getLastWeek();
    const filteredWeek = lastWeek.filter(day => typeof day === "string");
    const filteredWeekLength = filteredWeek.length;
    expect(filteredWeekLength).toBe(7);
})



