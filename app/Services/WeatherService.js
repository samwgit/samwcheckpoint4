import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { SandboxWeather } from "./AxiosService.js";

class WeatherService {
  async getWeather() {
    const res = await SandboxWeather.get()
    console.log('Getting Weather', res.data);
    appState.weather = new Weather(res.data)
    console.log(appState.weather);
    // console.log('AppState:', appState.quote);
  }
}


export const weatherService = new WeatherService();