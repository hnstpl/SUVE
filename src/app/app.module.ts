import { TokenInterceptor } from "./token-interceptor";
import { AngularFireDatabase } from "angularfire2/database";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AngularFireModule } from "angularfire2";
import { environment } from "./../environments/environment";
import { AngularFirestore } from "angularfire2/firestore";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFirestore,
    AngularFireDatabase,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
