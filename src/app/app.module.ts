import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { SearchmovieComponent } from './searchmovie/searchmovie.component';
import { SearchComponent } from './search/search.component';
import { CarddeckComponent } from './carddeck/carddeck.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    WishlistComponent,
    CardComponent,
    DetailsComponent,
    AddComponent,
    DeleteComponent,
    SearchmovieComponent,
    SearchComponent,
    CarddeckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
