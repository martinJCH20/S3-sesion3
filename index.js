var fruits = ['apple','banana','orange'];

const fruitsElements = fruits.forEach(function (fruit, index) {
    console.log(index + 1 + '.' + fruit);
});

fruitsElements;

////
var author = 'FF';

function namedCallback(param){
    console.log(`namedCallback by ${param}`);
}

function testfunction(callback){
    callback;
}

testfunction(namedCallback(author));

///
var menssage = 'Hello there';

function myCallbackFunction(){
    console.log('myCallbackFunction is called()');
}

function testCallback(param, callback){
    console.log(param);
    if(callback && typeof callback === 'function'){
        callback;
    }
}

testCallback(menssage);

//
var suma = 26;
function sum(num1, num2) {
    return num1 + num2
}

function calculate(num1, num2, sum){
    if(typeof sum === 'function'){
        return sum(num1, num2);
    }else{
        return 'No es una funcion';
    }

}

const result = calculate(4, 6, sum);//(4, 6, suma) -->No reconoce como funcion
console.log(result);

//
function getDataFromServer(callback){
    setTimeout(function(){
            callback();
    }, 100); //Da un tiempo para mostrar valor
}

function personDetails(){
    console.log('PersonDetails are available to use');
}

getDataFromServer(personDetails);

//
var student = {
    age: 27,
    setFullName: function (firstName, lastName){
        this.fullName = `${lastName}, ${firstName}, ${student.age} `;
    }
}

function userInput(firstName, lastName, callback, object){
    callback.call(object, firstName, lastName);
}

userInput('Martin', 'Julca', student.setFullName, student);

console.log(student.fullName);

//
function finishedSpeking(animal, sound){
    return `The ${animal} has finished ${sound}ing`;
}

function notFinishedSpeaking(animal, sound){
    return `The ${animal} has NOT finished ${sound}ing`;
}

function speak(animal, noise, afterSpeaking){
    console.log(noise.toUpperCase());
    return afterSpeaking(animal, noise);
}

speak('cat', 'meow', finishedSpeking);
speak('dog', 'bark', notFinishedSpeaking);


//
function addOne(number){
    console.log(number + 1);
}

function multiplyByTen(number){
    console.log(number * 10);
}

function multiply(number, multiply){
    console.log(number * multiply);
}

function doMath(numbers, numberCallback, multiplyValue){
    var newNumber = [];
    if(!multiplyValue){
        for(let i = 0; i < numbers.length; i++){
            var result = numberCallback(numbers[i]);
            newNumber.push(result);
        }
    }else{
        for(let i=0; i < numbers.length; i++){
            var result = numberCallback(numbers[i], multiplyValue);
            newNumber.push(result);
        }
    }
}

// function addToeachNumber(numbers){
//     var newNumber = [];
//     for(let i = 0; i < numbers.length; i++){
//         newNumber.push(numbers[i] + 1);
//     }
//     console.log(newNumber);
// }

var oldNumbers =  [3,8,6];
doMath(oldNumbers, addOne);
doMath(oldNumbers, multiply, 2);