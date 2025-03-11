let value = 0, upgradeValue = 10, multiplierValue = 1, mults = 0,isGolden = false, ownedGoldenClick = false, canBuyGoldenClick = true;


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
    if (isGolden == true){
        divMore.textContent = `${(5 * multiplierValue).toFixed(1)}+`
        value += 5 * multiplierValue
        vars.clicks.textContent = `Clicks: ${value}`
        vars.clickButton.style = 'background-color: rgb(96, 195, 252); box-shadow: 0px 0px 10px rgba(12, 151, 231, 0.445);'
        isGolden = false
    } else {
        divMore.textContent = `${(1 * multiplierValue).toFixed(1)}+`
        value += 1 * multiplierValue
        vars.clicks.textContent = `Clicks: ${value}`
    }
    document.body.appendChild(divMore)
    divMore.style = 'animation-name:more;'
    setTimeout(() =>{
        divMore.remove()
    }, 1000)

    if (value == 10){
        vars.upgradeButton.style = 'display:block; animation-name:surgimento;'
    }

    if (ownedGoldenClick == true){
        const nA = Math.floor(Math.random() * 11)
        if (nA == 5) {
            vars.clickButton.style = 'background-color: rgb(233, 225, 122); box-shadow: 0px 0px 10px rgba(216, 231, 12, 0.445);'
            isGolden = true
        }
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
        upgradeValue *= 5
        multiplierValue *= 2
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
    vars.store.style.display = 'flex'
})
vars.closeButton.addEventListener('click', ()=>{
    vars.store.style.display = 'none'
})

if (canBuyGoldenClick == true){
    vars.GoldenClickButton.addEventListener('click', ()=>{
        if (value < 100){
            vars.GoldenClickButton.textContent = 'Insufficient Clicks!'
            setTimeout(() =>{
                vars.GoldenClickButton.textContent = 'Purchase - 100 Clicks'
            }, 600)
        }else if(value >= 100){
            vars.clicks.textContent = `Clicks: ${(value-=100)}`
            vars.GoldenClick.style = 'background-color: rgba(60, 214, 99, 0.466);'
            vars.GoldenClickButton.textContent = 'Owned'
            ownedGoldenClick = true
            canBuyGoldenClick = false
        }
    })
}
