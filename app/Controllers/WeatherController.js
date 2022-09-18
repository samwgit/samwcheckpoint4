import { appState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function drawWeather() {
  let weather = appState.weather
  //@ts-ignore
  setHTML('weather', weather.WeatherTemplate)
}

export class WeatherController {
  constructor() {
    this.getWeather()
    drawWeather()
  }



  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error('[Get Weather Failed!]', error)
      Pop.error(error.message)
    }
  }


}
