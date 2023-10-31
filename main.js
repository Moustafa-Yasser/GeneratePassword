const input = document.getElementById("show");
const copy = document.querySelector(".input img");
const btn = document.querySelector("button");

const range = document.getElementById("range-length");
const number = document.getElementById("number-length");
range.addEventListener("input", () => {number.value = range.value; })
number.addEventListener("input", () => {range.value = number.value;})

let arrA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let arra = "abcdefghijklmnopqrstuvwxyz";
let numb = "0123456789";
let symbol = `@#$%^&*()_+~{}[]|/-=`;
let all = arrA + arra + numb + symbol;
btn.addEventListener("click", () => {
let password = "";
password += arrA[Math.floor(Math.random() * arrA.length)];
password += arra[Math.floor(Math.random() * arra.length)];
password += numb[Math.floor(Math.random() * numb.length)];
password += symbol[Math.floor(Math.random() * symbol.length)];
const lengthPass = parseInt(range.value) ;

while(lengthPass > password.length) {
    password += all[Math.floor(Math.random() * all.length)]
};
input.value = password;
});
copy.addEventListener("click", () => {
    input.select();
    input.setSelectionRange(0, 99999);
navigator.clipboard.writeText(input.value)
    let message = document.querySelector(".input p")
    if (input.value === "") {
        message.textContent = 'input is empty' ;
        message.className = 'red';
        setTimeout(function () {message.textContent = 'Copy to clipboard' 
        message.className = ''}, 1000)
    } else {
        message.textContent = `Copied: ${input.value}`;
        message.className = 'green';
        setTimeout(function () {message.textContent = 'Copy to clipboard' 
        message.className = ''}, 2000)
    }
});

