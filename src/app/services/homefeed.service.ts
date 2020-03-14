import { HomeFeed } from "./../models/homefeed";
import { Injectable } from "@angular/core";
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  AngularFirestore
} from "angularfire2/firestore";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

import { observable, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HomefeedService {
  constructor(public db: AngularFireDatabase) {}

  homeFeeds: AngularFireList<any>;

  private feedListRef = this.db.list<HomeFeed>("HomeFeed");

  getAll() {
    return this.feedListRef;
  }
}
