


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = 'Loading...'
messageTwo.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                console.log(data)
                messageOne.textContent = data.location 
                messageTwo.textContent = 'Weather: ' + data.forecast.weather_type + ', Temperature: ' + data.forecast.temperature
            }
        })
    })
})