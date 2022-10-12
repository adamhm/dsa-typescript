function binarySearch(array: number[], target: number): number {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);

        if (array[mid] === target) {
            return mid;
        }

        if (array[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

export default binarySearch;
