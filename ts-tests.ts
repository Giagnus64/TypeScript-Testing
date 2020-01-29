//WITHOUT TYPING
const numButton = document.querySelector(".add-numbers");
const strButton = document.querySelector(".add-with-string");
const num1Input = document.querySelector(".num1-input");
const num2Input = document.querySelector(".num2-input");
const strInput = document.querySelector(".string-input");

function add(thing1, thing2, phrase, showString){
 
   return showString ? phrase + (thing1 + thing2) : thing1 + thing2
}

numButton.addEventListener("click", (e) =>{
   console.log(add(parseInt(num1Input.value), parseInt(num2Input.value), strInput.value, false)) 
});
strButton.addEventListener("click", (e) =>{
   console.log(add(parseInt(num1Input.value), parseInt(num2Input.value), strInput.value, true)) 
});

// // WITH TYPING
// const numButton = document.querySelector(".add-numbers")! as HTMLButtonElement;
// const strButton = document.querySelector(".add-with-string")! as HTMLButtonElement;
// const num1Input = document.querySelector(".num1-input")! as HTMLInputElement;
// const num2Input = document.querySelector(".num2-input")! as HTMLInputElement;
// const strInput = document.querySelector(".string-input")! as HTMLInputElement;

// function add(
//   thing1: number,
//   thing2: number,
//   phrase: string,
//   showString: boolean
// ) {
//   return showString ? thing1 + thing2 + phrase : thing1 + thing2;
// }

// numButton.addEventListener("click", e => {
//   console.log(add(num1Input.value, num2Input.value, strInput.value, false));
// });
// strButton.addEventListener("click", e => {
//   console.log(add(num1Input.value, num2Input.value, strInput.value, true));
// });


// // write functions that show the numbers, strings, and showResult with the different buttons -  make sure that if a phrase is said the results prints with a phrase, otherwise if not add the two numbers or strings
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
// // const player = {
// //     name : 'Bob',
// //     age: '24',
// //     hobbies: ['books', 'music'],
// //     team: ['AC Milan', 35],
// //     fieldPosition: FieldPosition.GOALIE
// // }



// console.log(person.hobbies[1])
// console.log(person.position)

// // //make sure to show the errors in array typing
// // for(const hobby of person.hobbies){
// //     //can do string manip because we KNOW that the type will be a string 
// // }