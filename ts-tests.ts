const numButton = document.querySelector(".add-numbers");
const strButton = document.querySelector(".add-strings");
const bothButton = document.querySelector(".add-both");
const numInput = document.querySelector(".num-input")! as HTMLInputElement;
const strInput = document.querySelector(".string-input")! as HTMLInputElement;
const bothInput = document.querySelector(".both-input")! as HTMLInputElement;

function add(thing1: number , thing2: number){
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

