import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CollectableService } from './services/collectable.service';
import { CollectionComponent } from './collection/collection.component';
import { MarketComponent } from './market/market.component';
import { NavbarComponent } from './navbar/navbar.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    MarketComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [CollectableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
