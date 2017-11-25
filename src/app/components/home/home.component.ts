import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../services/weather-service.service'
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private weatherService:WeatherServiceService, private router:Router) {

  }

  has_loaded:boolean;

  cities:string[];

  all_weather:any[];

  ngOnInit() {
    this.has_loaded = false;
    this.all_weather = [];
    this.cities = ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver']';'

    this.cities.map(city => {
        this.weatherService.getWeather(city).subscribe((weathers) => {
            //this.all_weather.push(weathers);
        });
    })
  }

  ngAfterViewInit(){
      this.has_loaded = true;
  }

  search(keyword){
    if(keyword.length>0){
      this.router.navigate(['/search', keyword]);
    }
    return false;
  }

  showWeather(i){
    this.router.navigate(['/weather', this.all_weather[i].woeid]);
    return false;
  }

}
