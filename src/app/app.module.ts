import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Router } from '@angular/router';
import { WeddingPartyComponent } from './wedding-party/wedding-party.component';
import { RegistryComponent } from './registry/registry.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeddingPartyComponent,
    RegistryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
  }
}
