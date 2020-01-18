import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ContrateComponent } from './contrate/contrate.component';

@NgModule({
  declarations: [
    AppComponent,
    PortifolioComponent,
    ContrateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
