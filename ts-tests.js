// //WITHOUT TYPING
// const numButton = document.querySelector(".add-numbers");
// const strButton = document.querySelector(".add-with-string");
// const num1Input = document.querySelector(".num1-input");
// const num2Input = document.querySelector(".num2-input");
// const strInput = document.querySelector(".string-input");
// function add(thing1, thing2, phrase, showString){
//    return showString ? phrase + (thing1 + thing2) : thing1 + thing2
// }
// numButton.addEventListener("click", (e) =>{
//    console.log(num1Input.value, num2Input.value, strInput.value, false) 
// });
// strButton.addEventListener("click", (e) =>{
//    console.log(num1Input.value, num2Input.value, strInput.value, true)
// });
// WITH TYPING
// var numButton = document.querySelector(".add-numbers");
// var strButton = document.querySelector(".add-with-string");
// var num1Input = document.querySelector(".num1-input");
// var num2Input = document.querySelector(".num2-input");
// var strInput = document.querySelector(".string-input");
// function add(thing1, thing2, phrase, showString) {
//     return showString ? phrase + thing1 + thing2 : thing1 + thing2;
// }
// numButton.addEventListener("click", function (e) {
//     var num1 = parseInt(num1Input.value);
//     var num2 = parseInt(num2Input.value);
//     console.log(add(num1, num2, strInput.value, false));
// });
// strButton.addEventListener("click", function (e) {
//     var num1 = parseInt(num1Input.value);
//     var num2 = parseInt(num2Input.value);
//     console.log(add(num1, num2, strInput.value, true));
// });

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
