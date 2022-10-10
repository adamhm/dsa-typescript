import linearSearch from "../../src/search/linearSearch";

const array = [0, 2, 4, 6];

describe("Linear search", () => {
    test("It should return 2 for f([0, 2, 4, 6], 4)",() => {
        const target = 4;
        const expected = 2;

        expect(linearSearch(array, target)).toEqual(expected);
    });

    test("It should return -1 for f([0, 2, 4, 6], 3", () => {
        const target = 3;
        const expected = -1;

        expect(linearSearch(array, target)).toEqual(expected);
    });

    test("It should return -1 when the array is empty", () => {
        const inputArray: number[] = [];
        const target = 3;
        const expected = -1;

        expect(linearSearch(inputArray, target)).toEqual(expected);
    });
});
