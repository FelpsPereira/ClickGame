const
Start = document.querySelector('#começar'), 
Stop = document.querySelector('#parar'), 
car = document.querySelector('#carro'),
animationCar = document.querySelector('.animationCar')

const init=()=>{
    car.style = 'position:relative; left:0px;'
}

let pos;
Stop.addEventListener('click', ()=>{
    pos = parseInt(car.getBoundingClientRect().left)
    console.log(pos)
    animationCar.style = `animation-name:nothing; left:${pos}px;`
})

Start.addEventListener('click', ()=>{
    pos = parseInt(car.getBoundingClientRect().left)
    console.log(pos)
    animationCar.style = `animation-name:mover; left:${pos}px;`
})

init()