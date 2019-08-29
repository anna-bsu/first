function chunck(array, size){
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

function compact(array){
    let result = [];
    let k =0;
    for(let i = 0; i < array.length; i++){
        if (array[i] != false && !isNaN(array[i])  && array[i] !== null){
        result[k++]= array[i];
        }
    }
    return result;
}

function drop(array, n){
    if (n === undefined){
        n = 1;
    }
    let result = [];
    for (let i = n; i < array.length;i++){
        result[i - n] = array[i];
    }
    return result;
}

function take(array, n){
    if (n === undefined){
        n = 1;
    }
    let result = [];
    if(n <= array.length) {
        for (let i = 0; i < n ; i++) {
            result[i] = array[i];
        }
    }
    return result;
}
//console.log(drop([ 1 ,  2 ,  3 ], 2 ));

function dropWhile(array, predicate) {
    let index = -1;
    while (++index < array.length && predicate(array[index], index, array)) {
    }
    return drop(array, index);
}

function filter(array, predicate){
    let result = [];
    let k = 0;
    for(let i = 0; i < array.length; i++){
        if (predicate(array[i], i, array)){
            result[k++] = array[i];
        }
    }
    return result;
}

function find(array, predicate, fromIndex){
    let answer;
    if (fromIndex === undefined){
        fromIndex = 0;
    }
    for (let i = fromIndex; i < array.length; i++){
        if (predicate(array[i], i, array)){
            answer = array[i];
            break;
        }
    }
    return answer;
}

function includes(array, value, fromIndex){
    let answer = false;
    if (fromIndex === undefined){
        fromIndex = 0;
    }
    if (fromIndex < 0){
        fromIndex = array.length + fromIndex - 1;
    }
    if (typeof value === 'string' && typeof array === 'string'){
        return array.includes(value, fromIndex);
    }

    if (fromIndex >= 0) {
        for (let i = fromIndex; i < array.length; i++) {
            if (value == array[i]) {
                answer = true;
                break;
            }
        }
    }
    else {
        for (let i = fromIndex; i > 0; i--){
            if (value == array[i]){
                answer = true;
                break;
            }
        }
    }
    return answer;
}

function map(array, iteratee) {
    let result = [];
    result.length = (array == null) ? 0 : array.length;

    for(let i = 0; i < array.length; i++){
        result[i] = iteratee(array[i], i, array);
    }
    return result;
}

function zip(...arrays){
    let result = [];
    result.length = arrays[0].length;
    let currentArray = [];
    let k ;
    for(let i = 0; i < result.length; i++){
        k = 0;
        for (let array of arrays){
            currentArray[k++] = array[i];
        }
        result[i] =  currentArray;
        currentArray = [];
    }
    return result;
}

console.log(zip(['a', 'b'], [1, 2], [true, false]));
