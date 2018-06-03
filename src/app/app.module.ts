import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountDown } from 'ng4-date-countdown-timer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Router } from '@angular/router';
import { WeddingPartyComponent } from './wedding-party/wedding-party.component';
import { RegistryComponent } from './registry/registry.component';
import { ExploreCincinnatiComponent } from './explore-cincinnati/explore-cincinnati.component';
import { WeddingDetailsComponent } from './wedding-details/wedding-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeddingPartyComponent,
    RegistryComponent,
    ExploreCincinnatiComponent,
    CountDown,
    WeddingDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
  }
}
