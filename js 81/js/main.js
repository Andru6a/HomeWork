const numbers = [15, 2, 8, 5, 1, 4, 12, 14, 13, 16, 21, 20]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0)
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