export class HomeFeed {
  ID: string;
  TextContent: string;
  ImageURL: string;
  Type: string;
  DateContent: string;

  constructor(
    _id: string,
    _textContent: string,
    _imageUrl: string,
    _type: string,
    _dateContent: string
  ) {
    this.ID = _id;
    this.TextContent = _textContent;
    this.ImageURL = _imageUrl;
    this.Type = _type;
    this.DateContent = _dateContent;
  }
}
