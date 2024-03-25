/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    
    const chunkedArray = [];

    let chunk = [];
    for (let i = 0; i < arr.length; i++) {
        if (chunk.length < size) {
            chunk.push(arr[i]);
            if (chunk.length == size) {
                chunkedArray.push(chunk);
                chunk = [];
            }
        }
    }
    if(chunk.length >0){
        chunkedArray.push(chunk);
    }
    return chunkedArray;
};
