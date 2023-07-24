const button = document.querySelector('.btn')

let btnIsRed = false
// button.addEventListener('click', () => {
//     console.log('клик сработал')
// })
button.addEventListener('click', () => {
    if(btnIsRed){
        button.style.backgroundColor = 'blue'
        btnIsRed = false
    } else{
    button.style.backgroundColor = 'red'
    btnIsRed = true
    }
})
const button2 = document.querySelector('.btn2')

button2.addEventListener('click', () =>{
    button2.style.backgroundColor = 'red'
    console.log('Кнопка отправить нажата')
})


// document.addEventListener('scroll', () => {
//     console.log('scrolling was be')
// })

function scrolling() {
    console.log('scroll')
}

document.addEventListener('scroll', scrolling)