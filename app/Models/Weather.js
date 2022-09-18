export class Weather {
  constructor(data) {
    this.id = data.id
    this.main = data.main
    this.description = data.description
    this.temp = data.temp
  }

  get WeatherTemplate() {
    return /*html*/`
    <div class="col-2 card bg-dark text-light m-3 rounded-5">
      <p>${this.temp}</p>
      <h5>${this.description}</h5>
    </div>
    `
  }
}