import { appState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { SandboxQuote } from "./AxiosService.js";

class QuoteService {
  async getQuote() {
    const res = await SandboxQuote.get()
    console.log('Getting Quote', res.data);
    appState.quote = new Quote(res.data)
    console.log('AppState:', appState.quote);
  }
}

export const quoteService = new QuoteService()