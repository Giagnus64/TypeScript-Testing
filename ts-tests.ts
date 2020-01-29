const numButton = document.querySelector(".add-numbers");
const strButton = document.querySelector(".add-strings");
const bothButton = document.querySelector(".add-both");
const numInput = document.querySelector(".num-input")! as HTMLInputElement;
const strInput = document.querySelector(".string-input")! as HTMLInputElement;
const bothInput = document.querySelector(".both-input")! as HTMLInputElement;

function add(thing1: number , thing2: number, phrase: string, showResult: boolean){
    if(typeof thing1 !== number || typeof thing2 !== number){
        return "error!"
    }
    if(showResult && phrase){
        console.log
    }
   return thing1 + thing2
}

numButton.addEventListener("click", (e) =>{
   console.log(add(numInput.value, bothInput.value)) 
});
strButton.addEventListener("click", (e) =>{
   console.log(add(strInput.value, bothInput.value)) 
});
bothButton.addEventListener("click", (e) =>{
   console.log(add(strInput.value, numInput.value)) 
});

// write functions that show the numbers, strings, and showResult with the different buttons -  make sure that if a phrase is said the results prints with a phrase, otherwise if not add the two numbers or strings

const person = {
    name: 'Bob';
    age: 24;
    hobbies: string[];
} = {
    name: 'Bob',
    age: '24',
    hobbies: ['books', 'music']
}


console.log(person.hobbies[1])

//make sure to show the errors in array typing