console.log(`QUESTION 1 - Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.')
A - Programmatically subtract the value of the first element in the array from the value in the last element of the array.')
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!`);

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let firstArrayValue = ages[0]; // Finds the first Element in the ages array.
let lastArrayValue = ages[ages.length-1]; // Finds last element in the ages array.
let difference = lastArrayValue - firstArrayValue; // Subtracting first element from last element. difference -> 93 - 3 = 90
console.log(difference); // Prints 90 to socnole. 93 - 3 = 90


console.log(`B - Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
New Array is [3, 9, 23, 64, 2, 8, 28, 93, 30] After adding age 30 at the end`);

let newArray = ages.push(30); // Adds new element at the end of the array. New element is 30.
let newArrayFirstValue = ages[0]; // Finds first element of the new array.
let newArrayLastValue = ages[ages.length-1]; // Finds last element of the new array. Last element is the new element added, 30. 
let newArrayDifference = newArrayLastValue - newArrayFirstValue; // Subtracts first element of new array from last element of new array. 30 - 3 = 27
console.log(newArrayDifference); // Prints 27 to console. 30 - 3 = 27

//!!!!! Our new array should be  [3, 9, 23, 64, 2, 8, 28, 93, 30] !!!!

console.log(`C - Use a loop to iterate through the array [3, 9, 23, 64, 2, 8, 28, 93, 30] and calculate the average age.`);
let newArrayAverage = 0;  // Declared new variable to store the average of the new array that containes the new element.
let newArraySum = 0;  // Declared new variable tos tore the sum of the new array.
for(let i = 0; i < ages.length; i++){  // Lopping through new array to find total sum.
  newArraySum += ages[i]; // New array sum is 260
  newArrayAverage = newArraySum / ages.length; // New array average is Sum / Total Elements. 260 / 9 = 28.88888....
}
console.log(newArrayAverage); // Prints average 28.88888.... to console. 


console.log(` QUESTION 2 - Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
A - Use a loop to iterate through the array and calculate the average number of letters per name.`);
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; // 23 letters and 6 strings within array
let average = [];
for (let index = 0; index < names.length; index++){  // Looping through array to find total number of characters
    
    let totalLetters = 0;
    totalLetters += names[index].length;                
    averageLetters = totalLetters / 2 // total characters / total strings = average number of letters per name.
    
    average.push(averageLetters);
}      

console.log (average);


 console.log(`B - Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. `);
 let namesTogether = '';
 for (let i = 0; i < names.length; i++){
    namesTogether = namesTogether + names[i] + ' '; // Loops through array and prints names separated by spaces. 
}
console.log(namesTogether);


console.log(`QUESTION 3 - How do you access the last element of any array?`); 
console.log('By calling the variable where array is stored followed up by array method .length followed up by -1 to account for index 0.');


console.log(`QUESTION 4 - How do you access the first element of any array?`);
console.log('By calling index[0]. Javascript is a zero-index language.');


console.log(`QUESTION 5 - Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:
let names = ["Kelly", "Sam", "Kate"];    // starting with this array
et nameLengths = [5, 3, 4];             // create a new array`) 

//Using let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
let nameLengths = []; // Empty Array
for(let index = 0; index < names.length; index++){ // Looping though array called names. 
    nameLengths.push(names[index].length); // Pushing the index of each name to the empty Array. 
}
console.log(nameLengths);


console.log(`QUESTION 6 - Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`);
let sumOfElements = 0; //declaring var to store sum
for (let i = 0; i < nameLengths.length; i ++){ // Looping thorugh array index to find total sum.
    sumOfElements += nameLengths[i];
}
console.log(sumOfElements);


console.log(`QUESTION 7 - Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').`); 
function repeat(word, n){  // declaring function and setting two parameters. 
    let result = ''; //declaring string var to store word. 
    for(let index = 0; index < n; index++){ // loop to print passing word and number of times. 
      result = result + word;
    }
    console.log(result); 
  }
  repeat('Hello', 3); // calling function to execute loop and passing word Hello and repeat times 3. 
  

console.log(`QUESTION 8 -Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.`); 
function fullName(firstName, lastName){  //declaring function and setting two parameters. 
    console.log(firstName +' '+ lastName); //Printing first and last name separated by a space. 
  }
  
  fullName('Gerson','Velasquez'); // Invoking function and passing my first and last name. 


console.log(`QUESTION 9 - Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.);`); 
let arrOfNum = [3, 6, 9, 12]; // declaring variable to store array. 
function arrayOfNumber(num){
    let sumOfNum = 0;
    for (let index = 0; index < num.length; index++){// looping through array and adding elements to find total sum. 
        sumOfNum = sumOfNum + num[index];
    } 
    if( sumOfNum < 100){ // if statement returns true is total sum is greater than 100. Otherwise will return false. 
        return false;
    }else{
        return true;
    }
}
console.log(arrayOfNumber(arrOfNum));// calling function and passing our array. 


console.log(`QUESTION 10 - Write a function that takes an array of numbers and returns the average of all the elements in the array.`); 
let array = [2, 4, 6, 8]; // declaring variable to store array. 
function anArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){ // Looping throug array to find total sum.
        sum += numbers[i];
    }
    return sum / numbers.length; // Dividing total sum by number of elements inside array. 
}

console.log(anArray(array));//calling function and passing our variable where array is stored. 



console.log(`QUESTION 11 - Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`); 
// ceclaring two variables to store the two arrays. 
let array1 = [1, 2, 3, 4, 10];
let array2 = [1, 2, 3, 4, 8];
function twoArrays(arr1Param, arr2Param){
//For look to calculate the avarage of the first array array1.
    let array1Sum = 0;
    let array1Average = 0;
    for (let i = 0; i < arr1Param.length; i++){
        array1Sum += arr1Param[i];
        array1Average = array1Sum / arr1Param.length;// Dividing total sum by number of element on the first array.
    }
//For loop to calculate the average of the element on the second array array2. 
    let array2Sum = 0;
    let array2Average = 0;
    for (let n = 0; n < arr2Param.length; n++){
        array2Sum += arr2Param[n];
        array2Average = array2Sum / arr2Param.length;// Dividing total sum by number of element on the second array.
    }

    return array1Average > array2Average;// returning if array1 average is greater than array 2 average. If true, it will print true to console. If its not true it will print false. 
}
console.log(twoArrays(array1, array2));   


console.log(`QUESTION 12 - Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`);
let isHotOutside = true; // Declaring Boolean value
let moneyInPocket = 10.50; // declaring number value
function willBuyDrink(isHot, money){
    if(isHotOutside == true && moneyInPocket > 10.50){ // Return true if its hot ourside AND if money is greater than 10.50.
     return true;
    }else{
    return false;
 }                                         
}
console.log(willBuyDrink(isHotOutside, moneyInPocket)); // passing isHotOutside and moneyInPocket through the function


console.log(`QUESTION 13 - Create a function of your own that solves a problem. In comments, write what the function does and why you created it.`);
// So basically this is a function to decide wether we need to take a trip to the grocery store to buy groceries and/or dog food.
// I created this function becasue its a simple decision that my wife and I have to make every weekend. 
function package(groceries, dogFood ){
    if (groceries === true && dogFood === false){
        console.log(`LET'S BUY DOG FOOD!`);
    }else if(groceries === false && dogFood === true){
        console.log(`LET'S BUY GROCERIES!`);
    }else if(groceries === false && dogFood === false){
        console.log(`LET'S BUY GROCERIES AND DOG FOOD!`)
    }else{
        console.log(`WE'RE GOOD!!`);
    }
}
package(true, true);
