import { HttpClient } from "@angular/common/http";
import { HttpService } from "./http.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TwitterService {
  private tweets: any = [];
  private url: string = "http://maduraimp.in/twitter/user_timeline";
  constructor(private http: HttpClient) {}

  getTopUserTimelines() {
    return this.http.get(this.url);
  }
}
