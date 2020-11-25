//[1, 7, 3];
//[3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
//[1,undefined,3,5,-3];
let x = [1,NaN,3,5,-3];
    
function maxNum(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    
    return max;   
}
console.log(maxNum(x));

function minNum(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    return min;    
}
console.log(minNum(x));

function sumNum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || arr.indexOf(arr[i]) == -1) {
         arr[i] = 0;
        }
       sum += arr[i]; 
    }
    return sum;  
}
console.log(sumNum(x));



//Каждая функция должна принимать массив как параметр и возвращать результат своего выполнения через ключевое слово return
