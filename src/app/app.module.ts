import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';
import { WagaComponent } from './components/waga/waga.component';
import { BagaComponent } from './components/baga/baga.component';
import { MyNavComponent } from './components/my-nav/my-nav.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ContactComponent } from './components/contact/contact.component';
import {  HttpClientModule } from '@angular/common/http';
import { DetComponent } from './components/det/det.component';
import { NISPipe } from './pipes/nis.pipe';
import { CapitalLettersPipe } from './pipes/capital-letters.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HelpComponent,
    WagaComponent,
    BagaComponent,
    MyNavComponent,
    ProductDetailsComponent,
    ContactComponent,
    DetComponent,
    NISPipe,
    CapitalLettersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
