import binarySearchRecursive from "../../src/search/binarySearchRecursive";

const array = [0, 2, 4, 6, 14, 16, 20];

describe("Binary search (recursive)", () => {
    test("It should return 2 for f([0, 2, 4, 6, 14, 16, 20], 4)", () => {
        const target = 4;
        const expected = 2;

        expect(binarySearchRecursive(array, target)).toEqual(expected);
    });

    test("It should return -1 for f([0, 2, 4, 6, 14, 16, 20], 3)", () => {
        const target = 3;
        const expected = -1;

        expect(binarySearchRecursive(array, target)).toEqual(expected);
    });

    test("It should return -1 when the array is empty", () => {
        const inputArray: number[] = [];
        const target = 3;
        const expected = -1;

        expect(binarySearchRecursive(inputArray, target)).toEqual(expected);
    });
});
