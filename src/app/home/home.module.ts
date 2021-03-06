import { FeedcategoryPipe } from "./../pipes/feedcategory.pipe";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { HomePage } from "./home.page";
import { HeaderComponent } from "./../header/header.component";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage
      }
    ])
  ],
  providers: [FeedcategoryPipe],
  declarations: [HomePage, HeaderComponent, FeedcategoryPipe]
})
export class HomePageModule {}
