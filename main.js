let num1 = prompt("Digite o primeiro número: ");
let num2 = prompt("Digite o segundo número:" );
let num3 = prompt("Digite o terceiro número: ");

function soma (num1, num2, num3){
let soma = num1+num2+num3;
return soma}
soma();

function sub(num1, num2, num3){
    let sub = num1-num2-num3;
    return sub;
}
sub();

function multi(num1, num2, num3){
    let multi = num1*num2*num3;
    return multi;
}
multi();

function div(num1, num2, num3){
    let div = num1/num2/num3;
    return div;
}
div();

alert("A soma é " + soma(num1, num2, num3));
alert("A subtração é: " + sub(num1, num2, num3));
alert("A multiplicação é: " + multi(num1,num2, num3));
alert("A divisão é: " + div(num1, num2, num3));
