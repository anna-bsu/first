function myChunck(array, size){
    if (size === undefined) size = 1;
    let result = [];
    result.length = Math.round(array.length/size);

    let i = 0;
    let k = 0;
    while (i < array.length){
        let tmp = [];
        for (let j = 0; j < size && array[i+j]; j++){
            tmp[j] = array[i+j];
        }
        result[k++] = tmp;
        i += size;
    }
    return result;
}
console.log(myChunck(['a', 'b', 'c', 'd', 'e']));

//false, null, 0, "", undefined, and NaN are falsey.
function myCompact(array){
    let result = [];
    let k =0;
    for(let i = 0; i < array.length; i++){
        if (array[i] != false && !isNaN(array[i])  && array[i] !== null){
        result[k++]= array[i];
        }
    }
    return result;
}
console.log(myCompact([0, 1, false, 2, '', 3, NaN,null]));
function myDrop(array, size){
    if (size === undefined){
        size = 1;
    }
    let result = [];
    for (let i = size; i < array.length;i++){
        result[i - size] = array[i];
    }
    return result;
}
console.log(myDrop([ 1 ,  2 ,  3 ] ,  1 ));
function myTakeRight(array, n){
    if (n === undefined){
        n = 1;
    }
    let result = [];
    result.length = n;
    for (let i = n ; i > 0; i--){
        result[i - 1] = array[array.length - i];
    }
    return result;
}
console.log(myTakeRight([ 1 ,  2 ,  3 ], 2 ));
