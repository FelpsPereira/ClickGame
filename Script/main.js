let value = 0, upgradeValue = 10, multiplierValue = 1, mults = 0

const vars = {
    clickButton: document.querySelector('#clickButton'),
    clicks: document.querySelector('#Clicks'),
    upgradeButton: document.querySelector('#upgradeButton'),
    multiplier: document.querySelector('#Multiplier'),
    counter: document.querySelector('#counter'),
    storeButton: document.querySelector('#storeButton'),
    closeButton: document.querySelector('#closeButton'),
    store: document.querySelector('#Store'),
    GoldenClick: document.querySelector('#golden-click'),
    GoldenClickButton: document.querySelector('#purchase-golden-click-button'),


}



vars.clickButton.addEventListener('click', ()=>{
    vars.counter.style.display = 'flex'
    const divMore = document.createElement('div')
    divMore.id = 'moreDiv'
    divMore.textContent = `${(1 * multiplierValue).toFixed(1)}+`
    value += 1 * multiplierValue

    if(value > 10){
        vars.clicks.textContent = `Clicks: ${value.toFixed(2)}`   
    }else{
        vars.clicks.textContent = `Clicks: ${value.toFixed(0)}`
    }
    

    document.body.appendChild(divMore)
    divMore.style = 'animation-name:more;'
    setTimeout(() =>{
        divMore.remove()
    }, 1000)

    if (value == 10){
        vars.upgradeButton.style = 'display:block; animation-name:surgimento;'
        
    }
})


vars.upgradeButton.addEventListener('click', ()=>{
    if (value < upgradeValue){
        vars.clicks.textContent = `You can't buy the upgrade!`
        vars.upgradeButton.style.backgroundColor = 'rgba(214, 30, 17, 0.521)'
        setTimeout(() =>{
            vars.clicks.textContent = `Clicks: ${value.toFixed(0)}`
            vars.upgradeButton.style.backgroundColor = 'rgba(17, 70, 214, 0.521)'
        }, 600)
    } else {
        vars.storeButton.style = 'display:block; animation-name:surgimento;'
        value -= upgradeValue
        upgradeValue *= 3
        multiplierValue *= 1.2
        mults++

        vars.clicks.textContent = `Clicks: ${value.toFixed(0)}`


        vars.upgradeButton.style.backgroundColor = 'rgba(17, 214, 66, 0.521)'
        setTimeout(() =>{
            vars.upgradeButton.style.backgroundColor = 'rgba(17, 70, 214, 0.521)'
        }, 600)


        vars.upgradeButton.textContent = `Upgrade Cost: ${upgradeValue.toFixed(0)}`
        vars.multiplier.textContent = `Multiplier: ${multiplierValue.toFixed(1)}x`

    }
    
})

vars.storeButton.addEventListener('click', ()=>{
    console.log('Clicked')
    vars.store.style.display = 'flex'
})

vars.closeButton.addEventListener('click', ()=>{
    console.log('Clicked2')
    vars.store.style.display = 'none'
})

vars.GoldenClickButton.addEventListener('click', ()=>{
    if (value < 100){
        console.log(`Sem dinheiro (${value})`)
    }else if(value >= 100){
        vars.clicks.textContent = `Clicks: ${(value-=100).toFixed(2)}`
        vars.GoldenClick.style = 'background-color: rgba(60, 214, 99, 0.466);'
    }
})