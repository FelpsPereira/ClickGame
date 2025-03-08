let value = 0, upgradeValue = 10, multiplierValue = 1

const vars = {
    clickButton: document.querySelector('#button'),
    clicks: document.querySelector('#Clicks'),
    upgradeButton: document.querySelector('#upgradeButton'),
    multiplier: document.querySelector('#Multiplier'),
    counter: document.querySelector('#counter')
}



vars.clickButton.addEventListener('click', ()=>{
    vars.upgradeButton.style.display = 'block'
    vars.clicks.textContent = `| Clicks: ${value = value + 1 * multiplierValue} |`
})


vars.upgradeButton.addEventListener('click', ()=>{
    if (value < upgradeValue){
        vars.clicks.textContent = `You can't buy the upgrade!`
        setTimeout(() =>{
            vars.clicks.textContent = `| Clicks: ${value} |`
        }, 1500)
    } else {
        value -= upgradeValue
        upgradeValue *= 2
        multiplierValue += 1

        vars.clicks.textContent = `| Clicks: ${value} |`
        vars.upgradeButton.textContent = `Upgrade Cost: ${upgradeValue}`
        vars.multiplier.textContent = `Multiplier: ${multiplierValue}x |`
    }
    
})