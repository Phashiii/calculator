function add(num1, num2)
{ 
    let sum = 0;
    sum = num1 + num2;
}

function subtract(num1, num2)
{
    let difference = 0;
    difference = num1 - num2;
}
function multiply(num1, num2)
{
    let product = 0 ;
    product = num1 * num2;
}
function divide(num1, num2)
{
    let quotient = 0 ;
    quotient = num1 / num2;
}
function operate(num1, operater, num2)
{

}
const displayScreen = document.querySelector('.screen');

document.querySelectorAll('button').forEach(occurance =>{
    occurance.addEventListener('click', function(){
        displayScreen.textContent += occurance.getAttribute('id');
    })
    
})


