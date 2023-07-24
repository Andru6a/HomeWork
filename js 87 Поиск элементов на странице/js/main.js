// const element = document.querySelector('.block')
// element.textContent = 'text'
// element.id = '123'
// element.style.color = 'red'
// element.style.fontSize = '30px'
// console.log(element)

const elements = document.querySelectorAll('.block')
// console.log(elements[2])
elements.forEach((element) =>{
    element.style.color = 'blue'
})