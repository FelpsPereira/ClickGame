const
esquerda = document.querySelector('#esquerda'), 
direita = document.querySelector('#direita'), 
carro = document.querySelector('#carro')

const init=()=>{
    carro.style = 'position:relative; left:0px'
}

const move = () =>{
    
}

direita.addEventListener('click', ()=>{
    carro.style = `position:relative; left:${parseInt(carro.style.left) + 100}px`
})

esquerda.addEventListener('click', ()=>{
    carro.style = `position:relative; left:${parseInt(carro.style.left) - 100}px`
})

init()