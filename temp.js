const celsiusInput = document.querySelector('#celsius > input')
const fahrenheitInput = document.querySelector('#fahrenheit > input')


const btn = document.querySelector('.clear button')

function roundNumber(number) {
    return Math.round(number*100)/100
}


// celsius to fah and kel
celsiusInput.addEventListener('input', function() {
    const celsius = parseFloat(celsiusInput.value)
    const fahrenheit = (celsius*(9/5)) + 32

    fahrenheitInput.value = roundNumber(fahrenheit)
})


// fahrenheit to cel and kel
fahrenheitInput.addEventListener('input', function() {
    const fahrenheit = parseFloat(fahrenheitInput.value)
    const celsius = (fahrenheit - 32) * (5/9)

    celsiusInput.value = roundNumber(celsius)
})


// clear 
btn.addEventListener('click', () => {
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})

