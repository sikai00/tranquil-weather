import getWeatherPromise from './api/api'
import { getPressure } from './api/parser'
import drawPressureNode from './components/pressure'
import './style.css'

const API_KEY = '08d632f209c72452f8b88dcb7c9aa7f3'

const location = 'Alaska'

const weatherPromise = getWeatherPromise(API_KEY, location)

weatherPromise
  .then(r => getPressure(r))
  .then(r => document.body.appendChild(drawPressureNode(r)))

weatherPromise.then(r => console.log(r))
