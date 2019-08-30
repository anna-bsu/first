function chunck(array, size){
    size = size || 1;
    const RESULT = [];
    let i = 0;
    let k = 0;
    while (i < array.length){
        const tmp = [];
        for (let j = 0; j < size && ((i+j) < array.length); j++){
            tmp[j] = array[i+j];
        }
        RESULT[k++] = tmp;
        i += size;
    }
    return RESULT;
}

function compact(array){
    const RESULT = [];
    let k =0;
    for(let i = 0; i < array.length; i++){
        if (array[i] != false && !isNaN(array[i])  && array[i] !== null){
        RESULT[k++]= array[i];
        }
    }
    return RESULT;
}

function drop(array, n){
    n = n || 1;
    const RESULT = [];
    for (let i = n; i < array.length;i++){
        RESULT[i - n] = array[i];
    }
    return RESULT;
}

function take(array, n){
    n = n || 1;
    const RESULT = [];
    if(n <= array.length) {
        for (let i = 0; i < n ; i++) {
            RESULT[i] = array[i];
        }
    }
    return RESULT;
}


function dropWhile(array, predicate) {
    let index = -1;
    while (++index < array.length && predicate(array[index], index, array)) {
    }
    return drop(array, index);
}

function filter(array, predicate){
    const RESULT = [];
    let k = 0;
    for(let i = 0; i < array.length; i++){
        if (predicate(array[i], i, array)){
            RESULT[k++] = array[i];
        }
    }
    return RESULT;
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
    const RESULT = [];
    RESULT.length = (array == null) ? 0 : array.length;

    for(let i = 0; i < array.length; i++){
        RESULT[i] = iteratee(array[i], i, array);
    }
    return RESULT;
}

function zip(...arrays){
    const RESULT = [];
    RESULT.length = arrays[0].length;
    let currentArray = [];
    let k ;
    for(let i = 0; i < RESULT.length; i++){
        k = 0;
        for (let array of arrays){
            currentArray[k++] = array[i];
        }
        RESULT[i] =  currentArray;
        currentArray = [];
    }
    return RESULT;
}


function pick(object, paths){
   const OBJ = {};
   for(let item of paths){
       OBJ[item] = object[item];
       }
   return OBJ;
}

function pickBy(object, predicate){
    const OBJ = {};
    for(let key in object){
        if(predicate(object[key], key)){
            OBJ[key] = object[key];
        }
    }
    return OBJ;
}
function omit(object, paths){
    const OBJ = {}; let isExist;
    for(let key in object){
        isExist = false;
        for( let item of paths){
            if (key === item){
                isExist = true;
                break;
            }
        }
        if(!isExist) {
            OBJ[key] = object[key];
        }
    }
    return OBJ;
}
function omitBy(object, predicate){
    const OBJ = {};
    for(let key in object){
       if(!predicate(object[key], key)){
            OBJ[key] = object[key];
        }
    }
    return OBJ;
}
