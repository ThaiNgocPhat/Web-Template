const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generqte')
const clipboardEl = document.getElementById('clipboard')
const randomFunc = {
    lower: getRandomLower,
    upper:getRandomupper,
    number:getRandomnumber,
    symbol:getRandomsymbol
}
clipboardEl.addEventListener('click');{
    const textarea = document.createElement('textarea')
    const password = resultEl.inmertext
    if(!password){return}
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard')
}
generateEl.addEventListener('click');{
    const lenght = lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasupper = uppercaseEl.checked
    const hasnumber = numbersEl.checked
    const hassymbol = symbolsEl.checked
    resultEl.inmertext = generatePassword(hasLower,hasnumber,hasupper,hassymbol,lenght)
}
function generatePassword(lower,upper,number,symbol,lenght){
    let generatePassword 
}