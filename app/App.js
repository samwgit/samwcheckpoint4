import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TodoController } from "./Controllers/TodoController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
  imageController = new ImageController();

  todoController = new TodoController();

  quoteController = new QuoteController();

  weatherController = new WeatherController();
}

window["app"] = new App();
