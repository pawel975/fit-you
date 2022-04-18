import { exportedForTestingFood } from '../js/food';

const {createDiaryTable, createFoodOption} = exportedForTestingFood; 

test("Passing wrong arguments to createDiaryTable returns undefined", () => {
    const wrongArgs = [undefined, null, false, NaN]

    for (let i = 0; i < wrongArgs.length; i++) {
        expect(createDiaryTable(wrongArgs[i])).toBeUndefined();
    }
})

describe("Should return execution of function if first argument ", () => {

    test("is not an array", () => {

        const wrongTypes = [4, "exampleString"]
    
        for (let i = 0; i < wrongTypes.length; i++) {
            expect(() => createFoodOption(wrongTypes[i], [])).toThrowError("Invalid type of argument");
        }
    })
    
    test("is not proper food match object", () => {
    
        const wrongLengthArr = [{a: 4}];
        expect(() => createFoodOption(wrongLengthArr, [])).toThrowError("Invalid type of argument");
    })
    
    test("has no elements", () => {
    
        const wrongLengthArr = [];
        expect(() => createFoodOption(wrongLengthArr, [])).toThrowError("Invalid type of argument");
    })
    
})

