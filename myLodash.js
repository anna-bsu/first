function chunk(array, size){
    size = size || 1;
    const  result= [];
    let i = 0;
    let k = 0;
    while (i < array.length){
        const tmp = [];
        for (let j = 0; j < size && ((i+j) < array.length); j++){
            tmp[j] = array[i+j];
        }
        result[k++] = tmp;
        i += size;
    }
    return result;
}

 function compact(array){
    const result = [];
    let k =0;
    for(let i = 0; i < array.length; i++){
        if (array[i] != false && !isNaN(array[i])  && array[i] !== null){
        result[k++]= array[i];
        }
    }
    return result;
}

function drop(array, n){
    if(n <= 0) return array;
    n = n || 1;
    const result = [];
    for (let i = n; i < array.length;i++){
        result[i - n] = array[i];
    }
    return result;
}

function take(array, n){
    if(n >= array.length || n === 0) {
        return array;
    }
    if (n != null ){
        n = n || 1;
    }

    const result = [];
    for (let i = 0; i < n ; i++) {
        result[i] = array[i];
    }
    return result;
}


function dropWhile(array, predicate) {
    let index = -1;
    while (++index < array.length && predicate(array[index], index, array)) {
    }
    return drop(array, index);
}

function filter(array, predicate){
    const result = [];
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
    const result = [];
    result.length = (array == null) ? 0 : array.length;

    for(let i = 0; i < array.length; i++){
        result[i] = iteratee(array[i], i, array);
    }
    return result;
}

function zip(...arrays){
    const result = [];
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


function pick(object, paths){
   const obj = {};
   for(let item of paths){
       obj[item] = object[item];
       }
   return obj;
}

function pickBy(object, predicate){
    const obj = {};
    if (object == null) {
        return {};
    }
    for(let key in object){
        if(predicate(object[key], key)){
            obj[key] = object[key];
        }
    }
    return obj;
}
function omit(object, paths){
    const obj = {}; let isExist;
    for(let key in object){
        isExist = false;
        for( let item of paths){
            if (key === item){
                isExist = true;
                break;
            }
        }
        if(!isExist) {
            obj[key] = object[key];
        }
    }
    return obj;
}
function omitBy(object, predicate){
    const obj = {};
    for(let key in object){
       if(!predicate(object[key], key) && object[key] != null){
            obj[key] = object[key];
        }
    }
    return obj;
}
module.exports =  {
    chunk,
    map,
    includes,
    compact,
    drop,
    dropWhile,
    take,
    filter,
    find,
    zip,
    pick,
    pickBy,
    omit,
    omitBy
};
