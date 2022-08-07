import getWeatherPromise from './api/api'
import {
  getWeather,
  getTime,
  getTemperature,
  getHumidity,
  getPressure,
  getWind,
  getCloudiness
} from './api/parser'
import drawWeatherNode from './components/weather'
import drawTemperatureNode from './components/temperature'
import drawHumidityNode from './components/humidity'
import drawPressureNode from './components/pressure'
import drawWindNode from './components/wind'
import drawCloudinessNode from './components/cloudiness'
import './style.css'

const API_KEY = '08d632f209c72452f8b88dcb7c9aa7f3'

const location = 'Australia'

const weatherPromise = getWeatherPromise(API_KEY, location)

weatherPromise
  .then(r => {
    const timeObj = getTime(r)
    const weatherObj = getWeather(r)
    const temperatureObj = getTemperature(r)
    const humidityObj = getHumidity(r)
    const pressureObj = getPressure(r)
    const windObj = getWind(r)
    const cloudinessObj = getCloudiness(r)

    document.body.appendChild(drawWeatherNode(weatherObj, timeObj))
    document.body.appendChild(drawTemperatureNode(temperatureObj))
    document.body.appendChild(drawHumidityNode(humidityObj))
    document.body.appendChild(drawPressureNode(pressureObj))
    document.body.appendChild(drawWindNode(windObj))
    document.body.appendChild(drawCloudinessNode(cloudinessObj))
  })

weatherPromise.then(r => console.log(r))
