// Recursivly split the input in half until sub-arry with only one element
const mergeSort = (array) => {
    if (array.length < 2) {
        return array;
    } else {
        const left = array.slice(0, Math.floor(array.length / 2));
        const right = array.slice(Math.floor(array.length / 2), array.length);
        
        mergeSort()
    }
}

// Merge each sorted sub arry together to produce the final sorted array
// const merge = (lArr, rArr) => {

// }

mergeSort([5, 3, 2, 1, 7, 4, 9])