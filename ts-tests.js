var numButton = document.querySelector(".add-numbers");
var strButton = document.querySelector(".add-strings");
var bothButton = document.querySelector(".add-both");
var numInput = document.querySelector(".num-input");
var strInput = document.querySelector(".string-input");
var bothInput = document.querySelector(".both-input");
function add(thing1, thing2) {
    return thing1 + thing2;
}
numButton.addEventListener("click", function (e) {
    console.log(add(numInput.value, bothInput.value));
});
strButton.addEventListener("click", function (e) {
    console.log(add(strInput.value, bothInput.value));
});
bothButton.addEventListener("click", function (e) {
    console.log(add(strInput.value, numInput.value));
});
