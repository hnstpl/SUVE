export class HomeFeed {
  ID: string;
  TextContent: string;
  ImageURL: string;
  Type: string;
  DateContent: string;

  constructor(
    id: string,
    textContent: string,
    imageUrl: string,
    type: string,
    dateContent: string
  ) {
    this.ID = id;
    this.TextContent = textContent;
    this.ImageURL = imageUrl;
    this.Type = type;
    this.DateContent = dateContent;
  }
}
