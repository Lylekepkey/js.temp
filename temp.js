const celsiusInput = document.querySelector('#celsius > input')
const fahrenheitInput = document.querySelector('#fahrenheit > input')
const kelvinInput = document.querySelector('#kelvin > input')

const btn = document.querySelector('.clear button')

function roundNumber(number) {
    return Math.round(number*100)/100
}


// celsius to fah and kel
celsiusInput.addEventListener('input', function() {
    const celsius = parseFloat(celsiusInput.value)
    const fahrenheit = (celsius*(9/5)) + 32
    const kelvin = celsius + 273.15

    fahrenheitInput.value = roundNumber(fahrenheit)
    kelvinInput.value = roundNumber(kelvin)
})


// fahrenheit to cel and kel
fahrenheitInput.addEventListener('input', function() {
    const fahrenheit = parseFloat(fahrenheitInput.value)
    const celsius = (fahrenheit - 32) * (5/9)
    const kelvin = (fahrenheit - 32) * (5/9) + 273.15

    celsiusInput.value = roundNumber(celsius)
    kelvinInput.value = roundNumber(kelvin)
})


// kelvin to cel and fah
// kelvinInput.addEventListener('input', function() {
//     const kelvin = parseFloat(kelvinInput.value)
//     const celsius = kelvin - 273.15
//     const fahrenheit = (kelvin - 273.15) *(9/5) + 32

//     celsiusInput.value = roundNumber(celsius)
//     fahrenheitInput.value = roundNumber(fahrenheit)
// })


// clear 
btn.addEventListener('click', () => {
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})

