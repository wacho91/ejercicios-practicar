/*
Crea una funcion que tome un array y retorne la suma de todos los elementos del array.

sumArray([1, 2, 3]) ➞ 6
1 + 2 + 3 = 6

sumArray([1, [2, [1]], 3]) ➞ 7
1 + 2 + 1 + 3 = 7

Nota: Un array puede tener otros array como elementos
*/

function sumOfArray() {
    // tu codigo aca
}

/*
Una 'factor chain' es un array donde cada elemento previo es un factor del elemento siguiente.

El siguiente array es un 'factor chain':

[3, 6, 12, 36]

// 3 is a factor of 6
// 6 is a factor of 12
// 12 is a factor of 36

factorChain([1, 2, 4, 8, 16, 32]) ➞ true

factorChain([1, 1, 1, 1, 1, 1]) ➞ true

factorChain([2, 4, 6, 7, 12]) ➞ false

factorChain([10, 1]) ➞ false
*/

function factorChain() {
    // tu codigo aca
}

/*
Se dice que un numero es Harshad si es exactamente igual a la suma de sus digitos. 
Crea una funcion que determine si un numero es Harshad o no.

isHarshad(75) ➞ false
// 7 + 5 = 12
// 75 no es exactamente divisible para 12
// 75 / 12 es igual a 6.25

isHarshad(171) ➞ true
// 1 + 7 + 1 = 9
// 9 produce una division exacta para 171
// 171 / 9 es igual a 19

isHarshad(481) ➞ true

isHarshad(89) ➞ false

isHarshad(516) ➞ true

isHarshad(200) ➞ true
*/

function isHarshad() {
    // tu codigo aca
}

/*
Un numero se dice que es Disarium si la suma de sus digitos elevados a su respectiva
posicion es igual a el mismo.

Crea una funcion que determine si un numer es Disarium o no

isDisarium(75) ➞ false
// 7^1 + 5^2 = 7 + 25 = 32

isDisarium(135) ➞ true
// 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135

isDisarium(518) ➞ false

isDisarium(518) ➞ true

isDisarium(544) ➞ false

isDisarium(8) ➞ true

isDisarium(466) ➞ false
*/

function isDisarium() {

}

/*
Crea una funcion que le envies una cadena de caracteres y la funcion va a 
invertir cada palabra de dicha cadena de caracteres.

reverseWords('Hola Mundo') ➞ 'olaH odnuM'

reverseWords('Estudio en SoyHenry, quiero ser fullstack') ➞ 'oidutsE ne ,yrneHyoS oreiuq res kcatslluf'
*/

function reverseWords() {

}

module.exports = {
    sumOfArray,
    factorChain,
    isHarshad,
    isDisarium,
    reverseWords
}