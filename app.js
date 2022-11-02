// let weather = prompt("How is the weather?")

// if (weather == "rainy") {
//     console.log("Get your Umbrella");
// } else {
//     console.log("Get your Sunglasses");
// }

// const sumArrow = (a, b) => {
//     return a + b
// }

// console.log(sumArrow(5, 5));


//ARRAY METHODS
// push,slice,indexOf,length    
// const groceries = ['apple', 'banana', 'orange', 'grapes'];

// groceries.push('guava')
// console.log(groceries);
// console.log(groceries[1]);
// console.log(groceries.slice(1, 4));

//OBJECTS
// const person = {
//         name: "Kit",
//         height: "5'7",
//         contactNumber: "09302331890"
//     }
//bracket notation
// console.log(person["name"]);
//dot notation
// console.log(person.contactNumber);

// person['phone'] = "09466268458"
// console.log(person.phone);
// console.log(person);


//es6 arrow function (2 arguments)
//object 
//template literals

// const introducer = (name, shirt) => {
//     const person = {
//         name: name,
//         shirt: shirt
//     }
//     const intro = `Hi, my name is ${person.name} and the color if my shirt is ${person.shirt}`

//     return intro
// }

// console.log(introducer('Kit', 'black'))


// const fruits = ['banana', 'apple', 'orange', 'pear', 'pineapple']

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

//old syntax
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

//es6 for loop
// for (const fruit of fruits) {
//     console.log(fruits);
// }

// const numbers = [1, 2, 3, 4, 5, 6]

// for (const number of numbers) {
//     console.log(number);
// }

// let result = []

// for (const number of numbers) {
//     result.push(number * 2)
// }

// console.log(result);

// const double = (numbers) => {
//     let result = []
//     for (const number of numbers) {
//         result.push(number * 2)
//     }

//     return result
// }

// console.log(double([1, 2, 3, 4, 5, 6]));


//for in (getting the index/numbers of characters)
//for of (getting the string)
// const howManyLetters = () => {
//     const phrase = 'hey, can you go to grocery store with me?'

//     for (const index in phrase) {
//         console.log(index)
//     }
// }

// howManyLetters()

//Sum up all numbers in array

// const sumArray = (numbers) => {
//     let result = 0;
//     //for loop
//     for (const number of numbers) {
//         console.log(number);
//         result = result + number
//     }
//     return { result }
// }

// const nums = [1, 2, 3, 4, 5]
// console.log(sumArray(nums));

//Finding the greater number in Array

// const largest = (numbers) => {
//     let result = numbers[0]

//     //loop
//     for (const number of numbers) {
//         if (number > result)
//             result = number
//     }
//     return { result }
// }

// console.log(largest([5, 2, 3, 55, 1, 2]));

const letterFrequency = (phrase) => {
    //letterFrequency('haha')=> {'h' : 1, 'a' : 2}
    console.log(phrase);
    //make  a `frequency` object {}
    let frequency = {}
        //looping
    for (const letter in phrase) {
        //check if letter exists in frequency
        if (letter in frequency) {
            //increment the value +1
            frequency[letter] = frequency[letter] + 1
                //otherwise, set the value to 1 
        } else {
            frequency[letter] = 1
        }
    }
    return frequency
}

console.log(letterFrequency('haha'));