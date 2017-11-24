import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../services/weather-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private weatherService:WeatherServiceService, private router:Router) {

  }

  cities:string[];

  all_weather = [];

  ngOnInit() {
    this.weatherService.getWeather("london").subscribe((weathers) => {
        console.log(weathers);
    });
  }

  search(keyword){
    if(keyword.length>0){
      this.router.navigate(['/search', keyword]);
    }
    return false;
  }

  showWeather(i){
    console.log(i);
    return false;
  }

}
