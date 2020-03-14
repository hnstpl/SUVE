import { TwitterService } from "./../services/twitter.service";
import { HomeFeed } from "./../models/homefeed";
import { HomefeedService } from "./../services/homefeed.service";
import { Component } from "@angular/core";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  feedCategories = ["Social Schemes", "Manifesto", "Keezhadi", "Madurai"];
  homeFeedsArray: HomeFeed[] = [];

  constructor(
    private homefeedService: HomefeedService,
    private twitter: TwitterService
  ) {}

  ngOnInit() {
    this.homefeedService
      .getAll()
      .snapshotChanges()
      .subscribe(data => {
        data.forEach(item => {
          const Id = item.payload.val().ID;
          const textContent = item.payload.val().TextContent;
          const dateContent = item.payload.val().DateContent;
          const type = item.payload.val().Type;
          const imageUrl =
            `https://firebasestorage.googleapis.com/v0/b/madurai-constituency.appspot.com/o/` +
            `postimages%2Fresized%2F` +
            item.payload.val().ImageURL +
            `_720x480.jpg?alt=media`;

          let homeFeed = new HomeFeed(
            Id,
            textContent,
            imageUrl,
            type,
            dateContent
          );
          this.homeFeedsArray.push(homeFeed);
        });
        console.log(this.homeFeedsArray);
      });
  }
}
