import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {SearchComponent} from './search/search.component';
import {AppRoutingModule} from './app-routing.module';
import {AboutComponent} from './about/about.component';
import {MainPageComponent} from './main-page/main-page.component';
import {FeaturesComponent} from './features/features.component';
import {FaqComponent} from './faq/faq.component';
import {FooterComponent} from './footer/footer.component';
import {JoyrideModule} from "ngx-joyride";
import { ShipObjectComponent } from './ship-object/ship-object.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    AboutComponent,
    MainPageComponent,
    FeaturesComponent,
    FaqComponent,
    FooterComponent,
    ShipObjectComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    JoyrideModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
