import { appState } from "../AppState";
import { Weather } from "../Models/Weather";
import { SandboxWeather } from "./AxiosService";

class WeatherService {
  async getWeather() {
    const res = await SandboxWeather.get()
    console.log('Getting Weather', res.data);
    appState.weather = new Weather(res.data)
    console.log('AppState:', appState.quote);
  }
}


export const weatherService = new WeatherService();