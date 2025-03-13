let value = 0, 
upgradeValue = 10, 
multiplierValue = 1, 
mults = 0,
isGolden = false, 
ownedGoldenClick = false, 
canBuyGoldenClick = true, 
clicksPerSecond = 0, 
points = 0;


vars.clickButton.addEventListener('click', ()=>{
    vars.counter.style.display = 'flex'
    const divMore = document.createElement('div')
    divMore.id = 'moreDiv'
    if (isGolden == true){
        divMore.textContent = `${5 * multiplierValue}+`
        points,value += 5 * multiplierValue
        vars.clicks.textContent = `Clicks: ${value}`
        vars.clickButton.style = 'animation-name:none;'
        isGolden = false
    } else{
        points += 1 * multiplierValue
        divMore.textContent = `${1 * multiplierValue}+`
        value += 1 * multiplierValue
        vars.clicks.textContent = `Clicks: ${value}`
    }

    vars.counter.appendChild(divMore)
    divMore.style = 'animation-name:more;'
    setTimeout(() =>{
        divMore.remove()
    }, 600)
    if (value == 10){
        vars.upgradeButton.style = 'display:block; animation-name:surgimento;'
        document.body.style = 'justify-content: space-between;'
        vars.counter.style = 'display:flex;position: initial;'
    }
    if (ownedGoldenClick == true){
        const nA = Math.floor(Math.random() * 11)
        if (nA == 1) {
            vars.clickButton.style = 'animation-name:goldenAnimation;'
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
            vars.upgradeButton.style.backgroundColor = 'rgb(93, 114, 126)'
        }, 500)

    } else {
        vars.storeButton.style = 'display:block; animation-name:surgimento;'
        value -= upgradeValue
        upgradeValue *= 5
        multiplierValue *= 2
        mults++
        vars.clicks.textContent = `Clicks: ${value.toFixed(0)}`
        vars.upgradeButton.style.backgroundColor = 'rgba(17, 214, 66, 0.521)'
        setTimeout(() =>{
            vars.upgradeButton.style.backgroundColor = 'rgb(93, 114, 126)'
        }, 500)
        vars.upgradeButton.textContent = `Upgrade Cost: ${upgradeValue.toFixed(0)}`
    }
})

vars.storeButton.addEventListener('click', ()=>{
    if (vars.store.style.display == 'flex') {
        vars.store.style = 'display:flex; animation-name:fadeOutStore;'
        vars.storeButton.style = 'display:block;background-color: rgba(53, 202, 53, 0.589); box-shadow: 0px 0px 10px rgba(18, 156, 48, 0.603);'
        setTimeout(() =>{
            vars.store.style = 'display:none;'
        }, 300)
    }else {
        vars.store.style = 'display:flex; animation-name:fadeInStore;'
        vars.storeButton.style = 'display:block; background-color: rgba(223, 100, 100, 0.589); box-shadow: 0px 0px 10px rgba(255, 0, 0, 0.603);'
    }
})

vars.GoldenClickButton.addEventListener('click', ()=>{
    if (canBuyGoldenClick == true){
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
    }
})

setInterval(()=>{
    clicksPerSecond = points
    points = 0
    vars.multiplier.textContent = `Clicks /s: ${clicksPerSecond}`
}, 1000)

import {vars} from './vars.js'