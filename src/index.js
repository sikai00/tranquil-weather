const API_KEY = '08d632f209c72452f8b88dcb7c9aa7f3'

const location = 'Singapore'

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`

fetch(url).then(response => response.json()).then(response => console.log(response))
