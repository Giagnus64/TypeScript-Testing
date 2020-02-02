// const numButton = document.querySelector(".add-numbers")! as HTMLButtonElement;
// const strButton = document.querySelector(".add-with-string")! as HTMLButtonElement;
// const num1Input = document.querySelector(".num1-input")! as HTMLInputElement;
// const num2Input = document.querySelector(".num2-input")! as HTMLInputElement;
// const strInput = document.querySelector(".string-input")! as HTMLInputElement;
// const answer = document.querySelector(".answer")! as any;

// function add(
//   thing1: number,
//   thing2: number,
//   phrase: string,
//   showString: boolean
// ) {
//   return showString ? phrase + thing1 + thing2: thing1 + thing2;
// }

// numButton.addEventListener("click", e => {
//   answer.innerText = add(
//     num1Input.value,
//     num2Input.value,
//     strInput.value,
//     false
//   );
// });
// strButton.addEventListener("click", e => {
//   answer.innerText = add(
//     num1Input.value,
//     num2Input.value,
//     strInput.value,
//     true
//   );
// });



// pre-declared types
const person: {
    name: string;
    age: number;
    hobbies: string[];
} = {
    name: 'Bob',
    age: 24,
    hobbies: ['books', 'music'],
}

// //type inference
// const player = {
//     name: 'Bob',
//     age: '24',
//     hobbies: ['books', 'music'],
// }


// enum FieldPosition {GOALIE, STRIKER, MIDFIELD, DEFENDER};
// // pre-declared types
// const player: {
//     name: 'Bob';
//     age: 24;
//     hobbies: string[];
//     team: [string, number];
//     position: number;
// } = {
//     name : 'Bob',
//     age: 24,
//     hobbies: ['books', 'music'],
//     team: ['AC Milan', 35],
//     position: FieldPosition.GOALIE
// }
// //type inference
// const player = {
//     name : 'Bob',
//     age: '24',
//     hobbies: ['books', 'music'],
//     team: ['AC Milan', 35],
//     fieldPosition: FieldPosition.GOALIE
// }



// console.log(person.hobbies[1])
// console.log(person.position)

// //make sure to show the errors in array typing
// for(const hobby of person.hobbies){
//     //can do string manip because we KNOW that the type will be a string 
// }


//union types

// function add(thing1: number | string, thing2: number | string){
//     let result
//     if(typeof thing1 === 'number' && typeof thing2 === 'number'){
//         result = thing1 + thing2
//     } else {
//         result = input1.toString() + input2.toString()
//     }
//     return result
// }

// type FieldPosition = 'GOALIE' | 'STRIKER'|'MIDFIELD'|'DEFENDER' 

// interface PlayerConfig {
//     name: string;
//     age: number;
//     hobbies?: string[];
//     position: FieldPosition
// }

// //Literal and Type Aliases
// const player: PlayerConfig = {
//     name: "Bob",
//     age: 23,
//     hobbies: ["books", "music"],
//     position: 'GOALIE'
// }
// class Player implements PlayerConfig {
//     constructor(public name: string, public age: number, public position: FieldPosition){}
// }

// const dude = new Player("Dan", 23, 'GOALIE')

// check the cool Class/Interface stuff


// Functions Return Types

// function add(thing1: number, thing2: number): string{
//     return thing1 + thing2
// }

// function add(thing1: number, thing2: number): number{
//     return thing1 + thing2
// }

// // function printGreeting(name: string){
// //     console.log(`Hello, ${name}!`)
// // }
// function printGreeting(name: string): void{
//     console.log(`Hello, ${name}!`)
// }

// //Function types
// //let greetUser = Function;
// let greetUser: (a: string) => void;
// greetUser = add;
// greetUser = printGreeting;
//console.log(greetUser('bob'))

//unknown

// let userInput: unknown;

// function generateError(message: string, code: number): never {
//     throw {message, code}
// }