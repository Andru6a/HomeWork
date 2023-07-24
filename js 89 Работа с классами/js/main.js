const button = document.querySelector('.btn')
const text = document.querySelector('.text')

// button.addEventListener('click', () => {
//     text.classList.toggle('move')
//     text.classList.toggle('recolor')
// })
button.addEventListener('click', () => {
    text.classList.toggle('move')
    console.log(text.classList)
    if (text.classList.contains('move')){
        text.textContent = 'Я двигаюсь'
    } else {
        text.innerText = 'Текст'
    }
})



// add
// toogle
// remove
// contains/