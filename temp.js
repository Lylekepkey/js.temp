let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber(number) {
    return Math.round(number*100)/100
}


// celsius to fah and kel
celsiusInput.addEventListener('input', function() {
    let celsius = parseFloat(celsiusInput.value)
    let fahrenheit = (celsius*(9/5)) + 32
    let kelvin = celsius + 273.15

    fahrenheitInput.value = roundNumber(fahrenheit)
    kelvinInput.value = roundNumber(kelvin)
})


// fahrenheit to cel and kel
fahrenheitInput.addEventListener('input', function() {
    let fahrenheit = parseFloat(fahrenheitInput.value)
    let celsius = (fahrenheit - 32) * (5/9)
    let kelvin = (fahrenheit - 32) * (5/9) + 273.15

    celsiusInput.value = roundNumber(celsius)
    kelvinInput.value = roundNumber(kelvin)
})


// kelvin to cel and fah
// kelvinInput.addEventListener('input', function() {
//     let kelvin = parseFloat(kelvinInput.value)
//     let celsius = kelvin - 273.15
//     let fahrenheit = (kelvin - 273.15) *(9/5) + 32

//     celsiusInput.value = roundNumber(celsius)
//     fahrenheitInput.value = roundNumber(fahrenheit)
// })


// clear 
btn.addEventListener('click', () => {
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})

