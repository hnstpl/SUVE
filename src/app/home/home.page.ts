import { TwitterService } from "./../services/twitter.service";
import { HomeFeed } from "./../models/homefeed";
import { HomefeedService } from "./../services/homefeed.service";
import { Component } from "@angular/core";
import { Tweet } from "../models/tweet";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  feedCategories = ["Social Schemes", "Manifesto", "Keezhadi", "Madurai"];
  homeFeedsArray: HomeFeed[] = [];
  tweets: Tweet[] = [];
  constructor(
    private homefeedService: HomefeedService,
    private twitterService: TwitterService
  ) {}

  ngOnInit() {
    this.loadHomeFeeds();
    this.loadTwitterFeeds();
  }

  loadHomeFeeds() {
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

          const homeFeed = new HomeFeed(
            Id,
            textContent,
            imageUrl,
            type,
            dateContent
          );
          this.homeFeedsArray.push(homeFeed);
        });
      });
  }

  loadTwitterFeeds() {
    this.twitterService.getTopUserTimelines().subscribe(data => {
      // this.twitterFeeds = data;
      for (const twit of data as any) {
        const twitText = twit.text;
        let imageUrl = "../../assets/images/twitter.png";
        if (twit.extended_entities) {
          imageUrl = twit.extended_entities.media[0].media_url;
        }
        const tweet = new Tweet(twitText, imageUrl);
        this.tweets.push(tweet);
      }
      console.log(this.tweets);
    });
  }
}
