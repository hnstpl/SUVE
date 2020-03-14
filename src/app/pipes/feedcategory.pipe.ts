import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "feedcategory"
})
export class FeedcategoryPipe implements PipeTransform {
  transform(value: string): string {
    let result = "";
    switch (value) {
      case "1":
        result = "Social Schemes";
        break;
      case "2":
        result = "Manifesto";
        break;
      case "3":
        result = "Keezhadi";
        break;
      case "4":
        result = "Others";
        break;
      case "5":
        result = "News";
        break;
      default:
        result = "General";
        break;
    }
    return result;
  }
}
