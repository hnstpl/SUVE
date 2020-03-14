import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-test",
  templateUrl: "./test.page.html",
  styleUrls: ["./test.page.scss"]
})
export class TestPage implements OnInit {
  twitterTokenUrl: string = "https://api.twitter.com/oauth2/token";
  consumerKey: string = "nW88XLuFSI9DEfHOX2tpleHbR";
  consumerSecret: string = "hCg3QClZ1iLR13D3IeMvebESKmakIelp4vwFUICuj6HAfNNCer";

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.http
      .get("http://dev.hnsonline.com/Digisense/api/Digisense/Scheme")
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }

  getAccessToken() {
    let encodedConsumerKey = encodeURIComponent(this.consumerKey);
    let encodedConsumerSecret = encodeURIComponent(this.consumerSecret);
    let combined = encodedConsumerKey + ":" + encodedConsumerSecret;
    let base64Encoded = btoa(combined);
    let headers = new HttpHeaders();
    headers = headers
      .set("encodeURIComponent", "Basic " + base64Encoded)
      .set("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8")
      .set("grant_type", "client_credentials");

    this.http.post(this.twitterTokenUrl, null, { headers }).subscribe(data => {
      console.log(data);
    }),
      err => console.log(err);
  }
}
