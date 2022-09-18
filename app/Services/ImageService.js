import { appState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { SandboxImage } from "./AxiosService.js";

class ImageService {
  async getRandomImage() {
    const res = await SandboxImage.get()
    console.log('Getting Random Image', res.data);
    appState.image = new Image(res.data)
    console.log('AppState:', appState.image);
  }
}



export const imageService = new ImageService()