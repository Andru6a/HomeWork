console.log(`Задача 82.1`)
function nameHello(world, name) {
    return world + name
}
console.log(nameHello('Hello, ', 'Andrey'))



console.log(`Задача 82.2`)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 15, 21, 36]
function argumentsNum(array, myNumber) {
    for (i = 0; i < array.length; i++) {
        if (array[i] > myNumber) {
            console.log(array[i])
        }
    }
}
argumentsNum(numbers, 10)



console.log(`Задача 82.3`)
function calc(number1, number2, operator) {
    if (operator == '-') {
        return number1 - number2
    }
    if (operator == '+') {
        return number1 + number2
    }
    if (operator == '*') {
        return number1 * number2
    }
    if (operator == '/') {
        return number1 / number2
    }
}
console.log(calc(2, 3, '-'))






// function sumNumbers (firstNumber, secondNumber) {
//     return firstNumber + secondNumber
// }

// const result = sumNumbers (3, 10)
// console.log(result)
// console.log(sumNumbers(-2,2))

// const users = ['Jonh', 'Ann', 'Alex', 'Max']

// function checkForCopyItem(array, item) {
//     for (let i = 0; i < array.length; i++){
//         if (array[i] === item) {
//             return `There is a copy of the ${item} in array`
//         }
//     }
//     return 'There is no such item in the array'
// }

// console.log(checkForCopyItem(users, 'Ann'))

// 1) Создайте функцию, которая в качестве аргумента будет принимать имя, а возвращать строчку ‘Hello “аргумент функции”’.
// 2) Создайте массив чисел, далее создайте функцию, которая будет принимать в качестве аргумента массив чисел.
// Функция должна перебирать полученный массив и если число больше 10 - вывести это число в консоль.
// 3) Предлагаю вам реализовать простенький калькулятор. Создайте функцию, которая будет принимать три аргумента, два числа и строку для выбора оператора.
// При вызове функции пользователь передает, например, (2, 3, ‘minus’), внутри функции происходит проверка на знак и в данном случае функция должна вернуть -1.
// То есть мы получаем разницу между первым и вторым аргументом. Запишите результат выполнения функции в переменную и выведите в консоль.
// Подобным образом реализуйте 3 математические операции: сложение, вычитание, умножение и деление.
