const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 1; i < numbers.length; i = i + 2) {
    console.log(`Вывожу четные числа массива: ${numbers[i]}`)
}


const rainbow = ['Red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
for (let i = rainbow.length - 1; i >= 0; i--) {
    console.log(`Вывожу массив в обратном порядке: ${rainbow[i]}`)
}




// 1) Создайте произвольный массив чисел. Используя цикл for обойдите этот массив и выведите в консоль только четные числа.
// 2) Создайте массив из всех цветов радуги. Используя цикл for обойдите этот массив и выведите в консоль все цвета радуги, но в обратном порядке,
// p.s. обратите внимание на индексы массивов и стартовую позицию для i.




// const numbers = [1, '2', true, [1, 2, 3], 5]
// console.log(numbers)
// console.log(numbers [0])
// numbers [4] = 6
// console.log(numbers)


// const numbers = [1, 2, 3, 4, 5]

// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// }