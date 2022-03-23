
// functions imports
const {getCurrentDate} = require("./date");

test("Should output date in right format", () => {
    const date = getCurrentDate();
    expect(typeof date).toBe('string');
})

