let value = 0, upgradeValue = 10, multiplierValue = 1

const vars = {
    clickButton: document.querySelector('#clickButton'),
    clicks: document.querySelector('#Clicks'),
    upgradeButton: document.querySelector('#upgradeButton'),
    multiplier: document.querySelector('#Multiplier'),
    counter: document.querySelector('#counter')
}



vars.clickButton.addEventListener('click', ()=>{
    const divMore = document.createElement('div')
    divMore.id = 'moreDiv'
    divMore.textContent = `${(1 * multiplierValue).toFixed(1)}+`
    value += 1 * multiplierValue
    vars.clicks.textContent = `| Clicks: ${value.toFixed(0)} |`

    document.body.appendChild(divMore)
    divMore.style = 'animation-name:more;'
    setTimeout(() =>{
        divMore.remove()
    }, 500)

    if (value == 10){
        vars.upgradeButton.style = 'display:block; animation-name:surgimento;'
        
    }
})


vars.upgradeButton.addEventListener('click', ()=>{
    if (value < upgradeValue){
        vars.clicks.textContent = `| You can't buy the upgrade! |`
        vars.upgradeButton.style.backgroundColor = 'rgba(214, 30, 17, 0.521)'
        setTimeout(() =>{
            vars.clicks.textContent = `| Clicks: ${value.toFixed(0)} |`
            vars.upgradeButton.style.backgroundColor = 'rgba(17, 70, 214, 0.521)'
        }, 600)
    } else {

        value -= upgradeValue
        upgradeValue *= 3
        multiplierValue *= 1.2

        vars.clicks.textContent = `| Clicks: ${value.toFixed(0)} |`


        vars.upgradeButton.style.backgroundColor = 'rgba(17, 214, 66, 0.521)'
        setTimeout(() =>{
            vars.upgradeButton.style.backgroundColor = 'rgba(17, 70, 214, 0.521)'
        }, 600)


        vars.upgradeButton.textContent = `Upgrade Cost: ${upgradeValue.toFixed(0)}`
        vars.multiplier.textContent = `Multiplier: ${multiplierValue.toFixed(1)}x |`

    }
    
})