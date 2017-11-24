import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../services/weather-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private weatherService:WeatherServiceService) {

  }

  all_weather = {};

  ngOnInit() {
      this.weatherService.getWeather("instanbul").subscribe((weather) => {
          console.log(weather);
      });
  }

}
