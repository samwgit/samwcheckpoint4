export class Image {
  constructor(data) {
    this.url = data.url
    this.imgUrl = data.imgUrl
    this.largeImgUrl = data.largeImgUrl
    this.author = data.author
    this.tags = data.tags
    this.query = data.query
  }
}