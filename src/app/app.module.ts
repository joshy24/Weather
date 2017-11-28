import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

import { WeatherServiceService } from './services/weather-service.service';
import { JsonparserService } from './services/jsonparser.service';
import { TodayService } from './services/today.service';
import { Weather } from './models/weather';

import { WeatherComponent } from './components/weather/weather.component';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { WeatherdetailComponent } from './components/weatherdetail/weatherdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    WeatherComponent,
    WeatherdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    WeatherServiceService,
    JsonparserService,
    TodayService,
    Weather
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
