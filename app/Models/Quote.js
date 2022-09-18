export class Quote {
  constructor(data) {
    console.log('Quote Controller')
    this.id = data.id
    this.content = data.content
    this.author = data.author
  }


  get QuoteTemplate() {
    return /*html*/`
    <div id="quote" class="col-2 card bg-dark text-light m-4 p-3 rounded-5">
      <p id="quote">${this.content}</p>
      <h5 class="on-hover" id="quoteAuthor">${this.author}</h5>
    </div>
    `
  }
}