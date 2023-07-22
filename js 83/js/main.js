console.log('Задача 1 и 2')
const user =
{
    Andrey: {
        name: 'Andrey',
        age: 23,
        sex: 'male',
        height: 180,
        weight: 90,
        isAdmin: false,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    }
}
user.Andrey.sayHello(`${user.Andrey.name}`)
// users.Andrey.sayHello(`Andrey`)
console.log(`Тебе ${user.Andrey.age}`)





console.log('Задача 3')
const users = [
    {
        name: 'Andrey',
        age: 23,
        sex: 'male',
        height: 180,
        weight: 90,
        isAdmin: false,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    },
    {
        name: 'Ivan',
        age: 25,
        sex: 'male',
        height: 175,
        weight: 80,
        isAdmin: false,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    },
    {
        name: 'Cristi',
        age: 30,
        sex: 'female',
        height: 170,
        weight: 50,
        isAdmin: true,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    }
]

let numbersOfUsers = 0
searchUsers()
function searchUsers() {
    for (let i = 0; i < users.length; i++) {
        if (users[i].isAdmin == false) {
            numbersOfUsers++
        }
    }
    return console.log(`Пользователей без админки: ${numbersOfUsers}`)
}




// 1) Создайте объект с вашим описанием(имя, возраст и т.д.).
// 2) Создайте метод в массиве, который в качестве аргумента будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’.
// 3) Создайте массив объектов с описанием пользователей(такой мы делали в уроке).Объявите отдельную переменную, в которой будет храниться количество простых пользователей,
// начальное значение будет - 0. Обойдите массив пользователей и если пользователь не является админом - прибавьте к ранее созданной переменной единицу.
// После окончания работы цикла выведите в консоль переменную с количеством простых пользователей.


// const users = [
//     {
//         name: `Alex`,
//         age: 23,
//         isAdmin: false
//     },
//     {
//         name: `John`,
//         age: 30,
//         isAdmin: true
//     }
// ]

// users.push({
//     name: `ivan`,
//     age: 23,
//     isAdmin: false
// })

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i].name)
// }

// const foo = 'hello world'
// console.log(foo.toUpperCase())



// const users = {
//     alex: {
//         age: 23,
//         isAdmin: false
//     },
//     john: {
//         age: 20,
//         isAdmin: true,
//         sayHello(name) {
//             console.log(`Hello ${name}`)
//         }
//     }
// }

// console.log(users.john)
// users.john.sayHello('Tom')