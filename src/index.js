import getWeatherPromise from './api/api'
import { getWeather } from './api/parser'

const API_KEY = '08d632f209c72452f8b88dcb7c9aa7f3'

const location = 'Singapore'

const weatherPromise = getWeatherPromise(API_KEY, location)

weatherPromise.then(r =>
  console.log(getWeather(r))
)
