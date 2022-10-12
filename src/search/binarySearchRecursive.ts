function binarySearchRecursive(array: number[], target: number): number {
    return binaryRecursive(array, target, 0, array.length - 1);
}

function binaryRecursive(array: number[], target: number, start: number, end: number): number {
    if (start > end) {
        return -1;
    }

    const mid = Math.floor(start + (end - start) / 2);

    if (array[mid] === target) {
        return mid;
    }

    if (array[mid] > target) {
        return binaryRecursive(array, target, start, mid - 1);
    }

    return binaryRecursive(array, target, mid + 1, end);
}

export default binarySearchRecursive;
