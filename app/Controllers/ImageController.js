import { appState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function drawImage() {
  let img = appState.image
  // @ts-ignore
  document.querySelector('body').style.backgroundImage = `url(${img?.largeImgUrl})`
}





export class ImageController {
  constructor() {
    console.log('Image Controller')
    this.getImageController()
    drawImage()
    appState.on('image', drawImage)
  }
  async getImageController() {
    try {
      await imageService.getRandomImage()
    } catch (error) {
      console.error('getImageController Failed!', error)
      Pop.error(error.message)
    }
  }
}