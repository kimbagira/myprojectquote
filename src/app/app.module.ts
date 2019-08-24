import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteeComponent } from './quotee/quotee.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteeComponent,
    QuoteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
