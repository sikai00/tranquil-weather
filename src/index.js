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

import Background from './components/background'
import Midnight from './static/background-images/0000.jpg'
import Dawn from './static/background-images/0600.jpg'
import Morning from './static/background-images/0700.jpg'
import Sunrise from './static/background-images/0800.jpg'
import Day from './static/background-images/0900.jpg'
import Dusk from './static/background-images/1800.jpg'
import Sunset from './static/background-images/1900.jpg'
import Night from './static/background-images/2000.jpg'

const API_KEY = '08d632f209c72452f8b88dcb7c9aa7f3'

const location = 'Seoul'

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

    const imageObjArr = [
      { '0000': Midnight },
      { '0600': Dawn },
      { '0800': Sunrise },
      { '0700': Morning },
      { '0900': Day },
      { '1800': Dusk },
      { '1900': Sunset },
      { '2000': Night }
    ]
    const photo = new Image()
    photo.src = new Background(timeObj, imageObjArr).getBackground()
    photo.style.width = '100%'
    document.body.appendChild(photo)
  })

weatherPromise.then(r => console.log(r))
