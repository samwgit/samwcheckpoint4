import { appState } from "../AppState.js"
import { quoteService } from "../Services/QuoteService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js"


function drawQuote() {
  let quote = appState.quote
  setHTML('quote', quote?.QuoteTemplate)
}


export class QuoteController {
  constructor(data) {
    this.getQuotepls()
    console.log('Quote Controller');
    appState.on("quote", drawQuote);
    drawQuote()
    console.log(drawQuote());
  }


  async getQuotepls() {
    try {
      await quoteService.getQuote()
    } catch (error) {
      console.error('[getQuotepls]', error)
      Pop.error(error.message)
    }
  }
}