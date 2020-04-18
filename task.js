//1) Añadir nuevos callback que reste y divida
//2) Refactorizar o re-escribir la funcion doMath
//3) Añadir validaciones  a nuestros callbacks if typeoff...
function addOne(number)  { 
    console.log(number + 1);
};

function multiplyByTen(number)  {
    console.log(number * 10);
};

function multiply(number, multiply) {
    console.log(number * multiply);
};

function rest(number, rest) {
    console.log(number - rest);
};

function dividir(number, div) {
    console.log(number / div);
};

function doMath(numbers, numberCallback, otherValue, operation) { // type 'A': addOne, 'T': multiplyByTen, 'M': multiply, 'R': rest, 'D': dividir
    var newNumber = [];
    if(!operation || operation==''){
        console.log('Debe indicar la operación a realizar');
    }else{
        if(operation == 'A' || operation == 'T'){
            for(let i = 0; i < numbers.length; i++){
                var result = numberCallback(numbers[i]);
                newNumber.push(result);
            }
        }else if(operation == 'M'){
            for(let i=0; i < numbers.length; i++){
                var result = numberCallback(numbers[i], otherValue);
                newNumber.push(result);
            }
        }else if(operation == 'R'){
            for(let i=0; i < numbers.length; i++){
                var result = numberCallback(numbers[i], otherValue);
                newNumber.push(result);
            }
        }else if(operation == 'D'){
            for(let i=0; i < numbers.length; i++){
                var result = numberCallback(numbers[i], otherValue);
                newNumber.push(result);
            }
        }
    }
};

var oldNumbers =  [3,8,6];
doMath(oldNumbers, addOne, 0, 'A');
doMath(oldNumbers, multiply, 2, 'M');